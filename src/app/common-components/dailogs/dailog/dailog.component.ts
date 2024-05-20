import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.scss']
})
export class DailogComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() hideCloser: boolean;
  @Input() actions: any[];
  @Output() action: EventEmitter<string> = new EventEmitter();
  @Output() close: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  closeDialog() {
    this.close.emit();
  }

  emitAction(event:any) {
    this.action.emit(event);
  }
}
