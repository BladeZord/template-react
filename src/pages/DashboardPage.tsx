import { Card, Row, Col, Statistic, Button, Alert, Skeleton } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined, UserOutlined, ReloadOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useExampleQuery } from '@/hooks/useExampleQuery'

export function DashboardPage() {
  const { t } = useTranslation()
  const { data, isLoading, isError, refetch, isFetching } = useExampleQuery()

  return (
    <>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Activos"
              value={1128}
              prefix={<ArrowUpOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Inactivos"
              value={93}
              prefix={<ArrowDownOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic title="Usuarios" value={1128} prefix={<UserOutlined />} />
          </Card>
        </Col>
      </Row>

      <Card
        title={t('dashboard.exampleQueryTitle')}
        style={{ marginTop: 24 }}
        extra={
          <Button
            size="small"
            icon={<ReloadOutlined />}
            loading={isFetching}
            onClick={() => refetch()}
          >
            {t('dashboard.refresh')}
          </Button>
        }
      >
        {isLoading && <Skeleton active />}
        {isError && <Alert type="error" message={t('dashboard.error')} showIcon />}
        {data && (
          <Row gutter={[24, 24]}>
            {data.map((stat) => (
              <Col xs={24} sm={8} key={stat.label}>
                <Statistic title={stat.label} value={stat.value} />
              </Col>
            ))}
          </Row>
        )}
      </Card>
    </>
  )
}
