import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ItemModel } from 'src/app/models/item.model';
import { APIBaseService } from '@providers/api-base.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.sass']
})
export class ItemViewComponent implements OnInit {

  private item: ItemModel

  constructor(
    private route: ActivatedRoute,
    private apiService: APIBaseService,

  ) { }

  ngOnInit() {
    this.route.params.pipe(map(params =>params['id'])).subscribe(id => {
      this.getItem(id);
    })
  }

  getItem(id: number) {
    this.apiService.getItem(id).then(item => this.item = item);
  }

}
