import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'src/app/shared/utils/common.util';

@Component({
  selector: 'ecom-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public searchText: string = "";

  constructor() { }


  ngOnInit(): void {
  }

  public mobileNavClick(): void {
    let mobileMenu = document.querySelector('.nav');
    mobileMenu?.classList?.toggle('active');
  }

  public get isSearching(): boolean {
    return isEmpty(this.searchText);
  }
}
