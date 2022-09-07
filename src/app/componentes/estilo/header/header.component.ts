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
    this.items = [
      {
        label: 'Home', 
        icon: 'pi pi-fw pi-home',
        routerLink: 'integracion-error'
      },
      {
        label: 'Comparacion', 
        icon: 'pi pi-fw pi-file',
        routerLink: 'comparacion'
      }
      
    ];
  }

  public refreshNavbars(){
    this.items = this.navbarService.items
  }

}
