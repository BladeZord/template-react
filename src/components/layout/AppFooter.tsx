import { Typography, Space, theme as antTheme } from 'antd'
import { useTranslation } from 'react-i18next'
import { appConfig } from '@/config/app.config'

const { Text } = Typography

export function AppFooter() {
  const { t } = useTranslation()
  const { token } = antTheme.useToken()

  const links = [
    { key: 'privacy', label: t('footer.privacy') },
    { key: 'terms', label: t('footer.terms') },
    { key: 'help', label: t('footer.help') },
  ]

  return (
    <div
      style={{
        textAlign: 'center',
        background: token.colorBgLayout,
        padding: '16px 24px',
      }}
    >
      <Space direction="vertical" size={4} style={{ width: '100%' }}>
        <Space split={<span style={{ color: token.colorBorder }}>|</span>}>
          {links.map((link) => (
            <a key={link.key} href="#">
              {link.label}
            </a>
          ))}
        </Space>
        <Text type="secondary" style={{ fontSize: 13 }}>
          {t('footer.copyright', { year: new Date().getFullYear(), appName: appConfig.appName })}
        </Text>
        <Text type="secondary" style={{ fontSize: 12 }}>
          {t('footer.builtWith')}
        </Text>
      </Space>
    </div>
  )
}
