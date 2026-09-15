import { Typography, Card, Row, Col } from 'antd'
import { RocketOutlined, ThunderboltOutlined, SafetyOutlined } from '@ant-design/icons'
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
            <RocketOutlined style={{ fontSize: 32, color: '#1890ff', marginBottom: 16 }} />
            <CardTitle level={4}>Funcional</CardTitle>
            <Paragraph type="secondary">
              Menú, header, breadcrumb y subheader resueltos por ProLayout + PageContainer.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <ThunderboltOutlined style={{ fontSize: 32, color: '#52c41a', marginBottom: 16 }} />
            <CardTitle level={4}>Escalable</CardTitle>
            <Paragraph type="secondary">
              Una sola fuente de verdad para menú/rutas en <code>menu.config.tsx</code>.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <SafetyOutlined style={{ fontSize: 32, color: '#722ed1', marginBottom: 16 }} />
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
