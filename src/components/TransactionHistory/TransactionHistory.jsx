import clsx from 'clsx';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const darkTable = clsx(css.container, css.tableDark);
  return (
    <table className={darkTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
