import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AuthForm from '@auth/store/models/auth.form.model';
import { AuthStore } from '@auth/store/auth.store';
import { AuthResponse } from '@auth/store/models';
import { saveToken, getToken } from '@core/utils/auth';
let baseURL = "http://localhost:5000";
@Injectable()
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private authStore: AuthStore
  ) {
    console.log("aa");

  }

  authenticate(userForm: AuthForm) {
    return this.httpClient.post(`${baseURL}/api/User/Authenticate`, userForm);
  }

  saveToken(authResponse: AuthResponse) {
    saveToken(authResponse);
    this.authStore.update({ ...authResponse });
  }

  getToken() {
    return getToken();
  }

  isSuerAuthincated() {
    const token = getToken();
    if (token && token != "") {
      return true;
    } else {
      return false;
    }
  }
}
