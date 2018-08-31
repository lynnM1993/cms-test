import { Component, OnInit } from '@angular/core';
import {IndexService} from '../../service/index.service';
import { Router} from '@angular/router'; //导入router服务

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.component.css']
})
export class LoginComponent implements OnInit {
  snapshot: Boolean = false;
  password: String = '';
  userName: String = '';
  err: String = '';
  loginYn: Object = {};
  reportPassword(e: Boolean) {
    console.log(this.password);
  }
  login(): void {
    this.getData();
  }
  passwordInput() {
    console.log(this.password);
  }
  constructor(private indexService: IndexService,
    private router: Router
  ) {
  }
  getData(): void {
    let sendData: Object = {
      password: this.password,
      loginName: this.userName,
      authSystem: '1'
    };
    this.indexService.getData(sendData).then(res => {
      this.router.navigateByUrl('cms/content');
      // if(res.code === 200) {
      // }
    });
  }
  ngOnInit() {

  }


}
