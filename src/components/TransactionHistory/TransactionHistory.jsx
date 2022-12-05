import PropTypes from 'prop-types';
import {
  TransactionsTable,
  HeadTable,
  CellTable,
  FirstCellTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <TransactionsTable>
        <HeadTable>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </HeadTable>

        <tbody>
          {items.map(({ id, type, amount, currency }, idx) => (
            <tr key={id}>
              <FirstCellTable idx={idx}>{type}</FirstCellTable>
              <CellTable idx={idx}>{amount}</CellTable>
              <CellTable idx={idx}>{currency}</CellTable>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
