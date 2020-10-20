import React from 'react';
import Page from '../components/Page';
import { Row, Col } from 'reactstrap';

const TariDataPage = () => {
  return (
    <div>
      <Page title="Tari" breadcrumbs={[{ name: 'tari', active: true }]}>
        <Row>
          <Col>
            <h1>Hallo dari halaman tari!</h1>
          </Col>
        </Row>
      </Page>
    </div>
  );
};

export default TariDataPage;
