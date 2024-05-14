const { response } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "unname", apikey, page = 10, limit } = req.query;
  res.json({
    message: "get API - controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.status(201).json({
    message: "post API - controlador",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res) => {
  const id = req.params.id;
  res.status(500).json({
    message: "put API - controlador",
    id,
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    message: "patch API - controlador",
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    message: "delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
