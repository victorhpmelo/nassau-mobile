import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  senha:any;

  constructor(private api: ApiService) {}

  chamar() { this.senha = this.api.chamarSenha(); }

}
