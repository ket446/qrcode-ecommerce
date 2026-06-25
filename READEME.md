# 🛒 QR Code E-commerce

Projeto desenvolvido durante o bootcamp da DIO com o objetivo de praticar conceitos de Node.js e geração de QR Codes para aplicações de e-commerce.

## 📋 Descrição

Esta aplicação permite gerar QR Codes de forma simples e rápida através do terminal, utilizando Node.js e bibliotecas específicas para criação de códigos QR.

O projeto foi desenvolvido para reforçar conceitos importantes como:

- Estruturação de projetos Node.js
- Organização de código em módulos
- Gerenciamento de dependências com NPM
- Geração dinâmica de QR Codes
- Boas práticas de desenvolvimento

## 🚀 Tecnologias Utilizadas

- Node.js
- JavaScript
- NPM
- QR Code Terminal

## 📁 Estrutura do Projeto

```text
qrcode-ecommerce/
│
├── src/
│   ├── prompts/
│   ├── services/
│   └── index.js
│
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/ket446/qrcode-ecommerce.git
```

Acesse a pasta do projeto:

```bash
cd qrcode-ecommerce
```

Instale as dependências:

```bash
npm install
```

## ▶️ Executando o Projeto

Execute o comando:

```bash
npm run start
```

ou

```bash
node src/index.js
```

## 💻 Exemplo de Código

```javascript
import qr from "qrcode-terminal";

const url = "https://www.seusite.com.br/produto";

qr.generate(url, { small: true }, (qrcode) => {
  console.log(qrcode);
});
```

## 🎯 Funcionalidades

- Gerar QR Code através do terminal.
- Personalizar informações do QR Code.
- Estrutura modular para fácil manutenção.
- Aplicação prática para cenários de e-commerce.

## 📚 Aprendizados

Durante o desenvolvimento deste projeto foram aplicados conceitos como:

- Modularização de código.
- Manipulação de pacotes NPM.
- Programação assíncrona.
- Organização de projetos Node.js.
- Geração de QR Codes utilizando bibliotecas externas.

## 📸 Demonstração

Adicione aqui capturas de tela do terminal executando o projeto:

```md
![Demonstração](./assets/demo.png)
```

## 🔗 Repositório

https://github.com/ket446/qrcode-ecommerce

## 👨‍💻 Autor

Desenvolvido por **Ket446** durante o desafio de projeto da DIO.

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
