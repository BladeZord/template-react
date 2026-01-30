import { Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { appConfig } from '@/config'

function buildMenuItems(
  items: typeof appConfig.menu.items
): MenuProps['items'] {
  return items.map((item) => {
    if (item.children?.length) {
      return {
        key: item.key,
        icon: item.icon,
        label: item.label,
        children: item.children.map((child) => ({
          key: child.key,
          label: child.label,
        })),
      }
    }
    return {
      key: item.key,
      icon: item.icon,
      label: item.label,
    }
  })
}

export function AppMenu() {
  const navigate = useNavigate()
  const location = useLocation()
  const { menu } = appConfig

  const findSelectedKey = (): string => {
    const path = location.pathname
    for (const item of menu.items) {
      if (item.path === path) return item.key
      for (const child of item.children ?? []) {
        if (child.path === path) return child.key
      }
    }
    return menu.items[0]?.key ?? 'home'
  }

  const findPathByKey = (key: string): string | undefined => {
    for (const item of menu.items) {
      if (item.key === key && item.path) return item.path
      for (const child of item.children ?? []) {
        if (child.key === key && child.path) return child.path
      }
    }
    return undefined
  }

  const handleClick: MenuProps['onClick'] = ({ key }) => {
    const path = findPathByKey(key)
    if (path) navigate(path)
  }

  const items = buildMenuItems(menu.items)

  return (
    <Menu
      mode="inline"
      selectedKeys={[findSelectedKey()]}
      defaultOpenKeys={menu.defaultOpenKeys}
      items={items}
      onClick={handleClick}
      style={{ height: '100%', borderRight: 0 }}
    />
  )
}
