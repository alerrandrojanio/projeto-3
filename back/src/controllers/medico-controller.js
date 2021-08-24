const Medico = require("../models/medico-model");
const MedicoService = require("../services/medico-service");
var medicoService = new MedicoService();

exports.get = async (req, res) => {
    res.json(await medicoService.getAll());
  };

  exports.getByNome = async (req, res) =>{
    res.json(await medicoService.getByNome(req.query.nome));
  };

  exports.post = async (req, res) => {
    res.json(await medicoService.add(
      new Medico(
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.celular,
        req.body.dt_nascimento,
        req.body.sexo,
        req.body.cpf,
        req.body.crm,
        req.body.estado,
        req.body.cbos
      )));
  };

  exports.put = async (req, res) => {
    res.json(await medicoService.update(
        req.params.id,
        new Medico(
          req.body.nome,
          req.body.email,
          req.body.telefone,
          req.body.celular,
          req.body.dt_nascimento,
          req.body.sexo,
          req.body.cpf,
          req.body.crm,
          req.body.estado,
          req.body.cbos
        )));
  };

  exports.delete = (req, res) => {
    res.json(medicoService.delete(req.params.id));
  };