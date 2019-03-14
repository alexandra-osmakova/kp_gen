import { Component, OnInit } from '@angular/core';
import { PagesIndexService } from '../pages-index.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  inputChecker = this.share.clickCnt;
  inputInfo: any = this.share.questionPages[this.inputChecker];
  inputPlaceholder = this.share.textInputPlaceholder;

  constructor(private share: PagesIndexService) { 
    }

  ngOnInit() {
  }


}
