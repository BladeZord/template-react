import { Typography, Card, Row, Col } from 'antd'
import { RocketOutlined, ThunderboltOutlined, SafetyOutlined } from '@ant-design/icons'

const { Title: CardTitle, Paragraph } = Typography

export function HomePage() {
  return (
    <>
      <Paragraph style={{ fontSize: 16, marginBottom: 32 }}>
        Plantilla base con React, TypeScript, Ant Design, menú, header, footer y layout.
        Todo se configura desde <code>src/config/app.config.tsx</code>.
      </Paragraph>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <RocketOutlined style={{ fontSize: 32, color: '#1890ff', marginBottom: 16 }} />
            <CardTitle level={4}>Funcional</CardTitle>
            <Paragraph type="secondary">
              Menú con rutas, header con usuario, footer con enlaces. Listo para extender.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <ThunderboltOutlined style={{ fontSize: 32, color: '#52c41a', marginBottom: 16 }} />
            <CardTitle level={4}>Escalable</CardTitle>
            <Paragraph type="secondary">
              Estructura por carpetas: config, components, layout, pages. Fácil de escalar.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable>
            <SafetyOutlined style={{ fontSize: 32, color: '#722ed1', marginBottom: 16 }} />
            <CardTitle level={4}>Configurable</CardTitle>
            <Paragraph type="secondary">
              Menu, header, footer y layout se controlan desde un único config.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </>
  )
}
