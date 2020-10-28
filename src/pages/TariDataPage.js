import React from 'react';
import Page from '../components/Page';
import SearchInput from '../components/SearchInput';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
} from 'reactstrap';
import { MdDeleteForever, MdEdit, MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TariDataPage = () => {
  return (
    <div>
      <Page title="Tari" breadcrumbs={[{ name: 'tari', active: true }]}>
        <Row>
          <Col>
            {/* TODO: add tables for data */}
            <Row>
              <Col>
                <Card className="mb-3">
                  <CardHeader className="d-flex align-items-center justify-content-between">
                    <Button
                      color="success"
                      className="d-flex align-items-center"
                    >
                      <MdAddCircleOutline size={22} className="mr-2" />
                      Tambah Data
                    </Button>

                    <SearchInput />
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nama Tari</th>
                          <th>Yadnya</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>
                            <Link to="/prosesi/:slug">Panca Sembah</Link>
                          </td>
                          <td>
                            <Link to="/proses/:slug">Dewa Yadnya</Link>
                          </td>
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
                            <Link to="/proses/:slug">Panca Sembah</Link>
                          </td>
                          <td>
                            <Link to="/proses/:slug">Umum</Link>
                          </td>
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
    </div>
  );
};

export default TariDataPage;
