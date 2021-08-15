<template>
  <div class="container">
      <h1 class="h4 text-light mb-4 align-center">Lista de Usuários</h1>
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0 d-none d-lg-block bg-primary text-center">
                <div class="px-2 border-0 shadow-lg my-5 ">
                        <h1 class="h4 text-light mb-4 align-center">Lista de Usuários</h1>
                        <table class="table table-striped table-light rounded">
                            <tr>
                                <td>ID</td>
                                <td>NOME</td>
                                <td>USUÁRIO</td>
                                <td>SENHA</td>
                            </tr>
                            <tr  v-for="usuario in usuarios " :key="usuario.id" >
                                <td>{{ usuario.id}}</td>
                                <td>{{ usuario.nome}}</td>
                                <td>{{ usuario.usuario }}</td>
                                <td>{{ usuario.senha }}</td>
                                <td>
                                    <button type="reset" class="btn btn-light btn-sm btn-block" @click="preencheCampos(usuario.id)">Editar</button> 
                                </td>
                                <td>
                                    <button type="reset" class="btn btn-light btn-sm btn-block" @click="DeleteUsuario(usuario.id)">Deletar</button> 
                                </td>
                            </tr>
                        </table>
                    </div>
                       
                        
                        <div class="mb-4 justify-content-md-center col-md-auto w-25 centraliza">
                            <!-- <button type="submit" class="btn btn-primary btn-lg btn-block" @click="getAll">Mostrar</button><br/> -->
                            <button type="reset" class="btn btn-light btn-lg btn-block" @click="this.$router.replace('pagina-inicial')">Voltar</button>
                            
                        </div>
            </div>
        </div>

        <div class="container">
            <h1 class="h4 text-light mb-4 align-center">Editar</h1>
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0 d-none d-lg-block bg-primary text-center">
                    <div class="px-2 border-0 shadow-lg my-5">
                        
                        <div class="form-row">
                            <div class="col left-inner-addon">
                                <!-- v-mask="'##/##/####'" -->
                                <input type="text" id="nome" name="nome" class="form-control" placeholder="Nome"
                                    v-model="nome" required>
                                <div class="invalid-feedback">
                                    Nome é obrigatório
                                </div>
                            </div>
                            
                            <div class="col left-inner-addon">
                      
                                <input type="text" id="usuario" name="usuario" class="form-control" placeholder="Usuário"
                                    v-model="usuario" required>
                                <div class="invalid-feedback">
                                    Usuário é obrigatório
                                </div>

                            </div>
                            
                            <div class="col left-inner-addon">
                      
                                <input type="password" id="senha" name="senha" class="form-control" placeholder="Senha"
                                    v-model="senha" required>
                                <div class="invalid-feedback">
                                    Senha é obrigatoria
                                </div>

                            </div>
                        </div>

                    </div>
                    
                    <div class="mb-4 justify-content-md-center col-md-auto w-25 centraliza">
                        <button type="reset" class="btn btn-light btn-lg btn-block" @click="PutUsuario(this.id)">Atualizar</button>   
                    </div>
                </div>
            </div>
        </div>

    </div>

    

</template>

<script>
import axios from "axios";

export default {
      data() {
            return {
                id: "",
                nome: "",
                usuario: "",
                senha: "",
                usuarios: [],
                baseURI:"http://localhost:3000/usuarios"      
            }
      },
      methods:{
        getAll() {
            axios.get(this.baseURI).then((result) =>{
                    this.usuarios = result.data
            })
        },

        preencheCampos(id){
            for(var i = 0; i < this.usuarios.length; i++){
                if(id == this.usuarios[i].id){
                    this.id = this.usuarios[i].id,
                    this.nome = this.usuarios[i].nome,
                    this.usuario = this.usuarios[i].usuario
                    //this.senha = this.usuarios[i].senha
                }    
            } 
        },

        limpar(){
            this.id = "",
            this.nome = "",
            this.usuario = "",
            this.senha = ""
        },

        PutUsuario(){
            let obj ={
              nome: this.nome,
              usuario: this.usuario,
              senha: this.senha 
            };

            axios.put(this.baseURI+"/" + this.id, obj).then((result) =>{
              console.log(result)
            })

            alert("Usuário atualizado!");
            window.location.reload()

        },
        
        DeleteUsuario(){
          axios.delete(this.baseURI +"/"+this.id).then((result) =>{
            console.log(result)
          })
          alert("Usuário deletado!");
          window.location.reload()
        }
    },
    
    created: function(){
        this.$nextTick(this.getAll)
    }
}
</script>

<style>

.centraliza {
    width: 555px;
    margin: auto;
}

</style>