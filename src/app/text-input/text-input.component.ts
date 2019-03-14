import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() inputProps: any;
  show: boolean = false;
  placeholder: string;

  ngOnInit () {
    const { inputType, placeholder } = this.inputProps;

    this.show = inputType === 'text'
    this.placeholder = placeholder;
  }
}
