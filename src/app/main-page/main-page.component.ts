import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PagesIndexService } from '../pages-index.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  clickCnt: number;

  constructor(
    private router: Router,
    private share: PagesIndexService,
  ) { 
    this.share.onClick.subscribe(cnt => this.clickCnt = cnt);
  }

  ngOnInit() {
  }

  changePage(index) {
    this.share.clearClick();
    switch (index) {
      case 1:
        this.router.navigate(['inputs']);
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        alert( 'Some mistake' );
    }
  }

}
