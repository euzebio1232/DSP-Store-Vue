<template>
<!--eslint-disable-->
  <div> 
    <div class="hello">
        <div class="container">
			    <div class="top">
				    <a id="logo_top" href="index.html"> <img id="logo_p" src="../_imagens/dspg_logo_p.png"></a>
				    <a id="c" href="/#/login">ENTRAR</a>
				    <a id="p" href="/#/produtos">PRODUTOS</a>
				    <a id="s" href="">SOBRE</a>	
		    	</div>	<!--FIM DO CONTENT -->

		</div> <!--FIM DO CONTAINER -->

		<div class="container_two">
			
			<div class="content top_baixo">
				<a href="/#/produtos/camisa"><img id="camisa" src="../_imagens/camisa_logo_p.png"></a>
				<a href="/#/produtos/boné"><img id="bone" src="../_imagens/bone2_logo_p.png"></a>
				<a href="/#/produtos/copo"><img id="copo" src="../_imagens/copo2_logo_p.png"></a>
				<a href="/#/produtos/adesivo"><img id="adesivo" src="../_imagens/adesivo_logo_p.png"></a>
			</div> <!--FIM DO CONTENT top_baixo -->

		</div> <!--FIM DO CONTAINER_Two -->

		<div class="container_logo">
			<img id="logo" src="../_imagens/dspg_logo.png">
		</div> <!--FIM DO CONTAINER_logo -->

		<div class="content side">
			<h1 id="n_produtos">Nossos Produtos</h1>
		</div> <!--FIM DO CONTAINER SIDE -->

		<div class="cont">
			<div class="conte camisa"></div>
			<div class="conte descricao">
				<p id="titulo">ABADÁ CARNAVAL 2019</p>
				<button>SAIBA MAIS</button>
			</div>
		</div> <!--FIM DO CONT -->

		<div class="cont_bone">
			<div class="conte_bone descricao_bone">
				<p id="title_bone">BONÉ TRUCK 2019</p>
				<button id="btn_bone">SAIBA MAIS</button>
			</div>
			<div class="conte_bone bone"></div>
		</div> <!--FIM DO CONTA_BONE -->

		<div class="cont_copo">
			<div class="conte_copo copo"></div>
			<div class="conte_copo descricao_copo">
				<p id="title_copo">COPO LONG DRINK 2019</p>
				<button id="btn_copo">SAIBA MAIS</button>
			</div>
		</div> <!--FIM DO CONTA_COPO -->

		<div class="content vp">
			<a id="ver_produtos" href="">Veja todos os produtos</a>
		</div> <!--FIM DO CONTENT VP-->

		<footer>
			<div class="rpe">
				<a id="rpe" href="https://www.instagram.com/calldasmatheus">Developed by: Matheus Caldas</a>
			</div>
		</footer>
	</div> <!--FIM DA INTERFACE -->
  </div>
</template>

<script>
/*eslint-disable*/
import cadastro from './cadastro.vue'
import router from '../router/index.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.interface {
    width: 100%;
    margin: -10px auto auto -8px;
    padding: 10px 0px 0px 0px;
}

.container{
	display: grid;
	grid-template-columns: 200px 2fr 1fr;
	grid-gap: 0px;
	grid-auto-rows: 100px;
}

.top{
	border: 0px solid #000000;
	color: #ffffff;
	background-color: #7777ff;
	padding: 5px 10px;
	grid-column: 1/4;
	background-color:  #152236;
	height: 62px;
	box-shadow: black;
	margin-top: -8px;
}

a{
	color: #00aeef;
	text-decoration: none;
	font-family: sans-serif; /*stratum2*/
	text-shadow: white;
	font-weight: bold;
}

a:hover{
	color: white;
}

a#s{
	float: right;
	margin-top: 20px;
	margin-right: 10px;
}

a#p{
	float: right;
	margin-top: 20px;
	margin-right: 10px;
}

a#c{
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

.container_two {
	display: grid;
	grid-template-columns: 200px 2fr 1fr;
	grid-gap: 0px;
	grid-auto-rows: 100px;
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
	margin-left: 530px;
	float: left;
}

img#bone{
	margin-top: 10px;
	height: 40px;
	width: 50px;
	margin-left: 20px;
	float: left;
}

img#copo{
	margin-top: 10px;
	height: 40px;
	margin-left: 22px;
	width: 30px;
	float: left;
}

img#adesivo{
	margin-top: 10px;
	height: 40px;
	margin-left: 20px;
	width: 40px;
	float: left;
}

img#logo{
	width: 1333px;
	height: 400px;
	margin-left: 0px;
	margin-top: -78px;
}

.side{
	border: 0px solid #000000;
	padding: 5px 10px;
	grid-column: 1/4;
	height: 100px;
	background-color: #00284d;
	margin-top: -5px;
}

h1#n_produtos{
	text-align: center;
	color: white;
	font-family: sans-serif;
	font-weight: bolder;
	margin-top: 30px;
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

.camisa{
	background-repeat: no-repeat;
	background-size: 100% 400px;
	background-image: url(../_imagens/camisa_logo_g.png);
	background-color: white;
}

.descricao{
	background-color: black;
}

p#titulo{
	text-align: center;
	font-family: sans-serif;
	font-weight: bolder;
	color: white;
	margin-top: 40px;
	font-size: 30px;
}

button{
	width: 150px;
	height: 30px;
	float: right;
	margin-top: 200px;
	margin-right: 260px;
	background-color: black;
	font-family: sans-serif;
	font-weight: bold;
	color: white;
}

button:hover{
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
	margin-top: 632px;
	height: 390px;

}

.bone{
	background-repeat: no-repeat;
	background-size: 100% 400px;
	background-image: url(../_imagens/bone3_logo_g.png);
	background-color: white;
}

.descricao_bone{
	background-color: black;
}

p#title_bone{
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
	margin-top: 1009px;
	height: 390px;

}

.copo{
	background-repeat: no-repeat;
	background-size: 100% 400px;
	background-image: url(../_imagens/copo_logo_g.png);
	background-color: white;
}

.copo:hover{
	opacity: 1;
}

.descricao_copo{
	background-color: black;
}

p#title_copo{
	text-align: center;
	font-family: sans-serif;
	font-weight: bolder;
	color: white;
	margin-top: 50px;
	font-size: 30px;
}

.vp{
	border: 0px solid #000000;
	padding: 5px 10px;
	grid-column: 1/4;
	height: 100px;
	background-color: white;
	text-align: center;
	margin-top: 102.9%;
}

a#ver_produtos{
	color: #004080;
	font-family: sans-serif;
	font-weight: bolder;
	font-size: 30px;
	float: right;
	margin-top: 30px;
	margin-right: 38%;
}

a#ver_produtos:hover{
	color: #003566;
}

.rpe{
	border: 0px solid #000000;
	padding: 5px 10px;
	grid-column: 1/4;
	height: 50px;
	background-color: #004080;
	text-align: center;
}

a#rpe{
	color: white;
	font-family: sans-serif;
	font-weight: bolder;
	font-size: 20px;
	float: right;
	margin-top: 13px;
	margin-right: 39.3%;
}
</style>
