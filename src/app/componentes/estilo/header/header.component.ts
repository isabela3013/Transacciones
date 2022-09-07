import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavbarService } from 'src/app/servicios/navbar/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public items !: MenuItem[];

  constructor(
    public navbarService:NavbarService
  ) { }

  ngOnInit() {
    console.log(this.navbarService.items)
    this.refreshNavbars();
    console.log(this.navbarService.items)
  }

  public refreshNavbars(){
    this.items = this.navbarService.items
  }

}
