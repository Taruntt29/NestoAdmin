import { Table } from 'react-bootstrap';
import './TransactionHistory.css';

const TransactionHistory = () => {
  return (
    <Table className="profile__transaction">
      <thead>
        <tr>
          <th>Invoice ID</th>
          <th>Transaction ID</th>
          <th>Payment Date</th>
          <th>Amount ₹</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>123</td>
          <td>2022-03-01</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>002</td>
          <td>456</td>
          <td>2022-03-02</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>003</td>
          <td>789</td>
          <td>2022-03-03</td>
          <td>3000</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
