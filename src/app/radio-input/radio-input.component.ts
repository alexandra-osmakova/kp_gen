import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css']
})
export class RadioInputComponent implements OnInit {
  @Input() inputProps: any;
  show: boolean = false;
  placeholder: string;

  constructor() {
  }

  ngOnInit() {
    const { inputType, placeholder } = this.inputProps;

    this.show = inputType === 'radio'
    this.placeholder = placeholder;
  }

}
