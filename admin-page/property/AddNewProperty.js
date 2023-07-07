import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function AddNewProperty(props) {
  console.log("props", props);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [propertydescriptionmodal, setPropertyDescriptionModal] =
    useState(false);

  const [files, setFiles] = useState([]);
  const [getCategoryAd, setCategoryAd] = useState({
    fileBytes: "",
    fileUrl: "not img",
  });
  const [getbusinesslogo, setBusinessLogo] = useState({
    fileBytes: "",
    fileUrl: "not img",
  });

  const handleAd = (event) => {
    setCategoryAd({
      fileBytes: event.target.files[0],
      fileUrl: URL.createObjectURL(event.target.files[0]),
    });
  };

  const handleBusinessLogo = (event) => {
    setBusinessLogo({
      fileBytes: event.target.files[0],
      fileUrl: URL.createObjectURL(event.target.files[0]),
    });
  };

  // handleBusinessLogo

  const handleDrop = (event) => {
    event.preventDefault();
    const fileList = Array.from(event.dataTransfer.files);
    setFiles([...files, ...fileList]);
  };

  const handleFileInputChange = (event) => {
    const fileList = Array.from(event.target.files);
    setFiles([...files, ...fileList]);
  };

  return (
    <div>
      <Modal
        size="xl"
        show={props.open}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Property
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid="lg" className="profile-upload p-0">
            <Row>
              <Col md={4} className="d-flex flex-wrap gap-3">
                <div>
                  <p>Onboarding</p>
                  <p>Property Description</p>
                  <p>Floor Plan</p>
                  <p>Brokerage</p>
                </div>
              </Col>

              <Col md={8}>
                <Row className="border-bottom mb-3 ">
                  <Col lg={6} md={6} sm={12}>
                    <div>
                      <p>Upload Documents</p>
                      {getCategoryAd.fileUrl == "not img" ? (
                        <>
                          <Form
                            className="position-relative"
                            onDragOver={(event) => event.preventDefault()}
                            onDrop={handleDrop}
                          >
                            <Form.Group
                              controlId="formFileMultiple"
                              className="mb-3"
                            >
                              <Form.Control
                                type="file"
                                // multiple
                                // onChange={handleFileInputChange}
                                onChange={handleAd}
                              />
                              <div className="drag-drop-text">
                                <img
                                  src="/assets/gallery-add.png"
                                  alt="upload img"
                                  className="img-fluid mb-2"
                                />
                                <div className="d-flex align-items-center gap-1">
                                  <span className="drag-drop-text-span fw-bold">
                                    Upload your Photo
                                  </span>{" "}
                                </div>
                              </div>
                            </Form.Group>
                          </Form>
                        </>
                      ) : (
                        <>
                          <div className="">
                            <img
                              width="160px"
                              height="160px"
                              onChange={handleAd}
                              src={getCategoryAd.fileUrl}
                              alt="upload img"
                              className="img-fluid mb-2"
                            />
                            <Form.Group
                              controlId="formFileMultiple"
                              className="mb-3"
                            >
                              <Form.Control
                                type="file"
                                // multiple
                                // onChange={handleFileInputChange}
                                onChange={handleAd}
                              />
                              Change Image
                            </Form.Group>
                          </div>
                        </>
                      )}
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div>
                      <p>Upload your Business Logo</p>
                      <div>
                        {getbusinesslogo.fileUrl == "not img" ? (
                          <>
                            <Form
                              className="position-relative"
                              onDragOver={(event) => event.preventDefault()}
                              onDrop={handleDrop}
                            >
                              <Form.Group
                                controlId="formFileMultiple"
                                className="mb-3"
                              >
                                <Form.Control
                                  type="file"
                                  // multiple
                                  // onChange={handleFileInputChange}
                                  onChange={handleBusinessLogo}
                                />
                                <div className="drag-drop-text">
                                  <img
                                    src="/assets/gallery-add.png"
                                    alt="upload img"
                                    className="img-fluid mb-2"
                                  />
                                  <div className="d-flex align-items-center gap-1">
                                    <span className="drag-drop-text-span fw-bold">
                                      Upload your Photo
                                    </span>{" "}
                                  </div>
                                </div>
                              </Form.Group>
                            </Form>
                          </>
                        ) : (
                          <>
                            <div className="">
                              <img
                                width="160px"
                                height="160px"
                                src={getbusinesslogo.fileUrl}
                                alt="upload img"
                                className="img-fluid mb-2"
                              />
                              <Form.Group
                                controlId="formFileMultiple"
                                className="mb-3"
                              >
                                <Form.Control
                                  type="file"
                                  // multiple
                                  // onChange={handleFileInputChange}
                                  onChange={handleBusinessLogo}
                                />
                                Change Image
                              </Form.Group>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="">
                  <Col md={6} className="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Sub company</Form.Label>
                      <Form.Control
                        type="text"
                        className="add-property-textfiled"
                        placeholder="Please enter your sub company"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Representative</Form.Label>
                      <Form.Control
                        type="text"
                        className="add-property-textfiled"
                        placeholder="Please enter your representative"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Contact number</Form.Label>
                      <Form.Control
                        type="text"
                        className="add-property-textfiled"
                        placeholder="Please enter your contact number"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        className="add-property-textfiled"
                        placeholder="Please enter your email"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>GST</Form.Label>
                      <Form.Control
                        type="text"
                        className="add-property-textfiled"
                        placeholder="Please enter your GST num ber"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>PAN</Form.Label>
                      <Form.Control
                        type="text"
                        className="add-property-textfiled"
                        placeholder="Please enter your PAN number"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="">
                    <div className="d-flex gap-3 align-items-center">
                      <Button
                        variant="primary"
                        size="sm"
                        className="rounded-2 px-4"
                        onClick={() => setPropertyDescriptionModal(true)}
                      >
                        Next
                      </Button>
                      {/* <div className="add-property-btn">Next</div> */}
                      <Button
                        variant="transparent"
                        size="sm"
                        className="rounded-2 px-4 border-primary"
                      >
                        Reset
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
