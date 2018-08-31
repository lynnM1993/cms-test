import { Component, OnInit } from '@angular/core';
import {IndexService} from '../../../service/index.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  menuData = JSON.parse(`[{"authId":28,"authName":"分单管理","authLink":"NaN","parAuthId":27,"parAuthName":"OCJ-CMS","authSystem":1,"authLevel":3,"authType":1,"createTime":"2017-12-08 13:36:30","createId":100001,"modifyId":null,"modifyTime":null,"authPageId":null,"list":[{"authId":33,"authName":"分单列表","authLink":"CMS_POLICY_POLICY","parAuthId":28,"parAuthName":"分单管理","authSystem":1,"authLevel":3,"authType":1,"createTime":"2017-12-08 13:38:39","createId":100001,"modifyId":null,"modifyTime":null,"authPageId":null,"list":null},{"authId":34,"authName":"外呼计划开关列表","authLink":"CMS_POLICY_PLAYSWITCH","parAuthId":28,"parAuthName":"分单管理","authSystem":1,"authLevel":3,"authType":1,"createTime":"2017-12-08 13:38:53","createId":100001,"modifyId":null,"modifyTime":null,"authPageId":null,"list":null},{"authId":35,"authName":"分单异常监控","authLink":"CMS_POLICY_UNEXPECTION","parAuthId":28,"parAuthName":"分单管理","authSystem":1,"authLevel":3,"authType":1,"createTime":"2017-12-08 13:39:05","createId":100001,"modifyId":null,"modifyTime":null,"authPageId":null,"list":null}]},{"authId":29,"authName":"个人外呼任务列表","authLink":"NaN","parAuthId":27,"parAuthName":"OCJ-CMS","authSystem":1,"authLevel":3,"authType":1,"createTime":"2017-12-08 13:36:44","createId":100001,"modifyId":null,"modifyTime":null,"authPageId":null,"list":[{"authId":36,"authName":"个人外呼任务列表(客服)","authLink":"CMS_PERSONALTASK_PERSONAL_TASK","parAuthId":29,"parAuthName":"个人外呼任务列表","authSystem":1,"authLevel":3,"authType":1,"createTime":"2017-12-08 13:39:59","createId":100001,"modifyId":null,"modifyTime":null,"authPageId":null,"list":null},{"authId":37,"authName":"运营管理","authLink":"CMS_PERSONALTASK_PERSONAL_TASK_MANAGE","parAuthId":29,"parAuthName":"个人外呼任务列表","authSystem":1,"authLevel":3,"authType":1,"createTime":"2017-12-08 13:40:27","createId":100001,"modifyId":null,"modifyTime":null,"authPageId":null,"list":null}]},{"authId":31,"authName":"外呼名单管理","authLink":"NaN","parAuthId":27,"parAuthName":"OCJ-CMS","authSystem":1,"authLevel":3,"authType":1,"createTime":"2017-12-08 13:37:03","createId":100001,"modifyId":null,"modifyTime":null,"authPageId":null,"list":[{"authId":40,"authName":"名单分配规则列表","authLink":"CMS_LIST_REGULATION","parAuthId":31,"parAuthName":"外呼名单管理","authSystem":1,"authLevel":3,"authType":1,"createTime":"2017-12-08 13:41:56","createId":100001,"modifyId":null,"modifyTime":null,"authPageId":null,"list":null}]},{"authId":32,"authName":"客服人员配置","authLink":"NaN","parAuthId":27,"parAuthName":"OCJ-CMS","authSystem":1,"authLevel":3,"authType":1,"createTime":"2017-12-08 13:37:16","createId":100001,"modifyId":null,"modifyTime":null,"authPageId":null,"list":[{"authId":41,"authName":"客服人员列表","authLink":"CMS_CUSTOMER_CUSTOMER","parAuthId":32,"parAuthName":"客服人员配置","authSystem":1,"authLevel":3,"authType":1,"createTime":"2017-12-08 13:42:28","createId":100001,"modifyId":null,"modifyTime":null,"authPageId":null,"list":null}]}]`);
  constructor(private menuServer: IndexService) {
  //   this.menuData = this.menuServer.loginData['data'].authList[0].list;
  console.log(this.menuData );
  }

  ngOnInit() {
  }

}
