import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import { Transaction, TransactionType } from '@typings/banking';
import OutboxIcon from '@mui/icons-material/Outbox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { AddCard, Payments } from '@mui/icons-material';
import { formatMoney } from '../utils/banking.utils';

export const TransactionItem: React.FC<{ transaction: Transaction }> = ({
  children,
  transaction,
}) => {
  let icon;
  switch (transaction.type) {
    case TransactionType.DEPOSIT:
      icon = <AddCard />;
      break;
    case TransactionType.WITHDRAW:
      icon = <Payments />;
      break;
    case TransactionType.TRANSFER:
      icon = <OutboxIcon />;
      break;
    default:
      icon = <HelpOutlineIcon />;
      break;
  }

  return (
    <TableRow key={transaction.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {icon}
      </TableCell>
      <TableCell align="right">${formatMoney(transaction.value)}</TableCell>
      <TableCell align="right">{transaction.sender_name}</TableCell>
      <TableCell align="right">{transaction.receiver_name}</TableCell>
    </TableRow>
  );
};
