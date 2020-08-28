import { Injectable } from '@angular/core';
import { Login } from './login-tela/login-tela.component';
import {HttpParams, HttpHeaders, HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public usuarioLogado;
  public token;


  public isTelaLogin: boolean = true;
  
  public isTelaPrincipal: boolean = false;



  constructor(private http: HttpClient) { }

  getUrl_API(){
    return 'http://hga.ddns.net:8090';
  }

  public isNullOrUndefined(obj: any){
    if (obj === null || obj === undefined){

      return true;

    } else{

      return false;
    }
  }

  executeLogin(login: Login) : Observable<any> {

    const headers= new HttpHeaders()
                      .set('AccountId', '2')
                      .set('Accept', '*/*')              
                      .set('Content-type', 'application/json')
                      .set('Access-Control-Allow-Credentials', 'true')
                      .set('Access-Control-Allow-Origin', '*');
                         
    let httpParam: HttpParams = new HttpParams().set('login', login.usuario)
                                                .set('senha', login.senha);
       
    return this.http.get('/api' + '/open/auth/login', {params: httpParam, headers: headers});
  }
}