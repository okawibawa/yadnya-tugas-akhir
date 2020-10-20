import React from 'react';
import Page from '../components/Page';
import { Row, Col } from 'reactstrap';

const KidungDataPage = () => {
  return (
    <div>
      <Page title="Kidung" breadcrumbs={[{ name: 'kidung', active: true }]}>
        <Row>
          <Col>
            <h1>Hallo dari halaman kidung!</h1>
          </Col>
        </Row>
      </Page>
    </div>
  );
};

export default KidungDataPage;
