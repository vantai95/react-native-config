import ApiService from './apiService';
import { API_URL } from '../constants/config';

export default class AuthService extends ApiService {

  login = (data) => {
    return this.postApi(API_URL + '/login', data, true);
  };

}
