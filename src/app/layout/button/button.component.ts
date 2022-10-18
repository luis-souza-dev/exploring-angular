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

  appliableClasses = 'bg-sky-400 ';
  constructor() { }

  ngOnInit(): void {
    switch(this.type){
      case ButtonTypes.success:
        this.appliableClasses = `bg-green-400 ${this.disableButton ? 'cursor-not-allowed': 'hover:bg-green-500'}`;
      break;
      case ButtonTypes.warning:
        this.appliableClasses = `bg-yellow-300 ${this.disableButton ? 'cursor-not-allowed': 'hover:bg-yellow-400'}`;
      break;
      case ButtonTypes.danger:
        this.appliableClasses = `bg-red-600 ${this.disableButton ? 'cursor-not-allowed': 'hover:bg-red-700 '}`;
      break;
      case ButtonTypes.gray:
        this.appliableClasses = `bg-gray-300 ${this.disableButton ? 'cursor-not-allowed': 'hover:bg-gray-400'}`;
      break;
      default:
        this.appliableClasses += this.disableButton ? '' : 'hover:bg-sky-500';
    }
  }

  emit($event){
    this.eventEmitter.emit($event)
  }

}
