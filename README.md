# ChatGPT Clone

<p>Aqui foi introiudizo um clone do ChatGPT, utilizando de uma integração com a API Oficial da OpenAI</p>

![1688149662859](image/README/1688149662859.png)

### Executando o Back-End (Server)?

```sh
$ cd server
$ npm install
$ npm start
```

Feito isso o serviço de back-end estará funcionando na porta :5000.

<h5> Após a instalação do serviço do Back-End, é muito provável que você tenha de criar o arquivo '.env' dentro da pasta server <strong>(fora da pasta 'src')</strong>, neste devem conter as seguintes informações: <h5/>

```sh
OPENAI_API_KEY="Sua Key OpenAI"
PORT=5000
```


<h5>Para obter a key da OpenAI, é necessário entrar no site mais abaixo, logar ou criar conta com o mesmo, acessar o ícone da sua conta, onde também está escrito 'Personal' e clicar em 'View API Keys'. Após isso, basta cvriar sua chave e também adicionar ao arquivo '.env'</h5>


### Executando o Front-End (Web)?

```sh
$ cd web
$ npm install
$ npm start
```



Links Uteis:
[OpenAI API](https://platform.openai.com)

[Repositório do Criador Original deste projeto - Felipe Aguiar](https://github.com/felipeAguiarCode/node-react-chatgpt-clone)
