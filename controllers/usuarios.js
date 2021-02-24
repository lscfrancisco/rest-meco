
const { response } = require('express');

const usuariosGet = (req, res = response ) => {

  const { q, nombre, apikey } = req.query;

    res.json({
        ok: true,
        mensaje: 'get API - controlador ',
        q,
        nombre,
        apikey
    })
  }

  const usuariosPost = (req, res = response ) => {

    const { nombre, edad } = req.body;

    res.json({
        ok: true,
        mensaje: 'get API - controlador ',
        nombre, 
        edad
    })

  }

  const usuariosPut = (req, res = response ) => {

    const id = req.params.id;

    res.json({
        ok: true,
        mensaje: 'get API - controlador ',
        id
    })
  }

  const usuariosPatch = (req, res = response ) => {
    res.json({
        ok: true,
        mensaje: 'get API - controlador '
    })
  }

  const usuariosDelete = (req, res = response ) => {
    res.json({
        ok: true,
        mensaje: 'get API - controlador '
    })
  }

  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosDelete,
      usuariosPut,
      usuariosPatch
  }