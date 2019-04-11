<template id="cadastroProdutos">
    <div>
        <form @submit="checkform">

            <label>Categoria</label>
            <input v-model="categoria" type="text" > <br/>

            <label>Marca</label>
            <input v-model="marca" type="text"><br/>

            <label>nome</label>
            <input v-model="nome" type="text"><br/>

            <label>Tamanho</label>
            <input v-model="tamanho" type="text"><br/>

            <label>Valor</label>
            <input v-model="valor" type="text"><br/>

            <label>Descrição</label>
            <input v-model="descricao" type="text"><br/>

            <button>Cadastrar</button>

        </form>

    </div>
</template>

<script>
import axios from 'axios'

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
    }},


    methods:{
        checkform: function (e) {

            let headers = {
                "x-access-token":window.localStorage.getItem("token")
            }

            let dados = {
                    categoria: this.categoria,
                    marca: this.marca,
                    nome: this.nome,
                    tamanho: this.tamanho,
                    valor: this.valor,
                    descricao: this.descricao,
                    
            }
            
            let payload = {
                headers,
                dados
            }

            axios
            .post("http://localhost:3000/produtos", payload)
            .then((response)=>{
                console.log(response)
            })

            e.preventDefault();
        }
    }
}
</script>

<style>

</style>