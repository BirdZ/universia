import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ItemModel } from '../models/item.model'


export type URLParameter = { key: string, value: any };

@Injectable()
export class APIBaseService {

  private environment = environment;
  private url:string = 'todos/';

  constructor() { }

  getAll(): Promise<ItemModel[]> {
    return fetch(this.environment.defaultEndpoint + this.url)
      .then(response => response.json() as unknown as ItemModel[])
  }

  getItem(id): Promise<ItemModel> {
    return fetch(this.environment.defaultEndpoint + this.url + id)
      .then(response => response.json()as unknown as ItemModel)
  }
}
