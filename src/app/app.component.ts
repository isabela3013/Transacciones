import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ServicioService } from './servicios/servicio.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {

  title = 'Transacciones';
  
  constructor(){}
}