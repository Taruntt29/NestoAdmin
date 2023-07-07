import { GoPlus } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import Toggle from "react-toggle";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../Admin.css";
import AddNewProperty from "./AddNewProperty";

const PropertyManagementNew = () => {
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
    <Row>
      <Col xs={12}>{/* <Sidebar /> */}</Col>
      <Col xs={12} style={{ backgroundColor: "#F5F5F5" }} className="py-4">
        <div className="pb-3  d-flex justify-content-between">
          <h3>Property Listingfbb</h3>
          <div
            className="bg-primary text-white align-items-center  gap-2"
            onClick={() => setLgShow(true)}
          >
            <p className="mt-2">+</p>
            <p className="mt-2">New Property</p>
          </div>
        </div>
        <div className="d-flex gap-2 property-listing-menu">
          <div className="content gap-2 border">
            <span>life</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content gap-2 border">
            <span>health</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content gap-2 border">
            <span>helong-term disabilityalth</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content gap-2 border">
            <span>helong-term disabilityalth</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content text-primary gap-2 border">
            <GoPlus
              style={{ color: "black" }}
              className="text-primary"
              size={12}
            />
            <span>Add Filter</span>
          </div>
          <div className="content text-primary gap-2 border">
            <span>Delete All</span>
          </div>
        </div>
        <div className="my-4">
          <h6>Showing 10 Property Listing</h6>
        </div>
        <table class="table propery-management-table">
          <thead className="">
            <tr>
              <th scope="col " className="heading">
                <div className="d-flex gap-2  justify-content-center align-items-center">
                  <input type="checkbox" name="" id="" />
                  <span>
                     <img src="/assets/column-sorting.png" alt="prop-sort" />
                  </span>
                </div>
              </th>
              <th scope="col " className="heading">
                Property Type
              </th>
              <th scope="col " className="heading">
                Location
              </th>
              <th scope="col " className="heading">
                Price
              </th>
              <th scope="col " className="heading">
                Brokerage
              </th>
              <th scope="col " className="heading">
                Tags
              </th>
              <th scope="col " className="heading">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <input type="checkbox" name="" id="" />
                  <span>1</span>
                </div>
              </th>
              <td>
                <div>2 BHK</div>
              </td>
              <td>
                {" "}
                <div>Sec-29</div>
                <p className="num">Gurugram</p>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div>
                  <select name="" id="" className="property-tags">
                    <option value="">Recent</option>
                    <option value="">Featured</option>
                    <option value="">Best Seller</option>
                    <option value="">Promotional</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                  <label>
                    <Toggle
                      // defaultChecked={this.state.tofuIsReady}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <input type="checkbox" name="" id="" />
                  <span>1</span>
                </div>
              </th>
              <td>
                <div>2 BHK</div>
              </td>
              <td>
                {" "}
                <div>Sec-29</div>
                <p className="num">Gurugram</p>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div>
                  <select name="" id="" className="property-tags">
                    <option value="">Recent</option>
                    <option value="">Featured</option>
                    <option value="">Best Seller</option>
                    <option value="">Promotional</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                  <label>
                    <Toggle
                      // defaultChecked={this.state.tofuIsReady}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Modal */}
        {/* <>
          <Modal
            size="xl"
            show={lgShow}
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
        </> */}

        <AddNewProperty open={lgShow} />

        {/* Modal */}
      </Col>
    </Row>
  );
};

export default PropertyManagementNew;
