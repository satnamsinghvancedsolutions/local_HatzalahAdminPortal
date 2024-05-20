import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dailog-footer',
  templateUrl: './dailog-footer.component.html',
  styleUrls: ['./dailog-footer.component.scss']
})
export class DailogFooterComponent {
  @Output() action: EventEmitter<string> = new EventEmitter();
  @Input() actions: any[];
  constructor() {}

  emitAction(e: string) {
    this.action.emit(e);
  }
}
