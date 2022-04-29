import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute//rootdaki parametreyi yakalar
  ) { }

  ngOnInit(): void {
  }
  title="Ürün Listesi"
  filterText="Game1"
  products : Product[]=[
    {
      id: 1,
      name: "Game 1",
      bundle: "bundle_1",
      icon: "https://dummyimage.com/512x512/aaa/000",
      studio: "Studio 1",
      state: "TEST"
      },
      {
        id: 2,
        name: "Game 2",
        bundle: "bundle_2",
        icon: "https://dummyimage.com/512x512/aaa/000",
        studio: "Studio 2",
        state: "TEST"
        }

  ]

}
