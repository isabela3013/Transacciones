import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavbarService } from 'src/app/servicios/navbar/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items : MenuItem[];

  constructor(
    public navbarService:NavbarService
  ) { }

  ngOnInit() {
    this.refreshNavbars();
  }

  public refreshNavbars(){
    this.items = this.navbarService.itemsNavbar;
  }

}
