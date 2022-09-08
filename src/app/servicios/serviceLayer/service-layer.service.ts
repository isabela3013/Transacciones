import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceLayerService {

  constructor(
    private http:HttpClient
  ) { }

  URL = environment.linkSAP;

  login = {
    "CompanyDB": "ANTIOQUENA",
    "Password": "pt-1485",
    "UserName": "manager2"
  }

  loginSAP() {
    this.http.post(this.URL+'/Login',this.login)
  }

  signOutSAP() {
    this.http.post(this.URL+'/Logout',null)
  }

  


}
