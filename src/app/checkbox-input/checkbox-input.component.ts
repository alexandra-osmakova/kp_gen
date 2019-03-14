import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css']
})
export class CheckboxInputComponent implements OnInit {
  @Input() inputProps: any;
  show: boolean = false;
  placeholder: string;

  constructor() { 
    }

  ngOnInit() {
    const { inputType, placeholder } = this.inputProps;

    this.show = inputType === 'checkbox'
    this.placeholder = placeholder;
  }


}
