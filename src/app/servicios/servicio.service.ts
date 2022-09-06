import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Count } from '../Modelos/Count.interface';
import { Puntos } from '../Modelos/Puntos.interface';
import { Trans } from '../Modelos/Transacciones.interface';
import { HubConnectionBuilder,HubConnection } from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  // public hubConnection :HubConnection;
  constructor(private http : HttpClient) { 
    // let builder  = new  HubConnectionBuilder;
    // this.hubConnection = builder.withUrl("https://localhost:44376/api/Trans").build();
    // this.hubConnection.start();
  }

  TransUrl = 'https://localhost:44376/api/';

  getAllTrans():Observable<Trans[]>{
    let tra  = this.TransUrl+'Trans';
    return this.http.get<Trans[]>(tra);
  }


  getAllPvs():Observable<Puntos[]>{
    let pv  = this.TransUrl+'Puntov/Puntos';
    return this.http.get<Puntos[]>(pv);
  }

  getAllCount(dato: string):Observable<Count[]>{
    let cou  = this.TransUrl+'Trans/Count?bod='+dato;
    return this.http.get<Count[]>(cou);
  }

  getAllCountid(dato: string,id:number):Observable<Count[]>{
    let cou  = this.TransUrl+'Trans/CountId?bod='+dato+'&id='+id;
    return this.http.get<Count[]>(cou);
  }

}
