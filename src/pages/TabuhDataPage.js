import React from 'react';
import { Row, Col } from 'reactstrap';
import Page from '../components/Page';

const TabuhDataPage = () => {
  return (
    <div>
      <Page title="Tabuh" breadcrumbs={[{ name: 'tabuh', active: true }]}>
        <Row>
          <Col>
            <h1>Hallo dari halaman Tabuh!</h1>
          </Col>
        </Row>
      </Page>
    </div>
  );
};

export default TabuhDataPage;
