import { Layout, Dropdown, Space, Typography } from 'antd'
import type { MenuProps } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { appConfig } from '@/config'

const { Header: AntHeader } = Layout
const { Text } = Typography

export function AppHeader() {
  const { header } = appConfig

  const userMenuItems: MenuProps['items'] = header.userMenu?.items.map(
    (item) => ({
      key: item.key,
      label: item.label,
      onClick: item.onClick,
    })
  )

  return (
    <AntHeader
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: '#fff',
        boxShadow: '0 1px 4px rgba(0,21,41,.08)',
      }}
    >
      <Space size="middle">
        {header.showLogo && header.logo && <span>{header.logo}</span>}
        <Text strong style={{ fontSize: 18 }}>
          {header.title}
        </Text>
      </Space>

      <Space size="large">
        {header.extra}
        {header.showUser && header.userMenu && (
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <Space style={{ cursor: 'pointer' }}>
              <UserOutlined style={{ fontSize: 18 }} />
              <Text>{header.userMenu.label}</Text>
            </Space>
          </Dropdown>
        )}
      </Space>
    </AntHeader>
  )
}
