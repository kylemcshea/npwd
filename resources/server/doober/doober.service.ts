import PlayerService from '../players/player.service';
import { dooberLogger } from './doober.utils';
import DooberDB, { _DooberDB } from './doober.db';
import { Bills } from '../../../typings/debtkollector';
import { PromiseEventResp, PromiseRequest } from '../lib/PromiseNetEvents/promise.types';
import {
  Account,
  Transaction,
  TransactionStatus,
  TranscationArguments,
} from '../../../typings/banking';

class _DooberService {
  private readonly dooberDB: _DooberDB;

  constructor() {
    this.dooberDB = DooberDB;
    dooberLogger.debug('Dooberservice started');
  }
}

const DooberService = new _DooberService();
export default DooberService;
