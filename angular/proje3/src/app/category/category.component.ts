import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title="Kategori Listesi"
  categories: Category[] = [
    {id:1,name:"Game1"},
    {id:2,name:"Game2"}


  ]

  ngOnInit(): void {
  }
  
  

}
