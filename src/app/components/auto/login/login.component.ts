import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userdateForm: FormGroup;
  constructor(private fb: FormBuilder, private message: NzMessageService, private route: Router) { }

  ngOnInit() {
    this.userdateForm = this.fb.group({
      userName: ['', [Validators.required, Validators.maxLength(6)]],
      password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]\w{5,17}$/)]]
    });
  }
  submitForm() {
    if (this.userdateForm.controls.userName.valid && this.userdateForm.controls.password.valid) {
      this.message.success('登录成功');
      this.route.navigate(['/home']);
    } else {
      this.message.error('用户名或者密码格式不正确')
    }
  }
}
