import { Component, OnInit } from '@angular/core';
import { PagesIndexService } from '../pages-index.service';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css']
})
export class RadioInputComponent implements OnInit {
  inputChecker = this.share.clickCnt;
  inputInfo: any = this.share.questionPages[this.inputChecker];
  inputPlaceholder = this.share.radioInputPlaceholder;

  constructor(private share: PagesIndexService) {
  }

  ngOnInit() {
  }

}
