import Page from 'components/Page';
import { NumberWidget } from 'components/Widget';
import React from 'react';
import { Col, Row } from 'reactstrap';

// const today = new Date();
// const lastWeek = new Date(
//   today.getFullYear(),
//   today.getMonth(),
//   today.getDate() - 7,
// );

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row className="w-100">
          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget title="Manusa Yadnya" number="4" color="secondary" />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget title="Dewa Yadnya" number="4" color="secondary" />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget title="Rsi Yadnya" number="4" color="secondary" />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget title="Pitra Yadnya" number="4" color="secondary" />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget title="Bhuta Yadnya" number="4" color="secondary" />
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
