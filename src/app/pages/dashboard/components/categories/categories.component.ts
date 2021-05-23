import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ecom-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: string[] = ["Electronics", "Home", "Appliances", "Grocery", "Beauty & Care", "Toys"]

  constructor() { }

  ngOnInit(): void {
  }

}
