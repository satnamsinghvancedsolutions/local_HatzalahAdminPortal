import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dailog-header',
  templateUrl: './dailog-header.component.html',
  styleUrls: ['./dailog-header.component.scss']
})
export class DailogHeaderComponent {
  @Input() description: string;
  @Input() hideCloser: boolean;
  @Output() close: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  emitClose() {
    this.close.emit();
  }


}
