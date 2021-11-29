import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { switchMap, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {
  novoUsuarioService: any;

  constructor(private NovoUsuarioService: NovoUsuarioService) { }

  //metodo que ira retornar uma funcao
  usuarioExistente(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => //troca o fluxo
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ), //trocando o resultado
        map((usuarioExistente) => usuarioExistente ? {usuarioExistente: true} : null)
      ),
      first()
    }
  }
}
