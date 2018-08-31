import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuData = [];
  constructor() {
  }
  isShowChild: Boolean = false;
  showChild (i, item) {
    if (item.list) {
      this.menuData[i].isShowChild = !this.menuData[i].isShowChild;
    } else {
      console.log(item);
    }
  }
  ngOnInit() {
  }

}
