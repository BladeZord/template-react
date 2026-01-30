import { Typography, Card, Form, Switch } from 'antd'

const { Paragraph } = Typography

export function SettingsPage() {
  return (
    <>
      <Paragraph type="secondary" style={{ marginBottom: 24 }}>
        Ejemplo de página de ajustes. Conecta aquí los valores del config si quieres
        que el usuario pueda cambiarlos en runtime.
      </Paragraph>
      <Card title="Preferencias" style={{ maxWidth: 480 }}>
        <Form layout="vertical">
          <Form.Item label="Sidebar colapsado" name="sidebarCollapsed" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Modo oscuro" name="darkMode" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}
