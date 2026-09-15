import { Drawer, Space, Typography, Segmented, Select, Tooltip } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from '@/store/theme.store'
import { useLayoutStore } from '@/store/layout.store'
import type { MenuLayout } from '@/store/layout.store'
import { colorPresets } from '@/config/theme.config'

const { Text } = Typography

export interface AppSettingsDrawerProps {
  open: boolean
  onClose: () => void
}

/**
 * Panel de ajustes de apariencia: tema claro/oscuro, color primario e idioma.
 * Todo persiste en localStorage vía los stores de Zustand
 * (`theme.store.ts`), así que la elección del usuario sobrevive entre sesiones.
 */
export function AppSettingsDrawer({ open, onClose }: AppSettingsDrawerProps) {
  const { t, i18n } = useTranslation()
  const { mode, setMode, primaryColor, setPrimaryColor } = useThemeStore()
  const { layout, setLayout } = useLayoutStore()

  return (
    <Drawer title={t('settingsDrawer.title')} open={open} onClose={onClose} width={300}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Text strong>{t('settingsDrawer.menuLayout')}</Text>
          <Segmented
            block
            style={{ marginTop: 8 }}
            value={layout}
            onChange={(value) => setLayout(value as MenuLayout)}
            options={[
              { label: t('settingsDrawer.side'), value: 'side' },
              { label: t('settingsDrawer.top'), value: 'top' },
              { label: t('settingsDrawer.mix'), value: 'mix' },
            ]}
          />
        </div>

        <div>
          <Text strong>{t('settingsDrawer.theme')}</Text>
          <Segmented
            block
            style={{ marginTop: 8 }}
            value={mode}
            onChange={(value) => setMode(value as 'light' | 'dark')}
            options={[
              { label: t('settingsDrawer.light'), value: 'light' },
              { label: t('settingsDrawer.dark'), value: 'dark' },
            ]}
          />
        </div>

        <div>
          <Text strong>{t('settingsDrawer.primaryColor')}</Text>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 12 }}>
            {colorPresets.map((preset) => {
              const selected = preset.color.toLowerCase() === primaryColor.toLowerCase()
              return (
                <Tooltip key={preset.key} title={preset.label}>
                  <button
                    type="button"
                    aria-label={preset.label}
                    onClick={() => setPrimaryColor(preset.color)}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: preset.color,
                      border: selected ? '2px solid #000' : '2px solid transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    {selected && <CheckOutlined style={{ color: '#fff', fontSize: 12 }} />}
                  </button>
                </Tooltip>
              )
            })}
          </div>
        </div>

        <div>
          <Text strong>{t('settingsDrawer.language')}</Text>
          <Select
            style={{ width: '100%', marginTop: 8 }}
            value={i18n.language.startsWith('en') ? 'en' : 'es'}
            onChange={(value) => i18n.changeLanguage(value)}
            options={[
              { label: 'Español', value: 'es' },
              { label: 'English', value: 'en' },
            ]}
          />
        </div>
      </Space>
    </Drawer>
  )
}
