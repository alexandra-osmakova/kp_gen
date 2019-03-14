import { Component, OnInit } from '@angular/core';
import { PagesIndexService } from '../pages-index.service';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css']
})
export class CheckboxInputComponent implements OnInit {
  inputChecker = this.share.clickCnt;
  inputInfo: any = this.share.questionPages[this.inputChecker];
  inputPlaceholder = this.share.checkBoxInutPlaceholder;

  constructor(private share: PagesIndexService) { 
    }

  ngOnInit() {
  }


}
