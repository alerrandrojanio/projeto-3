<template>
  <div class="container">
      <h1 class="h4 text-light mb-4 align-center">Lista de Médicos</h1>
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0 d-none d-lg-block bg-primary text-center">
                <div class="px-2 border-0 shadow-lg my-5 ">
                        <h1 class="h4 text-light mb-4 align-center">Lista de Médicos</h1>
                        <table class="table table-striped table-light rounded">
                            <tr>
                                <td>NOME</td>
                                <td>CPF</td>
                                <td>DATA DE NASCIMENTO</td>
                                <td>SEXO</td>
                                <td>CRM</td>
                                <td>ESTADO</td>
                                <td>CBOS</td>
                                <td>EMAIL</td>
                                <td>TELEFONE</td>
                                <td>CELULAR</td>
                            </tr>
                            <!-- FALTA ALTERAR -->
                            <tr  v-for="medico in medicos " :key="medico.id" >
                                <td>{{ medico.nome}}</td>
                                <td>{{ medico.cpf }}</td>
                                <td>{{ medico.dt_nascimento }}</td>
                                <td>{{ medico.sexo }}</td>
                                <td>{{ medico.crm}}</td>
                                <td>{{ medico.estado }}</td>
                                <td>{{ medico.cbos }}</td>
                                <td>{{ medico.email }}</td>
                                <td>{{ medico.telefone }}</td>
                                <td>{{ medico.celular }}</td>
                                <td>
                                    <button type="reset" class="btn btn-light btn-sm btn-block" @click="preencheCampos(medico.id)">Editar</button>
                                    <button type="reset" class="btn btn-light btn-sm btn-block" @click="DeleteUsuario(medico.id)">Deletar</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                        <br/>
                        <hr/>
                        <br/>
                        <div class="mb-4 justify-content-md-center col-md-auto w-25 centraliza">
                            <!-- <button type="submit" class="btn btn-primary btn-lg btn-block" @click="getAll">Mostrar</button><br/> -->
                            <button type="reset" class="btn btn-light btn-lg btn-block " @click="this.$router.replace('pagina-inicial')">Voltar</button>
                            
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
                                <input type="text" class="form-control" placeholder="Nome"
                                    v-model="nome" required>
                                <div class="invalid-feedback">
                                    Nome é obrigatório
                                </div>
                            </div>
                            
                            <div class="col left-inner-addon">
                      
                                <input type="text" class="form-control" placeholder="Email"
                                    v-model="email" required>
                                <div class="invalid-feedback">
                                    Email é obrigatório
                                </div>

                            </div>
                            
                            <div class="col left-inner-addon">
                      
                                <input type="text" class="form-control" placeholder="Telefone"
                                    v-model="telefone" required>
                                <div class="invalid-feedback">
                                    Telefone é obrigatoria
                                </div>

                            </div>
                        </div>
                        <br/>
                        <div class="form-row">
                            <div class="col left-inner-addon">
                                <!-- v-mask="'##/##/####'" -->
                                <input type="text" class="form-control" placeholder="Celular"
                                    v-model="celular" required>
                                <div class="invalid-feedback">
                                    Celular é obrigatório
                                </div>
                            </div>
                            
                            <div class="col left-inner-addon">
                      
                                <input type="text" class="form-control" placeholder="Data de Nascimento"
                                    v-model="dt_nascimento" required>
                                <div class="invalid-feedback">
                                    Data de Nascimento é obrigatório
                                </div>

                            </div>
                            
                            <div class="col left-inner-addon">
                      
                                <input type="text" class="form-control" placeholder="Sexo"
                                    v-model="sexo" required>
                                <div class="invalid-feedback">
                                    Sexo é obrigatorio
                                </div>

                            </div>
                        </div>
                        <br/>
                        <div class="form-row">
                            <div class="col left-inner-addon">
                                <!-- v-mask="'##/##/####'" -->
                                <input type="text" class="form-control" placeholder="CPF"
                                    v-model="cpf" required>
                                <div class="invalid-feedback">
                                    CPF é obrigatório
                                </div>
                            </div>
                            
                            <div class="col left-inner-addon">
                      
                                <input type="text" class="form-control" placeholder="CRM"
                                    v-model="crm" required>
                                <div class="invalid-feedback">
                                    CRM é obrigatório
                                </div>

                            </div>
                            
                            <div class="col left-inner-addon">
                      
                                <input type="text" class="form-control" placeholder="UF"
                                    v-model="estado" required>
                                <div class="invalid-feedback">
                                    UF é obrigatorio
                                </div>

                            </div>

                            <div class="col left-inner-addon">
                      
                                <input type="text" class="form-control" placeholder="CBOS"
                                    v-model="cbos" required>
                                <div class="invalid-feedback">
                                    CBOS é obrigatorio
                                </div>

                            </div>
                        </div>

                        

                    </div>
                    
                    <div class="mb-4 justify-content-md-center col-md-auto w-25 centraliza">
                        <button type="reset" class="btn btn-light btn-lg btn-block" @click="PutMedico">Atualizar</button>   
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
                email: "",
                telefone: "",
                celular: "",
                dt_nascimento: "",
                sexo: "",
                cpf: "",
                crm: "",
                estado: "",
                cbos: "",
                medicos: [],
                baseURI:"http://localhost:3000/medicos"      
            }
      },
      methods:{
        getAll() {
            axios.get(this.baseURI).then((result) =>{
                    this.medicos = result.data
                })
        },

        preencheCampos(id){
            for(var i = 0; i < this.medicos.length; i++){
                if(id == this.medicos[i].id){
                    this.id = this.medicos[i].id,
                    this.nome = this.medicos[i].nome,
                    this.email = this.medicos[i].email,
                    this.telefone = this.medicos[i].telefone,
                    this.celular = this.medicos[i].celular,
                    this.dt_nascimento = this.medicos[i].dt_nascimento,
                    this.sexo = this.medicos[i].sexo,
                    this.cpf = this.medicos[i].cpf,
                    this.crm = this.medicos[i].crm,
                    this.estado = this.medicos[i].estado,
                    this.cbos = this.medicos[i].cbos
                }    
            } 
        },

        limpar(){
            this.id = "",
            this.nome = "",
            this.email = "",
            this.telefone = "",
            this.celular = "",
            this.dt_nascimento = "",
            this.sexo = "",
            this.cpf = "",
            this.crm = "",
            this.estado = "",
            this.cbos = "" 
        },

        PutMedico(){
            let obj ={
                nome: this.nome,
                email: this.email,
                telefone: this.telefone,
                celular: this.celular,
                dt_nascimento: this.dt_nascimento,
                sexo: this.sexo,
                cpf: this.cpf,
                crm: this.crm,
                estado: this.estado,
                cbos: this.cbos 
            };

            axios.put(this.baseURI+ "/" + this.id, obj).then((result) =>{
              console.log(result)
            })

            alert("Médico atualizado!");
            window.location.reload()

        },
        
        DeleteMedico(id){
          axios.delete(this.baseURI +"/"+id).then((result) =>{
            console.log(result)
          })
          alert("Médico deletado!");
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
