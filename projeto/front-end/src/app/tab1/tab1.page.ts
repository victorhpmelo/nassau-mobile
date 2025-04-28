import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private api: ApiService) {}
  emitir(tipo: 'SP' | 'SG' | 'SE') {
    const senha = this.api.emitirSenha(tipo);
    alert(`Senha emitida: ${senha.numero}`);
  }
}
