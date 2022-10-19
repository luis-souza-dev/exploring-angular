import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonTypes } from 'src/app/shared/enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() eventEmitter = new EventEmitter();

  @Input() type: ButtonTypes = ButtonTypes.default;

  @Input() disableButton = false;

  appliableClasses = 'bg-sky-500 ';
  auxClass = 'hover:shadow-sm hover:shadow-black hover:border-gray-700 hover:font-medium'
  constructor() { }

  ngOnInit(): void {
    switch(this.type){
      case ButtonTypes.success:
        this.appliableClasses = `bg-green-500 ${this.disableButton ? 'cursor-not-allowed': this.auxClass}`;
      break;
      case ButtonTypes.warning:
        this.appliableClasses = `bg-yellow-300 ${this.disableButton ? 'cursor-not-allowed': this.auxClass}`;
      break;
      case ButtonTypes.danger:
        this.appliableClasses = `bg-red-600 ${this.disableButton ? 'cursor-not-allowed': this.auxClass}`;
      break;
      case ButtonTypes.gray:
        this.appliableClasses = `bg-gray-300 ${this.disableButton ? 'cursor-not-allowed': this.auxClass}`;
      break;
      default:
        this.appliableClasses += this.disableButton ? '' : this.auxClass;
    }
  }

  emit($event){
    this.eventEmitter.emit($event)
  }

}
