import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public items !: MenuItem[];
  public route = "";

  constructor(
    private router: Router
  ) { 
    this.valoresNavbar();
  }

  valoresNavbar(){
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
      // ,
      // {
      //   label: 'Edit', 
      //   icon: 'pi pi-fw pi-pencil',
      //   routerLink: 'integracion-error'
      // },
      // {
      //   label: 'Documentation', 
      //   icon: 'pi pi-fw pi-file',
      //   routerLink: 'integracion-error'
      // },
      // {
      //   label: 'Settings', 
      //   icon: 'pi pi-fw pi-cog',
      //   routerLink: 'integracion-error'
      // }
    ];
  }
}
