import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule,CommonModule,HttpClientModule],
  exports: [FormsModule, ReactiveFormsModule,CommonModule,HttpClientModule],
  providers:[ToastrService]
})
export class SharedModule {}
