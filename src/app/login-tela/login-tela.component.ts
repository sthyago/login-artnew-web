import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { TelaPrincipalComponent } from '../tela-principal/tela-principal.component';


export class Login{
  public usuario: string;
  public senha: string;
  public accountId: number;
}

@Component({
  selector: 'app-login-tela',
  templateUrl: './login-tela.component.html',
  styleUrls: ['./login-tela.component.css']
})
export class LoginTelaComponent implements OnInit {

  public login: Login = new Login();
  public dadosUsuarioLogado: any;
    

  constructor(public _appService: AppService) { }

  ngOnInit(): void {
  }

  executeLoginClick()  {
    
    if(this._appService.isNullOrUndefined(this.login)){
      alert("Informe o USUÁRIO e a SENHA corretamente.");
      return;
    }

    this._appService.executeLogin(this.login).subscribe(

       data =>{ this._appService.usuarioLogado = data;
                this._appService.isTelaLogin = false;
                this._appService.isTelaPrincipal = true;
                console.log(this._appService.usuarioLogado)
              },

       err => {
                 console.log(err);
              }
       
       
     );
     console.log(this.dadosUsuarioLogado);
  }

}
