import {
  List,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import fetchNui from '@utils/fetchNui';
import { ServerPromiseResp } from '@typings/common';
import { BankingEvents, Transaction, TransactionType } from '@typings/banking';
import { TransactionItem } from '../TransactionItem';
import { isEnvBrowser } from '@utils/misc';

export const BankingTransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    if (isEnvBrowser()) {
      const trans: Transaction[] = [
        {
          value: 100,
          sender_name: 'DSRPDEV',
          receiver_name: 'DSRPTEST',
          type: TransactionType.TRANSFER,
          sender_identifier: 'test',
          receiver_identifier: 'test',
          date: '30-05-2001',
        },
        {
          value: 100,
          sender_name: 'DSRPDEV',
          receiver_name: 'DSRPTEST',
          type: TransactionType.DEPOSIT,
          sender_identifier: 'test',
          receiver_identifier: 'test',
          date: '30-05-2001',
        },
        {
          value: 100,
          sender_name: 'DSRPDEV',
          receiver_name: 'DSRPTEST',
          type: TransactionType.WITHDRAW,
          sender_identifier: 'test',
          receiver_identifier: 'test',
          date: '30-05-2001',
        },
        {
          value: 100,
          sender_name: 'DSRPDEV',
          receiver_name: 'DSRPTEST',
          type: TransactionType.TRANSFER,
          sender_identifier: 'test',
          receiver_identifier: 'test',
          date: '30-05-2001',
        },
      ];
      setTransactions(trans);
    } else {
      fetchNui<ServerPromiseResp<Transaction[]>>(BankingEvents.GET_TRANSACTIONS).then((resp) => {
        if (resp.data) {
          setTransactions(resp.data);
        }
      });
    }
  });
  return (
    <div id={'transactions-page'}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>$</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, item) => {
              return <TransactionItem transaction={transaction} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/*<List>*/}
      {/*  {transactions.map((transaction, index)=>{*/}
      {/*    return <TransactionItem transaction={transaction}/>;*/}
      {/*  })}*/}
      {/*</List>*/}
    </div>
  );
};