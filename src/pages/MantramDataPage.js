import React from 'react';
import Page from '../components/Page';
import { Row, Col } from 'reactstrap';

const MantramDataPage = () => {
  return (
    <div>
      <Page title="Mantram" breadcrumbs={[{ name: 'mantram', active: true }]}>
        <Row>
          <Col>
            <h1>Hallo dari halaman mantram!</h1>
          </Col>
        </Row>
      </Page>
    </div>
  );
};

export default MantramDataPage;
