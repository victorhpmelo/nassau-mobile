import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  emitirSenha(tipo: 'SP' | 'SG' | 'SE') {
    const id = Math.floor(Math.random() * 10000);
    const numero = new Date().toISOString().slice(2, 10).replace(/-/g, '') + '-' + tipo + id;
    const senha = {
      id,
      tipo,
      numero,
      emitDate: new Date().toISOString(),
      appointDate: null,
      window: null,
      attended: false
    };
    const senhas = JSON.parse(localStorage.getItem('senhas') || '[]');
    senhas.push(senha);
    localStorage.setItem('senhas', JSON.stringify(senhas));
    return senha;
  }

  listarUltimasSenhas() {
    const senhas = JSON.parse(localStorage.getItem('senhas') || '[]');
    return senhas.slice(-5).reverse();
  }

  chamarSenha() {
    const senhas = JSON.parse(localStorage.getItem('senhas') || '[]');
    const senha = senhas.find((s: any) => !s.attended);
    if (senha) {
      senha.attended = true;
      senha.appointDate = new Date().toISOString();
      senha.window = Math.floor(Math.random() * 10 + 1);
      localStorage.setItem('senhas', JSON.stringify(senhas));
    }
    return senha;
  }

  gerarRelatorio() {
    const senhas = JSON.parse(localStorage.getItem('senhas') || '[]');
    return {
      total: senhas.length,
      atendidas: senhas.filter((s: any) => s.attended).length,
      porTipo: ['SP', 'SG', 'SE'].reduce((acc, tipo) => {
        acc[tipo] = senhas.filter((s: any) => s.tipo === tipo).length;
        return acc;
      }, {} as any),
    };
  }
}