import { Typography, Card, Form, Switch, Select } from 'antd'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from '@/store/theme.store'
import { useLayoutStore } from '@/store/layout.store'
import { colorPresets } from '@/config/theme.config'

const { Paragraph } = Typography

export function SettingsPage() {
  const { t, i18n } = useTranslation()
  const { mode, toggleMode, primaryColor, setPrimaryColor } = useThemeStore()
  const { collapsed, setCollapsed } = useLayoutStore()

  return (
    <>
      <Paragraph type="secondary" style={{ marginBottom: 24 }}>
        Estos ajustes usan los mismos stores (Zustand, persistidos) que el panel rápido
        del header — cámbialos aquí o desde ahí, el estado es el mismo.
      </Paragraph>
      <Card title="Preferencias" style={{ maxWidth: 480 }}>
        <Form layout="vertical">
          <Form.Item label="Sidebar colapsado">
            <Switch checked={collapsed} onChange={setCollapsed} />
          </Form.Item>
          <Form.Item label={t('settingsDrawer.theme')}>
            <Switch
              checked={mode === 'dark'}
              onChange={toggleMode}
              checkedChildren={t('settingsDrawer.dark')}
              unCheckedChildren={t('settingsDrawer.light')}
            />
          </Form.Item>
          <Form.Item label={t('settingsDrawer.primaryColor')}>
            <Select
              value={primaryColor}
              onChange={setPrimaryColor}
              options={colorPresets.map((preset) => ({
                label: preset.label,
                value: preset.color,
              }))}
            />
          </Form.Item>
          <Form.Item label={t('settingsDrawer.language')}>
            <Select
              value={i18n.language.startsWith('en') ? 'en' : 'es'}
              onChange={(value) => i18n.changeLanguage(value)}
              options={[
                { label: 'Español', value: 'es' },
                { label: 'English', value: 'en' },
              ]}
            />
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}
