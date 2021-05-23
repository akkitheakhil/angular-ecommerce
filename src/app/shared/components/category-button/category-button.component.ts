import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ecom-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss']
})
export class CategoryButtonComponent implements OnInit {

  @Input() public name: string = "";
  @Input() public icon: string = "";
  @Input() public imgUrl: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
