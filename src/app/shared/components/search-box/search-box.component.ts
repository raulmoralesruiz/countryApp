import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  txtSearchInput: string = '';

  @Input()
  placeholder: string = '';

  @Output() onValue = new EventEmitter<string>();

  emitValue(event: string):void {
    this.onValue.emit(event);
  }

}
