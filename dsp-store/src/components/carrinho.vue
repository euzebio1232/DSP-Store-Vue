<template id="login">
  <!--eslint-disable-->
  <div>
    <!-- Fixed navbar -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="index.html">
        <img class="logo" src="../_imagens/dspg_logo_p.png" height="40">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar1"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar1">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              SOBRE
              <span class="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="/#/produtos">
              PRODUTOS
              <span class="sr-only">(current)</span>
            </a>
          </li>

          <ul class="nav navbar-nav navbar-right">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">MATHEUS</a>
              <ul id="login-dp" class="dropdown-menu">
                <li>
                  <div class="row">
                    <div class="col-md-12">
                      Entrar com
                      <div class="social-buttons">
                        <a href="#" class="btn btn-fb">
                          <i class="fa fa-facebook"></i> Facebook
                        </a>
                      </div>ou
                      <form
                        @submit="checkform"
                        class="form"
                        role="form"
                        method="post"
                        action="login"
                        accept-charset="UTF-8"
                        id="login-nav"
                      >
                        <div class="form-group">
                          <label class="sr-only" for="email_login">email</label>
                          <input
                            v-model="email"
                            type="email"
                            class="form-control"
                            id="exampleInputEmail2"
                            placeholder="Email"
                            required
                          >
                        </div>

                        <div class="form-group">
                          <label class="sr-only" for="senha_login">senha</label>
                          <input
                            v-model="senha"
                            type="password"
                            class="form-control"
                            id="exampleInputPassword2"
                            placeholder="Senha"
                            required
                          >

                          <div class="help-block text-right">
                            <a href>Esqueceu a senha?</a>
                          </div>
                        </div>

                        <div class="form-group">
                          <button
                            type="submit"
                            value="Logar"
                            class="btn btn-primary btn-block"
                          >Entrar</button>
                        </div>

                        <div class="checkbox">
                          <label>
                            <input type="checkbox"> Permanecer logado
                          </label>
                        </div>
                      </form>
                    </div>
                    <div class="bottom text-center">
                      Novo por aqui?
                      <a href="/#/cadastro">
                        <b>Cadastre-se</b>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </div>
    </nav>

    <div class="container_two">
      <div class="content top_baixo">
        <a href="/#/produtos/Camisas">
          <img id="camisa" src="../_imagens/camisa_logo_p.png">
        </a>
        <a href="/#/produtos/Bonés">
          <img id="bone" src="../_imagens/bonezinho.png">
        </a>
        <a href="/#/produtos/Copos">
          <img id="copo" src="../_imagens/copo2_logo_p.png">
        </a>
        <a href="/#/produtos/Adesivos">
          <img id="adesivo" src="../_imagens/adesivinho.png">
        </a>
      </div>
      <!--FIM DO CONTENT top_baixo -->
    </div>
    <!--FIM DO CONTAINER_Two -->

    <table class="table">
        <div>
            <h1>CARRINHO</h1>
        </div>
        <div v-if="produto !== undefined ">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">PRODUTO</th>
          <th scope="col">PREÇO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
              <div class="col-md-2">
            <img v-bind:src="produto.imagem" class="card-img" alt="...">
          </div>
          </th>
          <td>{{produto.nome}}</td>
          <td>R${{produto.valor}}</td>
        </tr>
      </tbody>
        </div>
        <div v-else>
        <h1>Nada encontrado</h1>
      </div>
    </table>

    <div class="container2">
      <a class="links" id="paracadastroEntrega"></a>
      <div class="content">
        <div id="cadastroEntrega">
          <form @submit="checkform" method="post" action>
            <h4>Entrega</h4>

            <p>
              <label id="cat" for="pais">País:</label>
              <select v-model="pais" required="required">
                <option value="brasil">Brasil</option>
              </select>
            </p>

            <p>
              <label id="marca" for="estado">Estado:</label>
              <select v-model="estado" required="required" type="text" placeholder="Estado">
                <option value="pb">Paraíba</option>
                <option value="pe">Pernambuco</option>
                <option value="ce">Ceará</option>
                <option value="ba">Bahia</option>
              </select>
            </p>

            <p>
              <label id="nome" for="cidade">Cidade:</label>
              <input v-model="cidade" required="required" type="text" placeholder="Nome da cidade">
            </p>

            <p>
              <label id="valor" for="cep">Cep:</label>
              <input v-model="cep" required="required" placeholder="Cep da cidade">
            </p>

            <p>
              <label id="dsc" for="rua">Rua:</label>
              <input v-model="rua" required="required" type="text" placeholder="Nome da rua">
            </p>

            <p>
              <label id="est" for="bairro">Bairro:</label>
              <input v-model="bairro" required="required" type="text" placeholder="Nome do bairro">
            </p>

            <p>
              <label id="ref" for="numero">Número:</label>
              <input v-model="numero" required="required" type="text" placeholder="Número da residência">
            </p>

            <p>
              <label id="ref" for="contato">Contato:</label>
              <input v-model="contato" required="required" type="text" placeholder="Telefone para contato">
            </p>

            <p>
              <label id="ref" for="produto" >Produto:</label>
              <input v-model="produto.nome" required="required" type="text" disabled>
            </p>

            <p>
              <label id="val" for="valor" >Valor:</label>
              <input v-model="produto.valor" required="required" type="text" disabled>
            </p>

            <p>
              <label id="img" for="imagem" >IMG:</label>
              <input v-model="produto.imagem" required="required" type="text" disabled>
            </p>

            <p>
              <label id="ref" for=""></label>
              <h4>VALOR TOTAL: R${{produto.valor}}</h4>
            </p>

            <p @click="()=>comprar(pedidos.id)">
              <input type="submit" value="Finalizar Compra">
            </p>
          </form>
        </div>
      </div>
    </div>


    <div class="content vp">
      <a id="ver_produtos" href="#" @click="()=>ver(produtos)">Veja todos os produtos</a>
    </div>
    <!--FIM DO CONTENT VP-->

    <div class="content rdp">
      <a id="rdp" href></a>
    </div>
    <!--FIM DO CONTENT rdp-->

    <footer>
      <div class="rpe">
        <a id="rpe" href="https://www.instagram.com/calldasmatheus">DSP DEVELOPMENT</a>
      </div>
    </footer>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import { constants } from "crypto";

export default {
  template: "#login",
  data() {
    return {
      email: "",
      senha: "",
      produtos: [],
      produto: {},
      pedidos: [],
      pedido:{}
    };
  },

  data() {
    return {
      pais: "",
      estado: "",
      cidade: "",
      cep: "",
      rua: "",
      bairro: "",
      numero: "",
      contato: "",
      produto: "",
      valor: "",
      imagem: ""
    };
  },

  created: function() {
    let id = this.$route.params.id;
    let url = "http://localhost:3000/produtos/";

    axios
      .get(url)
      .then(response => {
        this.produtos = response.data;

        this.produto = this.produtos.find(item => item.id == id);
        console.log(this.produto);
      })
      .catch(e => {
        console.log(e);
      });
  },
  updated: function() {
    let id = this.$route.params.id;
    let url = "http://localhost:3000/produtos/";

    axios
      .get(url)
      .then(response => {
        this.produtos = response.data;

        this.produto = this.produtos.find(item => item.id == id);
        console.log(this.produto);
      })
      .catch(e => {
        console.log(e);
      });
  },
  /*methods: {
    checkform: function(e) {
      let payload = {
        email: this.email,
        senha: this.senha
      };

      axios.post("http://localhost:3000/login", payload).then(response => {
        let token = response.data.token;
        window.localStorage.setItem("token", token);
        alert("Você está logado");
      });
      e.preventDefault();
    },

    ver: function(categoria) {
      this.$router.push("/produtos/");
    }
  },*/
  

  methods: {
    checkform: function(e) {
      /*let headers = {
                "x-access-token":window.localStorage.getItem("token")
            }*/

      let payload = {
        pais: this.pais,
        estado: this.estado,
        cidade: this.cidade,
        cep: this.cep,
        rua: this.rua,
        bairro: this.bairro,
        numero: this.numero,
        contato: this.contato,
        produto: this.produto.nome,
        valor: this.produto.valor,
        imagem: this.produto.imagem
      };

      /*let payload = {
                headers,
                dados
            }*/

      axios.post("http://localhost:3000/pedidos", payload).then(response => {
        console.log(response);
      });

      e.preventDefault();
    },

    buscar: function(categoria) {
      alert("Compra realizada com sucesso");
      this.$router.push("/pedido/");
    },

    comprar: function(id) {
        alert("Compra realizada com sucesso");
      this.$router.push("/pedido/" +id);
    },
    
  }
};
</script>

<style>
/* eslint-disable */

a.navbar-brand {
  margin-left: 110px;
}

.navbar {
  box-shadow: #000000;
}

.navbar-toggler-icon {
  margin-right: 110px;
}

#login-dp {
  min-width: 250px;
  padding: 14px 14px 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
}
#login-dp .help-block {
  font-size: 12px;
}
#login-dp .bottom {
  background-color: rgba(255, 255, 255, 0.8);
  border-top: 1px solid #ddd;
  clear: both;
  padding: 14px;
}
#login-dp .social-buttons {
  margin: 12px 0;
}
#login-dp .social-buttons a {
  width: 49%;
}
#login-dp .form-group {
  margin-bottom: 10px;
}
.btn-fb {
  color: #fff;
  background-color: #3b5998;
}
.btn-fb:hover {
  color: #fff;
  background-color: #496ebc;
}
.btn-tw {
  color: #fff;
  background-color: #55acee;
}
.btn-tw:hover {
  color: #fff;
  background-color: #59b5fa;
}
@media (max-width: 768px) {
  #login-dp {
    background-color: inherit;
    color: #fff;
  }
  #login-dp .bottom {
    background-color: inherit;
    border-top: 0 none;
  }
}

.navbar-right .dropdown-menu {
  right: 0;
  left: auto;
}

.navbar-expand-lg .navbar-nav .dropdown-menu {
  position: absolute;
}
.bg-dark {
  background-color: #152236 !important;
}
.navbar-expand-lg .navbar-nav {
  margin-right: 50px;
}

.navbar-dark .navbar-nav .nav-link {
  color: #00aeef;
  text-decoration: none;
  font-family: sans-serif; /*stratum2*/
  text-shadow: white;
  font-weight: bold;
}

.container_two {
  display: grid;
  grid-template-columns: 200px 2fr 1fr;
  grid-gap: 0px;
  grid-auto-rows: 100px;
  margin-top: 106px;
  margin-bottom: -78px;
}

.top_baixo {
  grid-column: 1/4;
  height: 62px;
  background-color: #2d4159;
  margin-top: -40px;
}

img#camisa {
  margin-top: 10px;
  height: 40px;
  width: 50px;
  margin-left: 560px;
  float: left;
}

img#bone {
  margin-top: 10px;
  height: 40px;
  width: 50px;
  margin-left: 20px;
  float: left;
}

img#copo {
  margin-top: 10px;
  height: 40px;
  margin-left: 22px;
  width: 30px;
  float: left;
}

img#adesivo {
  margin-top: 10px;
  height: 40px;
  margin-left: 20px;
  width: 40px;
  float: left;
}

.side {
  border: 0px solid #000000;
  padding: 5px 10px;
  grid-column: 1/4;
  height: 100px;
  background-color: #2d4159;
  margin-top: -5px;
}

h1#n_produtos {
  text-align: center;
  color: white;
  font-family: sans-serif;
  font-weight: bolder;
  margin-top: 23px;
}

.cont {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 10px 10px;
  grid-template-columns: 2fr 2fr;
  grid-gap: 0px;
  margin-top: -252px;
}

.conte {
  color: #ffffff;
  background-color: #7777ff;
  padding: 5px 10px;
  margin-left: 0px;
  margin-top: 252px;
  height: 390px;
}

.vp {
  border: 0px solid #000000;
  padding: 5px 10px;
  grid-column: 1/4;
  height: 100px;
  background-color: #2d4159;
  text-align: center;
  margin-top: 50px;
  transition: 0.5s;
}

.vp:hover {
  background-color: #2a5285;
  transition: 0.8s;
}
a#ver_produtos {
  color: #fff;
  font-family: sans-serif;
  font-weight: bolder;
  font-size: 30px;
  float: right;
  margin-top: 20px;
  margin-right: 38%;
  text-decoration: none;
}

a#ver_produtos:hover {
  color: #fff;
  text-decoration: none;
  transition: 0.6s;
}

.rdp {
  border: 0px solid #000000;
  padding: 5px 10px;
  grid-column: 1/4;
  height: 400px;
  background-color: #000000ea;
  background-image: url(../_imagens/logo_N.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-origin: padding-box;
  background-clip: border-box;
  background-size: 20%;
  background-position-y: 50px;

  text-align: center;
  margin-top: 0%;
}

a#rdp {
  color: #004080;
  font-family: sans-serif;
  font-weight: bolder;
  font-size: 30px;
  float: right;
  margin-top: 30px;
  margin-right: 38%;
}

.rpe {
  border: 0px solid #000000;
  padding: 5px 10px;
  grid-column: 1/4;
  height: 30px;
  background-color: #2d4159;
  text-align: center;
  margin-bottom: -7px;
}

a#rpe {
  color: white;
  font-family: sans-serif;
  font-weight: bolder;
  font-size: 15px;
  float: right;
  margin-top: -1px;
  margin-right: 44%;
}

a#rpe:hover {
  text-decoration: none;
  color: #55acee;
}

#cardItem {
  position: relative;
  margin-left: 170px;
  margin-top: 50px;
}

#desc {
  text-align: left;
}

.center {
  width: 150px;
  margin: 0px auto;
  margin-left: 0%;
}

#color {
  color: #57bf6d;
}

.table{
    margin-top: 50px;
}

h1{
    color:#3b5998;
    font-size: 50px;
    margin-bottom: 30px;
}

.col-md-2{
    margin-left: 10%;

}

.table{
    width: 1000px;
    position: relative;
    margin-left: 13%;
}



.container2 {
  background-color: white;
  margin-top: 7%;
  margin-bottom: 0%;
}

h1 {
  font-size: 48px;
  color: #2d4159;
  padding: 2px 0 10px 0;
  font-family: Arial, sans-serif;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
}

h1:after {
  content: " ";
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 10px;
  background: -webkit-linear-gradient(
    left,
    rgba(147, 184, 189, 0) 0%,
    rgba(147, 184, 189, 0.8) 20%,
    rgba(147, 184, 189, 1) 53%,
    rgba(147, 184, 189, 0.8) 79%,
    rgba(147, 184, 189, 0) 100%
  );
  background: linear-gradient(
    left,
    rgba(147, 184, 189, 0) 0%,
    rgba(147, 184, 189, 0.8) 20%,
    rgba(147, 184, 189, 1) 53%,
    rgba(147, 184, 189, 0.8) 79%,
    rgba(147, 184, 189, 0) 100%
  );
}

p {
  margin-bottom: 15px;
}

label {
  color: #2d4159;
  position: absolute;
  margin-left: -0px;
  margin-top: 6px;
}

/* placeholder */
::-webkit-input-placeholder {
  color: #bebcbc;
  font-style: italic;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #bebcbc;
  font-style: italic;
}

input {
  outline: none;
}

/*estilo dos input,  menos o checkbox */
input:not([type="checkbox"]) {
  width: 30%;
  margin-top: 4px;
  margin-left: 100px;
  padding: 3px;
  border: 1px solid #b2b2b2;

  -webkit-border-radius: 3px;
  border-radius: 3px;

  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;

  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

select {
  width: 30%;
  margin-top: 4px;
  padding: 3px;
  margin-left: 100px;
  border: 1px solid #b2b2b2;

  -webkit-border-radius: 3px;
  border-radius: 3px;

  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;

  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

/*estilo do botão submit */
input[type="submit"] {
  width: 15% !important;
  cursor: pointer;
  background: #2d4159;
  padding: 8px 5px;
  color: #fff;
  font-size: 18px;
  border: 1px solid #fff;
  margin-bottom: 10px;
  margin-left: -100px;
  text-shadow: 0 1px 1px #333;

  -webkit-border-radius: 5px;
  border-radius: 5px;

  transition: all 0.2s linear;
}

/*estilo do botão submit no hover */
input[type="submit"]:hover {
  background: #2d4159;
}

.link {
  position: absolute;
  background: #e1eaeb;
  color: #7f7c7c;
  left: 0px;
  height: 20px;
  width: 440px;
  padding: 17px 30px 20px 30px;
  font-size: 16px;
  text-align: right;
  border-top: 1px solid #dbe5e8;

  -webkit-border-radius: 0 0 5px 5px;
  border-radius: 0 0 5px 5px;
}

.link a {
  font-weight: bold;
  background: #f7f8f1;
  padding: 6px;
  color: rgb(29, 162, 193);
  margin-left: 10px;
  border: 1px solid #cbd518;

  -webkit-border-radius: 4px;
  border-radius: 4px;

  -webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;
}

.link a:hover {
  color: #39bfd7;
  background: #f7f7f7;
  border: 1px solid #4ab3c6;
}

#cadastro {
  position: relative;
  top: 0px;
  width: 88%;
  padding: 18px 6% 18px 6%;
  margin-top: -20px;
  margin-left: 80px;
  background: white;

  -webkit-box-shadow: 5px;
  border-radius: 5px;

  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;

  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

/* Efeito ao clicar no botão ( Ir para Login ) */
#paracadastro:target ~ .content #cadastro,
#paralogin:target ~ .content #login {
  z-index: 2;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;

  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

/* Efeito ao clicar no botão ( Cadastre-se ) */
#registro:target ~ .content #login,
#paralogin:target ~ .content #cadastro {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

/*fadeInLeft*/
@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/*fadeOutLeft*/
@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
}

.container {
  display: grid;
  grid-template-columns: 200px 2fr 1fr;
  grid-gap: 0px;
  grid-auto-rows: 100px;
  margin-bottom: 60px;
}

.top {
  border: 0px solid #000000;
  color: #ffffff;
  background-color: #7777ff;
  padding: 5px 10px;
  grid-column: 1/4;
  background-color: #152236;
  height: 62px;
  box-shadow: black;
}

a {
  color: #2d4159;
  text-decoration: none;
  font-family: sans-serif; /*stratum2*/
  text-shadow: #7777ff;
  font-weight: bold;
}

a:hover {
  color: white;
}

a#s {
  float: right;
  margin-top: 20px;
  margin-right: 10px;
}

a#p {
  float: right;
  margin-top: 20px;
  margin-right: 10px;
}

a#c {
  float: right;
  margin-top: 20px;
  margin-right: 110px;
}

a#logo_top {
  float: left;
  margin-left: 120px;
  margin-top: 5px;
}

img#logo_p {
  width: 140px;
  height: 50px;
}

label#cat {
  position: absolute;
  margin-left: 55px;
}

label#marca {
  position: absolute;
  margin-left: 37px;
}

label#nome {
  position: absolute;
  margin-left: 37px;
}

label#tam {
  position: absolute;
  margin-left: 40px;
}

label#valor {
  position: absolute;
  margin-left: 57px;
}

label#dsc {
  position: absolute;
  margin-left: 56px;
}

label#est {
  position: absolute;
  margin-left: 43px;
}

label#ref {
  position: absolute;
  margin-left: 28px;
}

label#img {
  position: absolute;
  margin-left: -13px;
}

label#val {
  position: absolute;
  margin-left: 48px;
}

label#img {
  position: absolute;
  margin-left: 55px;
}

</style>
