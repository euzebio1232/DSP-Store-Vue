<template id="produtos">
<!--eslint-disable-->
    <ul>
        <li v-for = "produto in produtos" :key="produto.id">
            {{produto.nome}} - {{produto.valor}}
        </li>
        <a id="" href="/#/cadastroProdutos">Cadastrar Produtos</a>
    </ul>

</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    template: "#produtos",
    data: function() {
        return {
            produtos: []
        }
    },

    created: function() {
        let cat = this.$route.params.categoria;
        let url = "http://localhost:3000/produtos/"
        if(cat !== undefined){
            url+=cat;
        }
        

        axios.get(url)
            .then(response => {
                console.log(response.data)
                this.produtos = response.data
            })
            .catch(e => {
                console.log("erro")
            })
    },

    updated: function(l, a) {
        let cat = this.$route.params.categoria;
        let url = "http://localhost:3000/produtos/"
        if(cat !== undefined){
            url+=cat;
        }
        

        axios.get(url)
            .then(response => {
                console.log(response.data)
                this.produtos = response.data
            })
            .catch(e => {
                console.log("erro")
            })
    }

}
</script>

<style>

</style>
