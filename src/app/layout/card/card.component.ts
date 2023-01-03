import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() dataTitle: string;

  @Input() dataPreview: string;

  @Input() dataId: string;

  @Input() tags?: Array<string>;

  @Output() navigation: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  goToPost(){
    this.navigation.emit(this.dataId);
  }

}
