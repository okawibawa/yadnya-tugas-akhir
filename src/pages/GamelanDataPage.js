import React from 'react';
import { Col, Row } from 'reactstrap';
import Page from '../components/Page';

const GamelanDataPage = () => {
  return (
    <div>
      <Page title="Gamelan" breadcrumbs={[{ name: 'gamelan', active: true }]}>
        <Row>
          <Col>
            <h1>Hallo dari halaman gamelan!</h1>
          </Col>
        </Row>
      </Page>
    </div>
  );
};

export default GamelanDataPage;
