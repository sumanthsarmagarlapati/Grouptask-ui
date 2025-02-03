import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@NgModule({ declarations: [],
    exports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule], imports: [FormsModule, ReactiveFormsModule, CommonModule], providers: [ToastrService, provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule {}
