import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Output() handleChange = new EventEmitter<any>();

  inputText = '';

  handleChangeChild(e: any) {
    console.log('e ', e.target.value);

    this.handleChange.emit(e.target.value);
  }
}
