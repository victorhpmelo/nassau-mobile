# Front-End Application 

Este projeto é uma aplicação Ionic/Angular que implementa um sistema de gerenciamento de senhas com quatro páginas principais: **Emissão**, **Painel**, **Atendimento** e **Relatório**. Abaixo está uma explicação detalhada de cada página e suas funcionalidades. 

## Páginas 

### 1. Emissão (Tab1) 

- **Arquivo:** [src/app/tab1/tab1.page.ts](src/app/tab1/tab1.page.ts) 
- **Descrição:** Esta página permite a emissão de senhas de diferentes tipos: `SP` (Prioritária), `SG` (Geral) e `SE` (Exame). 
- **Funcionalidade Principal:** 
  - O método `emitir(tipo: 'SP' | 'SG' | 'SE')` utiliza o serviço [`ApiService`](src/app/services/api.service.ts) para gerar uma nova senha e exibe um alerta com o número da senha emitida. 

### 2. Painel (Tab2) 

- **Arquivo:** [src/app/tab2/tab2.page.ts](src/app/tab2/tab2.page.ts) 
- **Descrição:** Esta página exibe as últimas senhas emitidas, mostrando o número da senha e o guichê associado (se disponível). 
- **Funcionalidade Principal:** 
  - O método `ngOnInit()` chama o método `listarUltimasSenhas()` do [`ApiService`](src/app/services/api.service.ts) para buscar as últimas senhas emitidas e exibi-las em uma lista. 

### 3. Atendimento (Tab3) 

- **Arquivo:** [src/app/tab3/tab3.page.ts](src/app/tab3/tab3.page.ts) 
- **Descrição:** Esta página permite chamar a próxima senha para atendimento. 
- **Funcionalidade Principal:** 
  - O método `chamar()` utiliza o método `chamarSenha()` do [`ApiService`](src/app/services/api.service.ts) para buscar a próxima senha não atendida, marcá-la como atendida e associá-la a um guichê. 

### 4. Relatório (Tab4) 

- **Arquivo:** [src/app/tab4/tab4.page.ts](src/app/tab4/tab4.page.ts) 
- **Descrição:** Esta página exibe um relatório com informações sobre as senhas emitidas, incluindo o total de senhas, o número de senhas atendidas e a quantidade de senhas por tipo. 
- **Funcionalidade Principal:** 
  - O método `ngOnInit()` chama o método `gerarRelatorio()` do [`ApiService`](src/app/services/api.service.ts) para gerar e exibir o relatório. 

## Serviço Principal 

### ApiService 
- **Arquivo:** [src/app/services/api.service.ts](src/app/services/api.service.ts) 
- **Descrição:** Este serviço centraliza a lógica de negócios da aplicação, incluindo: 
  - Emissão de senhas (`emitirSenha`). 
  - Listagem das últimas senhas emitidas (`listarUltimasSenhas`). 
  - Chamada da próxima senha para atendimento (`chamarSenha`). 
  - Geração de relatórios (`gerarRelatorio`). 

## Estrutura de Navegação 

A navegação entre as páginas é gerenciada por meio de um sistema de abas implementado no arquivo [src/app/tabs/tabs.page.html](src/app/tabs/tabs.page.html). Cada aba corresponde a uma das páginas descritas acima.

## Como Executar 

1. Instale as dependências: 
   ```bash 
   npm install 
   ``` 

2. Inicie o servidor de desenvolvimento: 
   ```bash 
   npm start 
   ``` 

3. Acesse a aplicação no navegador em `http://localhost:4200`. 

## Tecnologias Utilizadas 

- **Ionic Framework:** Para a interface do usuário e navegação. 
- **Angular:** Para a lógica de negócios e estrutura do projeto. 
- **LocalStorage:** Para armazenamento local de dados das senhas. 

## Licença 

Este projeto está licenciado sob a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). Você é livre para compartilhar e adaptar o material, desde que atribua o devido crédito ao autor original.
