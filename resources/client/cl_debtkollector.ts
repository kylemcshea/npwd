import { BillingEvents, Bills } from '../../typings/debtkollector';
import { RegisterNuiCB, RegisterNuiProxy } from './cl_utils';

RegisterNuiProxy(BillingEvents.GET_BILLS);

RegisterNuiCB<number>(BillingEvents.PAY_BILL, (billID: number, cb) => {
  emitNet('esx_billing:payBillEvent', billID);
  cb({});
});
