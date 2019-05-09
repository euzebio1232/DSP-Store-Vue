<template id="teste">
  <!--eslint-disable-->
  <div >
    <!-- Fixed navbar -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
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

          <ul class="nav navbar-nav navbar-right" >
            <li class="nav-item dropdown" >
              <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" >MATHEUS</a>
              <ul id="login-dp" class="dropdown-menu">
                <li>
                  <div class="row">

                    <div class="col-md-12">
                      MATHEUS
                      <div class="buttons">

                        <a href="#" class="btn btn-fb">
                          <i class="fa fa-facebook"></i>Perfil
                        </a>

                        <a href="#" class="btn btn-tw">
                          <i class="fa fa-twitter"></i>Sair
                        </a>
                      </div>  
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

    <div class="bd-example">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../_imagens/banner3.jpg" class="d-block w-100" alt="...">
            <!--<div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>-->
          </div>
          <div class="carousel-item">
            <img src="../_imagens/banner.jpg" class="d-block w-100" alt="...">
            <!--<div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>-->
          </div>
          <div class="carousel-item">
            <img src="../_imagens/banner2.jpg" class="d-block w-100" alt="...">
            <!--<div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>-->
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div class="content side">
      <h1 id="n_produtos">Nossos Produtos</h1>
    </div>
    <!--FIM DO CONTAINER SIDE -->
    <div class="cont">
      <div class="conte camisa">
        <a href="#">
          <img class="logo-teste" src="../_imagens/abadatxt.png">
        </a>
      </div>
      <div class="conte descricao">
        <p id="titulo">ABADÁ CARNAVAL 2019</p>
        <br>
        <h4>Abadás desapegados 2019 sublimados</h4>
        <h6 class="text-muted">REF: Abadá CL21</h6>
        <button id="botao">SAIBA MAIS</button>
      </div>
    </div>
    <!--FIM DO CONT -->

    <div class="cont_bone">
      <div class="conte_bone descricao_bone">
        <p id="title_bone">BONÉ TRUCK 2019</p>
        <br>
        <h4>Aba curva, tecido brim e tela, regulador de plástico</h4>
        <h6 class="text-muted">REF: Boné CL21 CRAZY</h6>
        <button id="botao">SAIBA MAIS</button>
      </div>
      <div class="conte_bone bone">
        <a href="#">
          <img class="logo-teste2" src="../_imagens/bonetxt.png">
        </a>
      </div>
    </div>
    <!--FIM DO CONTA_BONE -->

    <div class="cont_copo">
      <div class="conte_copo copo">
        <a href="#">
          <img class="logo-teste3" src="../_imagens/copolgtxt.png">
        </a>
      </div>
      <div class="conte_copo descricao_copo">
        <p id="title_copo">COPO LONG DRINK 2019</p>
        <br>
        <h4>Copo long drink modelo desapegados black</h4>
        <h6 class="text-muted">REF:LD01</h6>
        <button id="botao">SAIBA MAIS</button>
      </div>
    </div>
    <!--FIM DO CONTA_COPO -->
    <div class="content vp">
      <a id="ver_produtos" href="/#/produtos">Veja todos os produtos</a>
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

export default {
  template: "#teste",
  data() {
    return {
      email: "",
      senha: "",
      produtos: []
    };
  },

  created: function() {
    let cat = this.$route.params.categoria;
    let url = "http://localhost:3000/produtos/";
    if (cat !== undefined) {
      url += cat;
    }

    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.produtos = response.data;
      })
      .catch(e => {
        console.log("erro");
      });
  },

  updated: function(l, a) {
    let cat = this.$route.params.categoria;
    let url = "http://localhost:3000/produtos/";
    if (cat !== undefined) {
      url += cat;
    }

    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.produtos = response.data;
      })
      .catch(e => {
        console.log("erro");
      });
  },

  methods: {
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

    comprar: function(id) {
      this.$router.push("/cardItem/" + id);
    },

    buscar: function(categoria) {
      this.$router.push("/produtos/" + categoria);
    },

    ver: function(categoria) {
      this.$router.push("/produtos/");
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
  min-width: 150px;
  height: 100px;
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
  position: absolute;
  margin-left: 4px;
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

.camisa {
  background-repeat: no-repeat;
  background-size: 100% 400px;
  background-image: url(../_imagens/camisa_logo_g.png);
  background-color: white;
}

.camisa:hover {
  opacity: 1;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 250ms ease;
}

.logo-teste {
  height: 103%;
  width: 103.2%;
  margin-left: -10px;
  margin-top: -5px;
  opacity: 0;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 0.3s ease;
}

.logo-teste:hover {
  opacity: 1;
  background-color: #00000081;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 0.3s ease;
}

.descricao {
  background-color: #000000ea;
}

p#titulo {
  text-align: center;
  font-family: sans-serif;
  font-weight: bolder;
  color: white;
  margin-top: 40px;
  font-size: 30px;
}

button#botao {
  width: 150px;
  height: 40px;
  float: right;
  margin-top: 90px;
  margin-right: 260px;
  background-color: transparent;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  border-radius: 50px;
}

button#botao:hover {
  color: black;
  background-color: white;
}

.cont_bone {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 10px 10px;
  grid-template-columns: 2fr 2fr;
  grid-gap: 0px;
}

.conte_bone {
  color: #ffffff;
  background-color: #7777ff;
  padding: 5px 10px;
  margin-left: 0px;
  margin-top: 622px;
  height: 390px;
}

.bone {
  background-repeat: no-repeat;
  background-size: 100% 400px;
  background-image: url(../_imagens/bone3_logo_g.png);
  background-color: white;
}

.logo-teste2 {
  height: 103%;
  width: 103.2%;
  margin-left: -10px;
  margin-top: -5px;
  opacity: 0;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 0.3s ease;
}

.logo-teste2:hover {
  opacity: 1;
  background-color: #00000081;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 0.3s ease;
}

.descricao_bone {
  background-color: #000000ea;
}

p#title_bone {
  text-align: center;
  font-family: sans-serif;
  font-weight: bolder;
  color: white;
  margin-top: 50px;
  font-size: 30px;
}

.cont_copo {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 10px 10px;
  grid-template-columns: 2fr 2fr;
  grid-gap: 0px;
}

.conte_copo {
  color: #ffffff;
  background-color: #7777ff;
  padding: 5px 10px;
  margin-left: 0px;
  margin-top: 992px;
  height: 390px;
}

.copo {
  background-repeat: no-repeat;
  background-size: 100% 400px;
  background-image: url(../_imagens/copo_logo_g.png);
  background-color: white;
}

.logo-teste3 {
  height: 103%;
  width: 103.2%;
  margin-left: -10px;
  margin-top: -5px;
  opacity: 0;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 0.3s ease;
}

.logo-teste3:hover {
  opacity: 1;
  background-color: #00000081;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 0.3s ease;
}

.copo:hover {
  opacity: 1;
}

.descricao_copo {
  background-color: #000000ea;
}

p#title_copo {
  text-align: center;
  font-family: sans-serif;
  font-weight: bolder;
  color: white;
  margin-top: 50px;
  font-size: 30px;
}

.vp {
  border: 0px solid #000000;
  padding: 5px 10px;
  grid-column: 1/4;
  height: 100px;
  background-color: #fff;
  text-align: center;
  margin-top: 100.9%;
  transition: 0.5s;
}

.vp:hover {
  background-color: #2d4159;
  transition: 0.8s;
}
a#ver_produtos {
  color: #004080;
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
</style>
