import { Component, OnInit } from '@angular/core';
import { PagesIndexService } from '../pages-index.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-mix',
  templateUrl: './input-mix.component.html',
  styleUrls: ['./input-mix.component.css']
})
export class InputMixComponent implements OnInit {
  clickCnt: number = this.share.clickCnt;
  inputInfo: any = this.share.questionPages;
  currentInputInfo: any;
  nextControl = true;

  showInputText = this.share.showInputText;
  showInputRadio = this.share.showInputRadio;
  showInputCheckbox = this.share.showInputCheckbox;



  constructor(private share: PagesIndexService,
    private router: Router) {
    this.share.onClick.subscribe(cnt => this.clickCnt = cnt);
    this.currentInputInfo = this.inputInfo[this.clickCnt];
    this.refreshInputs()
  }

  public changePage() {
    this.share.doClick();
    this.currentInputInfo = this.inputInfo[this.clickCnt];
    this.controlerDisplay();
    this.refreshInputs()
  }

  public changePageBack() {
    if (this.clickCnt <= 0) {
      this.router.navigate(['main']);
    }
    else {
      this.share.backClick();
      this.currentInputInfo = this.inputInfo[this.clickCnt];
      this.controlerDisplay();
      this.refreshInputs()
    }
  }

  refreshInputs() {
    this.showInputText = this.share.showInputText;
    this.showInputRadio = this.share.showInputRadio;
    this.showInputCheckbox = this.share.showInputCheckbox;
  }

  controlerDisplay() {
    if (this.clickCnt != this.inputInfo.length - 1) {
      this.nextControl = true;
    }
    else {
      this.nextControl = false;
    }
  }

  calcOpen() {
    this.router.navigate(['calc']);
  }

  ngOnInit() {
  }

}

