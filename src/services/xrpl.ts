import { logger } from './logger';
import { getHummingbotMemo } from './utils';

const globalConfig =
  require('../services/configuration_manager').configManagerInstance;


export default class XRPL {
  
  constructor() {
  
  }

  // Need to implement all methods from the XRPL api here
  // The v2 of the JS API looks really promising
  // Although websockets api >> HTTP, might just be an overkill.
  // Need to test
  // https://xrpl.org/xrpljs2-migration-guide.html
  
  
}
