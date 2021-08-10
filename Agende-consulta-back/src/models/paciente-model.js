class Paciente{
    constructor(nome, email, telefone, celular, dtNascimento, sexo, cpf, rua, cep, numCasa, complemento, bairro, cidade){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.celular = celular;
        this.dtNascimento = dtNascimento;
        this.sexo = sexo;
        this.cpf = cpf;
        this.rua = rua;
        this.cep = cep;
        this.numCasa = numCasa;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
    }
}

module.exports = Paciente;