import {
  Button,
  Card,
  Row,
  Col,
  Image,
  FloatingLabel,
  Form,
  Container,
} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Rating from '../property-details/Rating';

const overdueColumnsData = [
  { label: 'Unity type', value: '3 BHK' },
  { label: 'Client Name', value: 'Tisha' },
  { label: 'Broker Name', value: 'Vinit' },
  { label: 'Broker ID', value: 'BR01211' },
  { label: 'Query No.', value: '3234' },
  { label: 'Bank Name', value: 'HDFC' },
  { label: 'Disbursed Amt', value: '3.94 Cr' },
  { label: 'Disbursed Date', value: '12/01/23' },
  { label: 'Invoice No', value: '34454' },
  { label: 'Invoice Date', value: '14/01/23' },
  { label: 'Invoice Amt', value: '3.94 Cr' },
];

const assignedColumnsData = [
  { label: 'Property Type', value: '3 BHK' },
  { label: 'Demanding Cost', value: '₹ 3.94 Cr' },
  { label: 'Broker Name', value: 'Tisha' },
  { label: 'Broker ID', value: '7865432' },
];

const acceptedLoanQueriesData = [
  { label: 'Property Type', value: '3 BHK' },
  { label: 'Demanding Cost', value: '₹ 3.94 Cr' },
  { label: 'Broker Name', value: 'Tisha' },
  { label: 'Broker ID', value: '7865432' },
  { label: 'Broker ID', value: '7865432' },
  { label: 'Broker ID', value: '7865432' },
];

const DashboardChildCard = ({ cardType, status, payment }) => {
  const location = useLocation();

  const cardProps = {};
  if (location.pathname === '/dsa/home-dashboard') {
    cardProps.as = Link;
    cardProps.to = `/dsa/home-dashboard/property-details-assigned`;
  }
  return (
    <Card
      {...cardProps}
      className={`border-0 shadow-sm ${
        payment ? 'mt-5' : 'mt-3'
      } text-decoration-none`}
    >
      {/* /home-dashboard/property-details-info */}
      <Card.Body
        className={`p-0 ${cardType === `propertyDetailsProfile` ? `p-3` : ''}`}
      >
        <Row>
          {/* property details page button start */}
          {location.pathname === '/dsa/home-dashboard/property-details' && (
            <Col xs={12} className="d-flex justify-content-end accept-deny">
              <div className="d-flex gap-2 bg-transparent">
                <Button
                  className="btn-color-primary"
                  style={{ width: '150px' }}
                >
                  Accept
                </Button>
                <Button className="btn-color-danger" style={{ width: '150px' }}>
                  Deny
                </Button>
              </div>
            </Col>
          )}
          {/* property details page button end */}

          <Col className="col-12 col-sm-auto d-flex">
            <Card.Img
              className={`align-self-stretch d-flex ${
                cardType === `propertyDetailsProfile`
                  ? `rounded-circle property__details__profileimg`
                  : ''
              }`}
              src={`${
                cardType === 'overdue'
                  ? `/assets/dashboard-img-content.png`
                  : `/assets/dashboard-img-content-small.png`
              }`}
            />
          </Col>
          <Col
            className={`col dash-content ${
              cardType === `propertyDetailsProfile`
                ? 'd-flex flex-column justify-content-center'
                : ''
            }`}
          >
            <Container>
              <Row className="g-3 align-items-start">
                <Col xs={12}>
                  {cardType === 'overdue' && !payment && (
                    <Button className="card-label bg-color-red btn-sm">
                      Overdue
                    </Button>
                  )}

                  {cardType === 'overdue' && payment && (
                    <Button
                      className={`card-label bg-color-red btn-sm ${
                        payment !== 'Paid'
                          ? payment === 'Pending'
                            ? `Pending`
                            : payment === 'Processing'
                            ? 'Processing'
                            : `Overdue`
                          : `Paid`
                      }`}
                    >
                      {payment}
                    </Button>
                  )}

                  {cardType === 'acceptedLoanQueries' && (
                    <Button className="card-label bg-color-primary btn-sm">
                      Assigned
                    </Button>
                  )}

                  {/* property-details-assigned page content */}
                  {cardType === 'propertyDetailsProfile' &&
                    location.pathname ===
                      '/dsa/home-dashboard/property-details-assigned' && (
                      <>
                        <div className="card-label d-flex justify-content-end align-items-center bg-transparent date-container">
                          05/01/23
                        </div>
                      </>
                    )}
                  {/* property-details-assigned page content end */}
                </Col>

                <Col
                  xs={12}
                  className="bg-transparent gap-2 dashboard-cards-title"
                >
                  <Card.Title className="d-flex align-items-center justify-content-start fw-bold">
                    Sky Dandelions Apartment
                    {/* rating */}
                    {!payment && <Rating cardType="propertyDetailsProfile" />}
                  </Card.Title>
                  <Card.Subtitle className="d-flex justify-content-start text-muted mt-1">
                    Sector-29,Gurugram
                  </Card.Subtitle>
                </Col>

                {cardType === 'overdue' &&
                  overdueColumnsData.map(({ label, value }, index) => (
                    <Col
                      key={index}
                      xs={12}
                      md={6}
                      lg={4}
                      className="text-truncate"
                    >
                      <span className="fw-semibold text-dark">{label}</span> :{' '}
                      <span className="text-dark">{value}</span>
                    </Col>
                  ))}

                {cardType === 'overdue' && !payment && (
                  <Col
                    xs={12}
                    md={6}
                    lg={4}
                    className="d-grid bg-transparent px-3 card__paynow__invoice"
                  >
                    <Button className="ms-0 start-0 download d-flex align-items-center justify-content-center gap-2 btn-color-outline-primary rounded-100">
                      Download Invoice
                      <Image
                        src="/assets/upload-icon.svg"
                        alt="upload"
                        className='upload'
                      />
                    </Button>

                    <Button className="pay btn-color-primary rounded-100 my-2">
                      Pay Now
                    </Button>

                    {/* payment !== 'Paid'
                        ? payment === 'Pending'
                          ? `Pending`
                          : payment === 'Processing'
                          ? 'Processing'
                          : `Overdue`
                        : `Paid`
                    } */}
                  </Col>
                )}

                {/* payment page code start */}
                {payment && (
                  <Col
                    xs={12}
                    md={6}
                    lg={4}
                    className="d-grid bg-transparent px-3 card__paynow__invoice"
                  >
                    {payment !== 'Paid' ? (
                      payment === 'Pending' ? (
                        <>
                          <Button className="ms-0 start-0 download d-flex align-items-center justify-content-center gap-2 btn-color-outline-primary rounded-100">
                            Download Invoice
                            <Image
                              src="/assets/upload-icon.svg"
                              alt="upload"
                              className='upload'
                            />
                          </Button>
                          <Button className="pay btn-color-primary rounded-100 my-2">
                            Pay Now
                          </Button>
                        </>
                      ) : payment === 'Processing' ? (
                        <>
                          <Button className="ms-0 start-0 download d-flex align-items-center justify-content-center gap-2 btn-color-outline-primary rounded-100 mb-2">
                            Download Invoice
                            <Image                          
                              src="/assets/upload-icon.svg"
                              alt="upload"
                              className='upload'
                            />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button className="ms-0 start-0 download d-flex align-items-center justify-content-center gap-2 btn-color-outline-primary rounded-100">
                            Download Invoice
                            <Image
                              src="/assets/upload-icon.svg"
                              alt="upload"
                              className='upload'
                            />
                          </Button>
                          <Button className="pay btn-color-primary rounded-100 my-2">
                            Pay Now
                          </Button>
                        </>
                      )
                    ) : (
                      <Button className="ms-0 start-0 download d-flex align-items-center justify-content-center gap-2 btn-color-outline-primary rounded-100">
                        Download Invoice
                        <Image
                          src="/assets/upload-icon.svg"
                          alt="upload"
                          className='upload'
                        />
                      </Button>
                    )}
                  </Col>
                )}

                {/* payment page code end */}

                {/* assigned cards */}
                {cardType === 'assigned' &&
                  assignedColumnsData.map(({ label, value }, index) => (
                    <Col key={index} xs={12} sm={12} md={6} lg={4}>
                      <span className="fw-semibold text-dark">{label}</span> :{' '}
                      <span className="text-dark">{value}</span>
                    </Col>
                  ))}
                {/* assigned cards code end here */}

                {/* accepted loan queries code start */}
                {cardType === 'acceptedLoanQueries' &&
                  acceptedLoanQueriesData.map(({ label, value }, index) => (
                    <Col
                      key={index}
                      xs={12}
                      md={6}
                      lg={4}
                      className="text-truncate"
                    >
                      <span className="fw-semibold text-dark">{label}</span> :{' '}
                      <span className="text-dark">{value}</span>
                    </Col>
                  ))}
                {/* accepted loan queries code end here */}
              </Row>
            </Container>
          </Col>

          {cardType === 'assigned' && !status && (
            <Col className="col-12 col-lg-3 border-start d-flex justify-content-center align-items-center">
              <div className="mt-4 mt-lg-0 text-center w-100 w-lg-auto">
                <Card.Text>Lorem Ipsum Dummy text</Card.Text>
                <div className="d-grid px-4 gap-2">
                  <Button className="btn-color-primary">Accept</Button>
                  <Button className="btn-color-danger">Deny</Button>
                  <Button
                    variant="link"
                    as={Link}
                    to="/dsa/home-dashboard/property-details"
                    className="text-decoration-none color-blue"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Col>
          )}

          {/* assigned card code start here  */}
          {cardType === 'assigned' && status && (
            <Col className="col-12 mt-3 mt-md-0 col-md-3 border-start d-flex flex-column justify-content-center nes__dashboard__loanmanagement text-center">
              <Form className="px-2">
                <FloatingLabel
                  controlId="statusSelect"
                  label="Status"
                  className="mb-3"
                >
                  <Form.Select className="border-0" required>
                    {/* <option>status</option> */}
                    <option value="status1">Assigned</option>
                    <option value="status2">Matured</option>
                    <option value="status3">Not Matured</option>
                  </Form.Select>
                </FloatingLabel>
              </Form>
              <span>
                <span>Last Status Date</span> : <span>04/01/23</span>
              </span>
            </Col>
          )}
          {/* assigned code end here  */}
        </Row>

        {cardType === `propertyDetailsProfile` && (
          <Row className="mt-3 dashboard-parent-card g-2">
            {overdueColumnsData.map(({ label, value }, index) => (
              <Col
                key={index}
                xs={12}
                md={3}
                className="text-truncate wild-sand-bg"
              >
                <span className="fw-semibold text-dark">{label}</span> :
                <span className="text-dark">{value}</span>
              </Col>
            ))}
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default DashboardChildCard;
