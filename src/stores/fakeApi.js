import SpinnerService from "../services/spinnerService";

export default class AuthApi {
  Login(username, password) {
    SpinnerService.start();

    return new Promise((resolve) => {
      setTimeout(() => {
        SpinnerService.stop();

        resolve({
          success: true,
          data: {
            id: "1",
            username: "sangpdh@imt-soft.com",
            full_name: "Pham Do Hoang Sang"
          }
        });
      }, 3000);
    });
  }
  // static getDeparture(user) {
  //  return new Promise((resolve) => {
  //   setTimeout(() => {
  //    resolve({
  //      userID : user.email,
  //      flightID : “AR1973”,
  //      date : “10/27/2016 16:00PM”
  //     });
  //    }, 2500);
  //   });
  // }
  // static getForecast(date) {
  //  return new Promise((resolve) => {
  //      setTimeout(() => {
  //        resolve({
  //            date: date,
  //            forecast: "rain"
  //        });
  //      }, 2000);
  //   });
  //  }
}