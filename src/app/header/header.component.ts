import { Component, OnInit } from '@angular/core';
import { iCategory } from '../sharedClassesAndFiles/iCategory';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  categoryList:iCategory[];
  constructor() {
    this.categoryList=[
      {
        id:10,
        name:"mobiles"
      },
      {
        id:20,
        name:"Laptops"
      },
      {
        id:30,
        name:"glasses"
      }
    ]
  }
  

  
  ngOnInit(): void {
  }

}
