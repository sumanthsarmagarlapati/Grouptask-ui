import { Component } from '@angular/core';
import { LoginApiService } from 'src/app/common/api-services/login_api_service';
import { ToastrService } from 'ngx-toastr';
import {
  UserLoginDto,
  UserCreateDto,
} from '../../../app/common/Interfaces/login_interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    FormsModule,
  ],
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  user_details: Record<string, any> = {};
  mode: string = 'login';
  users_data: Record<string, any>[] = [];
  username:string='';
  password:string=''
  constructor(
    private _login_api_service: LoginApiService,
    private _toaster_service: ToastrService
  ) {
    console.log(this.mode, 'mode');
    this.getUsers();
  }

  ngOnit() {
   
  }

  onSubmit() {
    if (this.mode == 'login') {
      this.loginUser();
    } else if (this.mode == 'create') {
      this.createUser();
    }
  }

  async loginUser() {
    console.log('this.user_details', this.user_details);

    const login_body: UserLoginDto = {
      username: this.user_details['username'],
      password: this.user_details['password'],
    };
    console.log('login_body', login_body);
    (await this._login_api_service.userLogin(login_body)).subscribe({
      next: (res: any) => {
        console.log('response', res);
        this._toaster_service.success(`User login successfully.`);
      },
      error: () => {},
    });
  }
  login(){
    
  }
  async createUser() {
    const login_body: UserCreateDto = {
      username: this.user_details['username'],
      password: this.user_details['password'],
      firstname: this.user_details['firstname'],
      lastname: this.user_details['lastname'],
      dob: this.user_details['dob'],
    };
    (await this._login_api_service.userCreate(login_body)).subscribe({
      next: (res: any) => {
        console.log('response', res);
        this._toaster_service.success(
          `User ${login_body['username']}created successfully.`
        );
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  async getUsers() {
    console.log("in call");
    
    (await this._login_api_service.getUsers()).subscribe({
      next: (res: any) => {
        this.users_data = res;
        console.log('response', this.users_data);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  onChangeMode(mode: string) {
    this.mode = mode;
    this.user_details = {};
  }
}
