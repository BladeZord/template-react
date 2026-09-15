import { Typography, Card, Row, Col } from 'antd'
import { Rocket, Zap, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const { Title: CardTitle, Paragraph } = Typography

export function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <Paragraph style={{ fontSize: 16, marginBottom: 32 }}>{t('home.description')}</Paragraph>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <Rocket size={32} color="#1890ff" style={{ marginBottom: 16 }} />
            <CardTitle level={4}>Funcional</CardTitle>
            <Paragraph type="secondary">
              Menú, header, breadcrumb y subheader resueltos por ProLayout + PageContainer.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <Zap size={32} color="#52c41a" style={{ marginBottom: 16 }} />
            <CardTitle level={4}>Escalable</CardTitle>
            <Paragraph type="secondary">
              Una sola fuente de verdad para menú/rutas en <code>menu.config.tsx</code>.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <ShieldCheck size={32} color="#722ed1" style={{ marginBottom: 16 }} />
            <CardTitle level={4}>Configurable</CardTitle>
            <Paragraph type="secondary">
              Tema, color e idioma persistidos y editables desde el panel de ajustes.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </>
  )
}
