import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  Encrypt(value) {
    return CryptoJS.AES.encrypt(value, environment.subscriptionKey).toString();
  }

  Decrypt(value) {
    if (value) {
      return CryptoJS.AES.decrypt(value, environment.subscriptionKey).toString(CryptoJS.enc.Utf8);
    }
    return null;
  }
}
