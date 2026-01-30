import { Layout, Typography, Space } from 'antd'
import { appConfig } from '@/config'

const { Footer: AntFooter } = Layout
const { Text } = Typography

export function AppFooter() {
  const { footer } = appConfig

  return (
    <AntFooter
      style={{
        textAlign: 'center',
        background: '#f0f2f5',
        padding: '16px 24px',
      }}
    >
      <Space direction="vertical" size={4} style={{ width: '100%' }}>
        {footer.links && footer.links.length > 0 && (
          <Space split={<span style={{ color: '#bfbfbf' }}>|</span>}>
            {footer.links.map((link) => (
              <a key={link.key} href={link.href ?? '#'}>
                {link.label}
              </a>
            ))}
          </Space>
        )}
        {footer.copyright && (
          <Text type="secondary" style={{ fontSize: 13 }}>
            {footer.copyright}
          </Text>
        )}
        {footer.showBuiltWith && (
          <Text type="secondary" style={{ fontSize: 12 }}>
            React · TypeScript · Ant Design · Vite
          </Text>
        )}
        {footer.extra}
      </Space>
    </AntFooter>
  )
}
