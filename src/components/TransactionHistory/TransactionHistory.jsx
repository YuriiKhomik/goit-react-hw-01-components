import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  Th,
  Td,
  Tr,
} from './TransactionsTable.styled';
import { firstLetterCapitalizer } from 'utils/firstLetterCapitalizer';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TableHead>
        <tr>
          <Th>TYPE</Th>
          <Th>AMOUNT</Th>
          <Th>CURRENCY</Th>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <Tr key={id}>
              <Td>{firstLetterCapitalizer(type)}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
