import { Form, Button } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';
import RangeSlider from '../../range-slider/RangeSlider';
import FileUpload from '../file-upload/FileUpload';

const options = [
  { value: 'sector 28', label: 'Sector 28' },
  { value: 'hDFC Bank', label: 'HDFC Bank' },
];

const PersonalDetailsForm = () => {
  return (
    <>
      <Form className="profile__form ps-2">
        <Form.Group className="mb-4" controlId="companyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            className="rounded-0"
            type="text"
            placeholder="Enter company name"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="rounded-0"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            className="rounded-0"
            type="tel"
            placeholder="Enter phone number"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="rounded-0"
            type="text"
            placeholder="Enter address"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="areaOfOperation">
          <Form.Label>Area of Operation</Form.Label>
          <CreatableSelect isMulti placeholder="Add more" options={options} />
        </Form.Group>

        <Form.Group className="mb-4" controlId="bankAssociation">
          <Form.Label>Bank Association</Form.Label>
          <CreatableSelect isMulti placeholder="Add more" options={options} />
        </Form.Group>

        <RangeSlider />

        {/* file upload */}
        <FileUpload />
        {/* file upload code end here */}

        <div className="d-flex gap-4 mt-5">
          <Button className="btn-color-outline-primary rounded-100 btn-rounded">
            Cancel
          </Button>
          <Button className="btn-color-primary rounded-100 btn-rounded">
            Save
          </Button>
        </div>
      </Form>
    </>
  );
};

export default PersonalDetailsForm;
