import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItemModel } from 'src/app/models/item.model';
import { APIBaseService } from '@providers/api-base.service'

const PROJECTS = [{id: 1, name: 'IVForce'}, {id: 2, name: 'Vitrio'}, {id: 3, name: 'Smarta'}]
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private items: ItemModel[];

  private itemsFiltereds: ItemModel[];

  constructor(
    private apiService: APIBaseService,
  ) { }

  ngOnInit() {
    this.getItems()
  }

  getItems() {
    this.apiService.getAll().then(items => { 
      this.items = items;
      this.itemsFiltereds = items; 
    } );
  }

  applyFilter(filterValue: string) {
    this.itemsFiltereds = this.items.filter(item => item.title.indexOf(filterValue) > -1);
  }

}
