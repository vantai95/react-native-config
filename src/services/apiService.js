import {
  API_HEADER_KEY,
  API_HEADER_VALUE
} from "../constants/config";
import SpinnerService from "./spinnerService";
import { store } from "../stores/reducers";

export default class ApiService {
  getApi = (url, hasToken) => {
    return this.runApi("GET", url, null, hasToken);
  }

  deleteApi = (url, hasToken) => {
    return this.runApi("DELETE", url, null, hasToken);
  }

  putApi = (url, data, hasToken) => {
    return this.runApi("PUT", url, data, hasToken);
  }

  postApi = (url, data, hasToken) => {
    return this.runApi("POST", url, data, hasToken);
  }

  runApi = (method, url, data, hasToken) => {

    SpinnerService.start();

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      MY_TEMPLATE: API_HEADER_VALUE
    };

    if (hasToken) {
      const currentUser = store.getState().currentUser;
      headers["Authorization"] = `Bearer ${currentUser.authorization_token}`;
    }

    var config = {};

    switch (method) {
      case "GET": {
        config = {
          method,
          headers
        };
        break;
      }
      case "DELETE": {
        config = {
          method,
          headers
        };
        break;
      }
      case "POST": {
        config = {
          method,
          headers,
          body: JSON.stringify(data)
        };
        break;
      }
      case "PUT": {
        config = {
          method,
          headers,
          body: JSON.stringify(data)
        };
        break;
      }
    }

    return new Promise((resolve, reject) => {
      fetch(url, config)
        .then((response) => response.json())
        .then((responseJson) => {
          SpinnerService.stop();
          return resolve(responseJson);
        })
        .catch((error) => {
          SpinnerService.stop();
          resolve({ success: false });
        });
    });
  }
}
