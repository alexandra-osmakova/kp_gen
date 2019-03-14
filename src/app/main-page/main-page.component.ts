import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  changePage(index) {
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
