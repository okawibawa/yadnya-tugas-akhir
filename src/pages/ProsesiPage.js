import React from 'react';
import Page from '../components/Page';
import { Row, Col } from 'reactstrap';

const ProsesiPage = () => {
  return (
    <div>
      <Page title="Proses" breadcrumbs={[{ name: 'prosesi', active: true }]}>
        <Row>
          <Col>
            <h1>Hallo dari halaman prosesi!</h1>
          </Col>
        </Row>
      </Page>
    </div>
  );
};

export default ProsesiPage;
