<template id="cadastro">
    <div>
        <form @submit="checkform">

            <label>Categoria</label>
            <input v-model="categoria" type="text" > <br/>

            <label>Nome</label>
            <input v-model="nome" type="text"><br/>

            <label>Sobrenome</label>
            <input v-model="sobrenome" type="text"><br/>

            <label>E-mail</label>
            <input v-model="email" type="text"><br/>

            <label>Sexo</label>
            <input v-model="sexo" type="text"><br/>

            <label>Cpf</label>
            <input v-model="cpf" type="float"><br/>

            <label>Senha</label>
            <input v-model="senha" type="text"><br/>

            <button>Cadastrar</button>

        </form>

    </div>
</template>

<script>
import axios from 'axios'

/* eslint-disable */
export default {
    template: "#cadastro",
    data() {
       return {
        categoria: "",
        nome: "",
        sobrenome: "",
        email: "",
        sexo: "",
        cpf: "",
        senha: ""
    }},


    methods:{
        checkform: function (e) {
            let payload = {
                    categoria: this.categoria,
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                    email: this.email,
                    sexo: this.sexo,
                    cpf: this.cpf,
                    senha: this.senha
            }
       
            axios
            .post("http://localhost:3000/usuarios", payload)
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
