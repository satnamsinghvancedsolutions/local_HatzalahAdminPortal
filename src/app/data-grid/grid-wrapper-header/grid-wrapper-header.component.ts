import { Component, EventEmitter, Output } from '@angular/core';
import { GridActionsService } from '../grid-actions.service';

@Component({
  selector: 'app-grid-wrapper-header',
  templateUrl: './grid-wrapper-header.component.html',
  styleUrls: ['./grid-wrapper-header.component.scss']
})
export class GridWrapperHeaderComponent {
  @Output() searchTextData: EventEmitter<any> = new EventEmitter();
  @Output() addNew: EventEmitter<any> = new EventEmitter();
  searchText = '';
  constructor(public gridActionsService: GridActionsService) { }

  public search(searchText: string){
    this.searchTextData.emit(searchText);
  }
  public add(){
    this.addNew.emit();
  }
}
