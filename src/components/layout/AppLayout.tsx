import { Suspense, useState } from 'react'
import { ProLayout, PageContainer } from '@ant-design/pro-components'
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Dropdown, Spin, Button, Tooltip } from 'antd'
import {
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from '@ant-design/icons'
import { appConfig } from '@/config/app.config'
import { menuData, buildMenuTree } from '@/config/menu.config'
import { useLayoutStore } from '@/store/layout.store'
import { AppFooter } from './AppFooter'
import { AppSettingsDrawer } from './AppSettingsDrawer'

export function AppLayout() {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const { collapsed, setCollapsed } = useLayoutStore()
  const [settingsOpen, setSettingsOpen] = useState(false)

  // Traduce el árbol de menú en cada render (cambia si cambia el idioma).
  // Este mismo árbol alimenta el menú lateral, el breadcrumb y el título
  // de página — ProLayout/PageContainer los derivan solos comparando
  // `path` contra la URL actual.
  const translatedMenu = buildMenuTree(menuData, t)

  const userMenuItems = [
    { key: 'profile', icon: <ProfileOutlined />, label: t('header.profile') },
    { type: 'divider' as const },
    { key: 'logout', icon: <LogoutOutlined />, label: t('header.logout') },
  ]

  return (
    <>
      <ProLayout
        title={appConfig.appName}
        logo={false}
        route={{ path: '/', children: translatedMenu }}
        location={location}
        menuItemRender={(item, defaultDom) =>
          item.path ? <Link to={item.path}>{defaultDom}</Link> : defaultDom
        }
        onMenuHeaderClick={() => navigate('/')}
        collapsed={collapsed}
        onCollapse={setCollapsed}
        siderWidth={appConfig.layout.siderWidth}
        fixedHeader={appConfig.layout.fixedHeader}
        breakpoint={appConfig.layout.breakpoint}
        contentStyle={appConfig.layout.contentStyle}
        avatarProps={{
          icon: <UserOutlined />,
          title: t('header.user'),
          render: (_avatarProps, defaultDom) => (
            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              {defaultDom}
            </Dropdown>
          ),
        }}
        actionsRender={() => [
          <Tooltip key="settings" title={t('settingsDrawer.title')}>
            <Button
              type="text"
              icon={<SettingOutlined />}
              onClick={() => setSettingsOpen(true)}
              aria-label={t('settingsDrawer.title')}
            />
          </Tooltip>,
        ]}
        footerRender={() => <AppFooter />}
      >
        <PageContainer>
          <Suspense
            fallback={
              <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}>
                <Spin size="large" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </PageContainer>
      </ProLayout>
      <AppSettingsDrawer open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  )
}
