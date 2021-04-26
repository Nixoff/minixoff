<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Nixoff/minixoff">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Nixoff/minixoff">

  <a href="https://github.com/Nixoff/minixoff/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Nixoff/minixoff">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/Nixoff/minixoff/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Nixoff/minixoff?style=social">
  </a>

  <a href="https://nixoffdev.ga/">
    <img alt="Feito pelo Gabs <3" src="https://img.shields.io/badge/feito%20por-N1xOff-%237519C1">
  </a>
  
 
</p>
<h1 align="center">
    <img alt="MinixOFFShortner" title="#MinixOFFShortner" src="./src/assets/readme/thumb_readme.png" />
</h1>

<h4 align="center"> 
	🚧  Minix ♻️ em andamento 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

♻️ MinixOFFShortner - é um encurtador de url pessoal e personalizado ao gosto do cliente.


Projeto desenvolvido durante  **Uma semana** como teste tecnico, oferecida pela [Mobi2Buy](https://mobi2buy.com/).
Fazer o teste foi uma experiência incrível. Me virando com muito conteúdo prático, desafios e "dores de cabeça" que me incentivaram ainda mais a resolver.

---

## ⚙️ Funcionalidades

- [x] Usuários podem se cadastrar na plataforma web enviando **nome completo**, **email**, **usuário** e **senha** e obter acesso as seguintes funcionalidades:
  - [x] Enviar uma url e encurta-la com código aleatorio ou personalizado.
  - [x] Salvar os links completos e encurtados

---

## 🎨 Layout
Comecei fazendo um protótipo inicial e depois finalizando de cabeça pois não tinha muito tempo.
O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/YTIbp0z72z5ilbgM8BZs09/Prot?node-id=0%3A1">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>


### Mobile

<p align="center">
  <img alt="MinixOFFShortner" title="#MinixOFFShortner" src="./src/assets/readme/mobile-home.png" width="200px">

  <img alt="MinixOFFShortner" title="#MinixOFFShortner" src="./src/assets/readme/mobileshortner.png" width="200px">
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="MinixOFFShortner" title="#MinixOFFShortner" src="./src/assets/readme/home.png" width="400px">

  <img alt="MinixOFFShortner" title="#MinixOFFShortner" src="./src/assets/readme/signup.png" width="400px">
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes separadas:
1. Backend (https://github.com/Nixoff/minixoff-backend) 
2. Frontend (esse repositorio)

💡Infelizmente não consegui integrar o backend da forma como gostaria então no momento não funcionam as requisições.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/Nixoff/minixoff-backend.git

# Acesse a pasta do projeto no terminal/cmd
$ cd minixoff-backend/

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# O servidor inciará na porta:3000 - acesse http://localhost:3000 

```


#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/Nixoff/minixoff.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd minixoff

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Angular](https://angular.io/cli/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Bootstrap](https://getbootstrap.com/)**
-   **[NGX-Bootstrap](https://valor-software.com/ngx-bootstrap/#/)**


> Veja o arquivo  [package.json](https://github.com/Nixoff/minixoff/blob/main/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[MongoDB](https://www.mongodb.com/)**
-   **[Mongoose](https://mongoosejs.com/)**

> Veja o arquivo  [package.json](https://github.com/Nixoff/minixoff-backend/blob/main/package.json)


#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (Minix)](https://www.figma.com/file/YTIbp0z72z5ilbgM8BZs09/Prot?node-id=0%3A1)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)** 
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Commit Conventional:  **[Commitlint](https://github.com/conventional-changelog/commitlint)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**


---


## 💪 Considerações

1. Aprendi bastante com o projeto e independente do andamento com a mobi2buy pretendo finaliza-lo e continuar estudando por alguns cursos e materiais que acabei descobrindo no meio do caminho.
2. Apesar de saber fazer as coisas separadamente (algoritmo da aplicação, front-end e back) eu tenho um pouco de dificuldade para fazer backend em pouco tempo
3. Demorei um pouco pois no começo queria fazer com django e acabei ficando confuso e como precisava fazer rapido, optei por fazer com o que eu tinha mais familiaridade.

---

## 🦸 Autor

<a href="https://www.github.com/Nixoff">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56452984?s=400&u=c5b9d9097f1fc873b414ae1ac6ee107af2f84034&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Gabriel Maciel Teixeira</b></sub></a> <a href="https://www.github.com/Nixoff" title="Github">🚀</a>
 <br />

[![Twitter Badge](https://img.shields.io/badge/-@n1x0ff-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/n1x0ff)](https://twitter.com/n1x0ff) [![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-nix/)](www.linkedin.com/in/gabriel-nix/) 
[![Gmail Badge](https://img.shields.io/badge/-gabadev48@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabadev48@gmail.com)](mailto:gabadev48@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Gabriel Maciel 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gabriel-nix/)

---
