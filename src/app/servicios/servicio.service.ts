import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Count } from '../Modelos/Count.interface';
import { Puntos } from '../Modelos/Puntos.interface';
import { Trans } from '../Modelos/Transacciones.interface';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  listaTransacciones: Trans[];
  // public hubConnection :HubConnection;
  constructor(private http: HttpClient) {
    // let builder  = new  HubConnectionBuilder;
    // this.hubConnection = builder.withUrl("https://localhost:44376/api/Trans").build();
    // this.hubConnection.start();
  }

  URL = environment.linkApp

  getAllTrans(): Observable<Trans[]> {
    let tra = this.URL + 'Trans';
    return this.http.get<Trans[]>(tra);
  }


  getAllPvs(): Observable<Puntos[]> {
    let pv = this.URL + 'Puntov/Puntos';
    return this.http.get<Puntos[]>(pv);
  }

  getAllCount(dato: string, error: boolean): Observable<Count[]> {
    let cou = this.URL + 'Trans/Count?bod=' + dato + '&error=' + error;
    return this.http.get<Count[]>(cou);
  }

  async getAllCountid(dato: string, id: number): Promise<Observable<Count[]>> {
    let cou = this.URL + 'Trans/CountId?bod=' + dato + '&id=' + id;
    return this.http.get<Count[]>(cou);
  }

  getListaTransacciones() {
    return this.http.get(this.URL + 'Trans').toPromise().then(async res => {
      this.listaTransacciones = res as Trans[];
    }, err => {
      console.log(err)
    })

  }

}
