import {
  Account,
  Transaction,
  TransactionData,
  TransactionResult,
  TransactionStatus,
  TransactionType,
} from '../../../typings/banking';
import DbInterface from '../db/db_wrapper';

export class _BankingDB {
  async fetchAccounts(source: number, identifier: string): Promise<Account> {
    if (identifier == null) return null;
    const query = 'SELECT JSON_VALUE(accounts, ?) AS bank, iban FROM users WHERE identifier = ?';
    const result = (await DbInterface.fetch<Account[]>(query, ['$.bank', identifier]))[0];
    const balance = await getBalance(source);
    return <Account>{
      bank: balance,
      iban: result.iban,
    };
  }
  async fetchTransactions(identifier: string): Promise<Transaction[]> {
    if (identifier == null) return null;
    const query = `SELECT * FROM okokbanking_transactions WHERE sender_identifier = ? OR receiver_identifier = ? ORDER BY date DESC LIMIT 30`;

    const transactions = await DbInterface.fetch<Transaction[]>(query, [identifier, identifier]);

    return transactions;
  }

  async TransferMoney(
    identifier: string,
    targetIBAN: string,
    amount: number,
    source: number,
  ): Promise<TransactionStatus> {
    try {
      if (identifier == null) return TransactionStatus.GENERIC_ERROR;

      if (amount <= 0) return TransactionStatus.INVALID_NUMBER;

      const GetTransactionquery = `SELECT identifier AS identifier, JSON_VALUE(accounts, "$.bank") AS bank, iban, target.target_bank, target.target_iban
                                  FROM users,  
                                  (SELECT identifier AS target_identifier, iban AS target_iban, JSON_VALUE(accounts, "$.bank") AS target_bank FROM users WHERE iban =?) AS target 
                                  WHERE identifier = ?`;

      const result = await DbInterface.fetch<TransactionData[]>(GetTransactionquery, [
        targetIBAN,
        identifier,
      ]);
      const balance = await getBalance(source);
      const amountResult: number = result.length;
      if (amountResult == 0) return TransactionStatus.INVALID_TARGET_IBAN;

      const transaction: TransactionData = result[0];

      if (transaction.target_iban == null) return TransactionStatus.INVALID_TARGET_IBAN;

      if (balance < amount) return TransactionStatus.INSUFFICIENT_BALANCE;

      emit('npwd:TransferMoney', result[0].iban, result[0].target_iban, amount);
      return TransactionStatus.SUCCESS;
    } catch (e) {
      console.log('error in dbcontroller', e);
      return TransactionStatus.GENERIC_ERROR;
    }
  }
}

const getBalance = async (source: number) => {
  let listener;
  const balance = await new Promise<number>((resolve) => {
    const eventID = `npwd:setBankAmount-${Date.now()}`;
    listener = on(eventID, function (balance: number) {
      resolve(balance);
    });
    emit('npwd:GetBankAmount', source, eventID);
    removeEventListener(listener, () => {});
  });
  return balance;
};
const BankingDB = new _BankingDB();
export default BankingDB;
