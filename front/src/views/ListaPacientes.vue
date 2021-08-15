<template>
  <div class="container">
      <h1 class="h4 text-light mb-4 align-center">Lista de Pacietes</h1>
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0 d-none d-lg-block bg-primary text-center">
                <div class="px-2 border-0 shadow-lg my-5 ">
                        <h1 class="h4 text-light mb-4 align-center">Lista de Pacientes</h1>
                        <table class="table table-striped table-light rounded">
                            <tr>
                                <td>NOME</td>
                                <td>CPF</td>
                                <td>DT NASCIMENTO</td>
                                <td>SEXO</td>
                                <td>RUA</td>
                                <td>NÚMERO</td>
                                <!-- <td>COMPLEMENTO</td> -->
                                <!-- <td>CEP</td> -->
                                <td>BAIRRO</td>
                                <td>CIDADE</td>
                                <td>EMAIL</td>
                                <!-- <td>TELEFONE</td> -->
                                <!-- <td>CELULAR</td> -->
                            </tr>
                            <!-- FALTA ALTERAR -->
                            <tr  v-for="paciente in pacientes " :key="paciente.id" >
                                <td>{{ paciente.nome}}</td>
                                <td>{{ paciente.cpf }}</td>
                                <td>{{ paciente.dt_nascimento }}</td>
                                <td>{{ paciente.sexo }}</td>
                                <td>{{ paciente.rua}}</td>
                                <td>{{ paciente.num_casa }}</td>
                                <!-- <td>{{ paciente.complemento }}</td> -->
                                <!-- <td>{{ paciente.cep }}</td> -->
                                <td>{{ paciente.bairro }}</td>
                                <td>{{ paciente.cidade }}</td>
                                <td>{{ paciente.email }}</td>
                                <!-- <td>{{ paciente.telefone }}</td> -->
                                <!-- <td>{{ paciente.celular }}</td> -->
                                <td>
                                    <button type="reset" class="btn btn-light btn-sm btn-block" @click="preencheCampos(paciente.id)">Editar</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                        <br/>
                        <hr/>
                        <br/>
                        
                        <div class="mb-4 justify-content-md-center col-md-auto w-25 centraliza">
                            <!-- <button type="submit" class="btn btn-primary btn-lg btn-block" @click="getAll">Mostrar</button><br/> -->
                            <button type="reset" class="btn btn-light btn-lg btn-block" @click="this.$router.replace('pagina-inicial')">Voltar</button>
                            
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
                nome: "",
                email: "",
                telefone: "",
                celular: "",
                dt_nascimento: "",
                sexo: "",
                cpf: "",
                rua: "",
                cep: "",
                num_casa: "",
                complemento: "",
                bairro: "",
                cidade: "",
                pacientes: [],
                baseURI:"http://localhost:3000/pacientes"      
            }
      },
      methods:{
        getAll() {
            axios.get(this.baseURI).then((result) =>{
                    this.pacientes = result.data
            })
        },

        preencheCampos(id){
            for(var i = 0; i < this.pacientes.length; i++){
                if(id == this.pacientes[i].id){
                    this.nome = this.pacientes[i].nome,
                    this.email = this.pacientes[i].email,
                    this.telefone = this.pacientes[i].telefone,
                    this.celular = this.pacientes[i].celular,
                    this.dt_nascimento = this.pacientes[i].dt_nascimento,
                    this.sexo = this.pacientes[i].sexo,
                    this.cpf = this.pacientes[i].cpf,
                    this.rua = this.pacientes[i].rua,
                    this.cep = this.pacientes[i].cep,
                    this.num_casa = this.pacientes[i].num_casa,
                    this.complemento = this.pacientes[i].complemento,
                    this.bairro = this.pacientes[i].bairro,
                    this.cidade = this.pacientes[i].cidade
                }    
            } 
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