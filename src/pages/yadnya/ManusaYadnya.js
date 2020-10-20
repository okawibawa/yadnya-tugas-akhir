import React from 'react';
import Page from '../../components/Page';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdEdit, MdAddCircleOutline } from 'react-icons/md';

const ManusaYadnya = () => {
  return (
    <Page
      title="Manusa Yadnya"
      breadcrumbs={[{ name: 'manusa yadnya', active: true }]}
      className="TablePage"
    >
      <Row>
        <Col className="mb-3">
          <h1>Hallo dari halaman Manusa Yadnya! Apa kabar?</h1>
          <Row>
            <Col>
              <Card className="mb-3">
                <CardHeader>
                  <Button color="success" className="d-flex align-items-center">
                    <MdAddCircleOutline size={22} className="mr-2" />
                    Tambah Data
                  </Button>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nama Upacara</th>
                        <th></th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <Link to="/manusa-yadnya/:slug">Mesangih</Link>
                        </td>
                        <td></td>
                        <td>
                          <Button
                            color="primary"
                            size="sm"
                            className="mr-3 align-items-center"
                          >
                            <MdEdit size={16} className="mr-2" />
                            Edit
                          </Button>
                          <Button color="danger" size="sm">
                            <MdDeleteForever size={16} className="mr-2" />
                            hapus
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <Link to="/manusa-yadnya/:slug">Mesangih</Link>
                        </td>
                        <td></td>
                        <td>
                          <Button
                            color="primary"
                            size="sm"
                            className="mr-3 align-items-center"
                          >
                            <MdEdit size={16} className="mr-2" />
                            Edit
                          </Button>
                          <Button color="danger" size="sm">
                            <MdDeleteForever size={16} className="mr-2" />
                            hapus
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Page>
  );
};

export default ManusaYadnya;
