import { Modal, Button, Row, Col, Image, Form } from 'react-bootstrap';
import './PayNowModal.css';
import { InputGroup } from 'react-bootstrap/esm';
import { FiX } from 'react-icons/fi';

const PayNowModal = ({ show, onHide }) => {
  return (
    <Modal centered size="lg" show={show} className="pay-now-modal">
      <Modal.Header className="align-items-center p2-4 pb-0">
        <Modal.Title className="ms-auto fw-bold d-flex align-items-center">
          Paynow Using Below Details
        </Modal.Title>
        <Button className="ms-auto bg-transparent p-0" onClick={onHide}>
          <FiX size={16} color="#000000" />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-3">
          <Col className="d-flex justify-content-center align-items-center">
            <Button
              className="px-5 py-2 shadow d-flex align-items-center justify-content-center gap-2"
              variant="light"
            >
              <img
                src="/assets/paynow.png"
                alt="pay now"
                className="img-fluid"
              />
              Pay through UPI
            </Button>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center pay-now-modal-qr-text">
              <h3>NestoHub</h3>
              <h6>UPI ID: 123455463423</h6>
            </div>
            <div className="text-center">
              <Image
                src="/assets/qr-img.png"
                alt="qr code"
                className="img-fluid"
              />
            </div>
            <p className="text-center my-2">UPI ID: example@upi</p>
          </Col>
          <Col xs={12}>
            <div className="border-top border-dashed my-3 custom-border"></div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="d-flex justify-content-center align-items-center">
            <Button
              className="px-5 py-2 shadow d-flex align-items-center justify-content-center gap-2"
              variant="light"
            >
              <img
                src="/assets/paynow.png"
                alt="pay now"
                className="img-fluid"
              />
              Pay to Account
            </Button>
          </Col>

          <Col>
            <div className="px-3">
              <Form.Group as={Row} className="mb-3">
                <Form.Control
                  className="border-0"
                  type="text"
                  id="bank"
                  placeholder="Bank Name"
                />
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Control
                  className="border-0"
                  type="text"
                  id="branch"
                  placeholder="Account No"
                />
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Control
                  className="border-0"
                  type="text"
                  id="accountNo"
                  placeholder="IFCS Code"
                />
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Control
                  className="border-0"
                  type="text"
                  id="ifsc"
                  placeholder="Recipient Name"
                />
              </Form.Group>
            </div>
          </Col>
          <Col xs={12}>
            <div className="border-top border-dashed my-3 custom-border"></div>
          </Col>
          {/* payment mode form */}
          <Col xs={12}>
            <div className="px-3">
              <InputGroup className="mb-3 gap-3">
                <Form.Control
                  className="border-0"
                  type="text"
                  id="bank"
                  placeholder="Payment Mode"
                />
                <Form.Control
                  className="border-0"
                  type="text"
                  id="branch"
                  placeholder="Transaction Date"
                />
              </InputGroup>

              <InputGroup className="mb-3 gap-3">
                <Form.Control
                  className="border-0"
                  type="text"
                  id="accountNo"
                  placeholder="Transaction ID"
                />
                <Form.Control
                  className="border-0"
                  type="text"
                  id="ifsc"
                  placeholder="Transaction Amount"
                />
              </InputGroup>
            </div>
          </Col>
          {/* payment mode form code end here */}

          <Col xs={12} className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="rounded-100 bg-color-primary my-4"
            >
              Update Payment Status
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PayNowModal;
