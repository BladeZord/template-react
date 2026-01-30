import { useState, useMemo } from 'react'
import { Layout, Typography } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useMatches } from 'react-router-dom'
import { AppMenu } from './AppMenu'
import { AppHeader } from './AppHeader'
import { AppFooter } from './AppFooter'
import { AppBreadcrumb } from './AppBreadcrumb'
import { appConfig } from '@/config'
import { Outlet } from 'react-router-dom'
import type { RouteData } from '@/routes/types'

const { Sider, Content } = Layout
const { Title } = Typography

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(appConfig.menu.collapsed ?? false)
  const {
    sidebarWidth = 256,
    sidebarCollapsedWidth = 80,
    contentStyle,
  } = appConfig.layout

  const siderWidth = useMemo(
    () => (collapsed ? sidebarCollapsedWidth : sidebarWidth),
    [collapsed, sidebarCollapsedWidth, sidebarWidth]
  )

  const matches = useMatches()
  const routeData = (matches.at(-1)?.handle as RouteData | undefined) ?? null

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={sidebarWidth}
        collapsedWidth={sidebarCollapsedWidth}
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={
          <div
            style={{
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: 16,
            }}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        }
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            padding: collapsed ? 0 : '0 24px',
            borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
          }}
        >
          {!collapsed && (
            <span style={{ fontWeight: 600, fontSize: 16 }}>{appConfig.appName}</span>
          )}
        </div>
        <AppMenu />
      </Sider>
      <Layout style={{ marginLeft: siderWidth, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppHeader />
        <Content style={{ flex: 1, ...contentStyle }}>
          {routeData?.urls?.length ? (
            <AppBreadcrumb urls={routeData.urls} />
          ) : null}
          {routeData?.title ? (
            <Title level={2} style={{ marginTop: 0, marginBottom: 24 }}>
              {routeData.title}
            </Title>
          ) : null}
          <Outlet />
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  )
}
