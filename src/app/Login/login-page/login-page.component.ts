import { Component } from '@angular/core';
import { LoginApiService } from 'src/app/common/api-services/login_api_service';
import { ToastrService } from 'ngx-toastr';
import {
  UserLoginDto,
  UserCreateDto,
} from '../../../app/common/Interfaces/login_interfaces';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  user_details: Record<string, any> = {};
  mode: string = 'login';
  users_data: Record<string, any>[] = [];
  password_type: string = 'password';
  login_flag:boolean=false
  login_form: any;
  create_form: any;

  constructor(
    private _login_api_service: LoginApiService,
    private _toaster_service: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getUsers();
    this.login_form = this.formBuilder.group({
      username:new FormControl(''),
      password:new FormControl(''),
    });
    this.create_form = this.formBuilder.group({
      username:new FormControl(''),
      lastname:new FormControl(''),
      firstname:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
    });
  }

  onSubmit() {
    if (this.mode == 'login') {
      this.loginUser();
    } else if (this.mode == 'create') {
      this.createUser();
    }
  }

  passwordView(type: string) {
    if (type === 'close') {
      this.password_type = 'password';
    } else {
      this.password_type = 'text';
    }
  }

  async loginUser() {
    const username = this.login_form.get('username').value;
    const password = this.login_form.get('password').value;
    const login_body: UserLoginDto = {
      username: username,
      password: password,
    };
    (await this._login_api_service.userLogin(login_body)).subscribe({
      next: (res: any) => {
        this.login_flag=true
        this._toaster_service.success(`User login successfully.`);
        this.reset()
      },
      error: (error) => {
        this._toaster_service.error(
          `${error['error']['message']}.`,"Login Failed!"
        );
      },
    });
  }


  async createUser() {
    const login_body: UserCreateDto = {
      firstname: this.create_form.get('firstname').value,
      lastname: this.create_form.get('lastname').value,
      username: this.create_form.get('username').value,
      email:this.create_form.get('email').value,
      password: this.create_form.get('password').value,
    };
    (await this._login_api_service.userCreate(login_body)).subscribe({
      next: (res: any) => {
        console.log('response', res);
        this._toaster_service.success(
          `User ${login_body['username']}created successfully.`
        );
        this.reset()
      },
      error: (error: any) => {
        this._toaster_service.error(
          `${error['error']['message']}.`,"User Creation Failed!"
        );
      },
    });
  }

  reset(){
    this.login_form.reset()
    this.create_form.reset()
    this.mode='login'
  }

  async getUsers() {
    console.log('in call');

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


  switchToRegister(type:string){
    this.mode=type

  }
}
