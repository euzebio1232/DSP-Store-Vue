<template id="login">
<!--eslint-disable-->
    <div>
        <form @submit="checkform">

            <label>Email</label>
            <input v-model="email" type="text" > <br/>

            <label>Senha</label>
            <input v-model="senha" type="text"><br/>

            <button>ENTRAR</button> <br/>

            <a id="" href="/#/cadastro">Quero me cadastrar</a>

        </form>

    </div>
    
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    template: "#login",
    data() {
       return {
        email: "",
        senha: "",
    }},

    methods:{
        checkform: function (e) {
            let payload = {
                    email: this.email,
                    senha: this.senha,
            }
       
            axios
            .post("http://localhost:3000/login", payload)
            .then((response)=>{
                let token = response.data.token
                window.localStorage.setItem("token", token)
            })

            e.preventDefault();
        }
    },

    /*methods:{
    cadastroClick: () => {
        alert()
        router.push({name: '/cadastro'})
        }
    }*/
}
</script>

<style>

</style>
