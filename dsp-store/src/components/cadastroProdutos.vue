<template id="cadastroProdutos">
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
        </ul>
      </div>
    </nav>

    <div class="container2">
      <a class="links" id="paracadastroProdutos"></a>
      <div class="content">
        <div id="cadastroProduto">
          <form @submit="checkform" method="post" action>
            <h1>Cadastro de Produtos</h1>

            <p>
              <label id="cat" for="categoria_prd">Categoria:</label>
              <select v-model="categoria" required="required">
                <option value="Camisas">Camisa</option>
                <option value="Bonés">Boné</option>
                <option value="Copos">Copo</option>
                <option value="Adesivos">Adesivo</option>
              </select>
            </p>

            <p>
              <label id="marca" for="marca_prd">Marca:</label>
              <select v-model="marca" required="required" type="text" placeholder="Marca">
                <option value="Desapegados">Desapegados</option>
              </select>
            </p>

            <p>
              <label id="nome" for="nome_prd">Nome:</label>
              <input v-model="nome" required="required" type="text" placeholder="Nome">
            </p>

            <p>
              <label id="tam" for="tamanho_prd">Tamanho:</label>
              <select v-model="tamanho" required="required" type="text" placeholder="Tamanho">
                <option value="p">Camisa - P</option>
                <option value="m">Camisa - M</option>
                <option value="g">Camisa - G</option>
                <option value="Único">Boné - Único</option>
                <option value="7x7">Adesivo - 7x7</option>
                <option value="Long Drink">Copo - Long Drink</option>
              </select>
            </p>

            <p>
              <label id="valor" for="Valor_prd">Valor:</label>
              <input v-model="valor" required="required" placeholder="0,00 R$">
            </p>

            <p>
              <label id="dsc" for="descricao_prd">Descrição:</label>
              <input v-model="descricao" required="required" type="text" placeholder="Descrição">
            </p>

            <p>
              <label id="est" for="estoque_prd">Estoque:</label>
              <input v-model="estoque" required="required" type="text" placeholder="Estoque">
            </p>

            <p>
              <label id="ref" for="referencia_prd">Referência:</label>
              <input v-model="referencia" required="required" type="text" placeholder="Referência">
            </p>

            <p>
              <label id="img" for="imagem_prd">URL Imagem:</label>
              <input v-model="imagem" required="required" type="text" placeholder="URL">
            </p>

            <p @click="()=>buscar(produtos)">
              <input type="submit" value="Cadastrar">
            </p>
          </form>
        </div>
      </div>
    </div>

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

/* eslint-disable */
export default {
  template: "#cadastroProdutos",
  data() {
    return {
      categoria: "",
      marca: "",
      nome: "",
      tamanho: "",
      valor: "",
      descricao: "",
      estoque: "",
      referencia: "",
      imagem: ""
    };
  },

  methods: {
    checkform: function(e) {
      /*let headers = {
                "x-access-token":window.localStorage.getItem("token")
            }*/

      let payload = {
        categoria: this.categoria,
        marca: this.marca,
        nome: this.nome,
        tamanho: this.tamanho,
        valor: this.valor,
        descricao: this.descricao,
        estoque: this.estoque,
        referencia: this.referencia,
        imagem: this.imagem
      };

      /*let payload = {
                headers,
                dados
            }*/

      axios.post("http://localhost:3000/produtos", payload).then(response => {
        console.log(response);
      });

      e.preventDefault();
    },

    buscar: function(categoria) {
      alert("Produto Cadastrado");
      this.$router.push("/produtos/");
    }
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

.side {
  border: 0px solid #000000;
  padding: 5px 10px;
  grid-column: 1/4;
  height: 100px;
  background-color: #2d4159;
  margin-top: -5px;
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
  margin-top: -640px;
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

* {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container2 {
  background-color: white;
  margin-top: 7%;
  margin-bottom: 50%;
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
  margin-left: 13px;
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
  margin-left: 13px;
}

label#valor {
  position: absolute;
  margin-left: 43px;
}

label#dsc {
  position: absolute;
  margin-left: 10px;
}

label#est {
  position: absolute;
  margin-left: 22px;
}

label#ref {
  position: absolute;
  margin-left: 3px;
}

label#img {
  position: absolute;
  margin-left: -13px;
}
</style>
