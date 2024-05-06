import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/Environments/environment';
import { UserLoginDto, UserCreateDto } from '../Interfaces/login_interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  constructor(public http: HttpClient) {}

  async userLogin(user_details: UserLoginDto) {
    return this.http.post(`${environment.SERVER_PORT}login`, user_details);
  }

  async userCreate(user_details: UserCreateDto) {
    return this.http.post(
      `${environment.SERVER_PORT}login/create`,
      user_details
    );
  }
  async getUsers() {
    return this.http.get(`${environment.SERVER_PORT}login/users`);
  }
}
