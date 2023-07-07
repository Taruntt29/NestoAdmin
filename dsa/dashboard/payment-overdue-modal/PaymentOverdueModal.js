import { Button } from 'react-bootstrap';
import { CustomModal } from '../../../components';

const PaymentOverdueModal = ({ show }) => {
  return (
    <CustomModal show={show} title="Payment overdue">
      <p
        className="text-text-muted text-center mb-0"
        style={{ lineHeight: '1.6' }}
      >
        there are 3 invoices for whom payment are overdue. Please clear all the
        overdue to accept new leads.
      </p>
      <Button
        variant="primary"
        className="w-100 rounded-100 bg-color-primary my-4"
      >
        Pay Now
      </Button>
    </CustomModal>
  );
};

export default PaymentOverdueModal;
