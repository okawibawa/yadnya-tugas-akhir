import React from 'react';
import { Row, Col } from 'reactstrap';
import Page from '../components/Page';

const AdminPage = () => {
  return (
    <div>
      <Page title="Admin" breadcrumbs={[{ name: 'admin', active: true }]}>
        <Row>
          <Col>
            <h1>Hallo dari halaman admin!</h1>
          </Col>
        </Row>
      </Page>
    </div>
  );
};

export default AdminPage;
