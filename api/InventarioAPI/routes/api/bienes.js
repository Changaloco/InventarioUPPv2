const router = require("express").Router();
const { Bien } = require("../../db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pdf = require("pdf-creator-node");
const options = require("../../helpers/options");

const diskstorage = multer.diskStorage({
  destination: "storage/img",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-upp-Bien-" + file.originalname);
  },
});

const fileUpload = multer({
  storage: diskstorage,
}).single("image");

router.get("/", async (req, res) => {
  const bienes = await Bien.findAll();
  res.json(bienes);
});

router.put("/:bienId", async (req, res) => {
  await Bien.update(req.body, {
    where: { id_Bien: req.params.bienId },
  });
  res.json({ sucess: "bien se ha actualizado con exito" });
});

router.delete("/:bienId", async (req, res) => {
  await Bien.destroy({
    where: { id_Bien: req.params.bienId },
  });
  res.json({ sucess: "bien se ha eliminado con exito" });
});

router.post("/", fileUpload, async (req, res) => {
  const {
    nombreBien,
    descripcionBien,
    claveControl,
    numeroInventarioAnterior,
    numeroInventarioArmonizado,
    clasificacionAdicional,
    numeroSerie,
    fechaAlta,
    estatusBien,
    tratamientoAdministrativo,
    numeroResguardo,
    costoBien,
    costoContable,
    tipoBien,
    montoDepreciacion,
    mesesDepreciacion,
    id_clasificacionConac,
    id_Proyecto,
    id_Departamento,
    id_catalogoDepreciacion,
    id_Modelo,
    id_Factura,
  } = req.body;

  const html = fs.readFileSync(
    path.join(__dirname, "../../helpers/etiquetaTemplate.html"),
    "utf8"
  );
  const filename = Date.now() + "-uppEtiqueta-"+numeroInventarioArmonizado;
  var pdfData = {
    clave: numeroInventarioArmonizado,
  };
  const document = {
    html: html,
    data: {
      info: pdfData,
    },
    path: "./storage/img/" + filename + ".pdf",
  };

  pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

  const newBien = {
    nombreBien: nombreBien,
    descripcionBien: descripcionBien,
    claveControl: claveControl,
    numeroInventarioAnterior: numeroInventarioAnterior,
    numeroInventarioArmonizado: numeroInventarioArmonizado,
    clasificacionAdicional: clasificacionAdicional,
    numeroSerie: numeroSerie,
    fotografiaBien: req.file.filename,
    fechaAlta: fechaAlta,
    estatusBien: estatusBien,
    etiquetaBien: filename+'.pdf',
    tratamientoAdministrativo: tratamientoAdministrativo,
    numeroResguardo: numeroResguardo,
    costoBien: costoBien,
    costoContable: costoContable,
    tipoBien: tipoBien,
    montoDepreciacion: montoDepreciacion,
    mesesDepreciacion: mesesDepreciacion,
    id_clasificacionConac: id_clasificacionConac,
    id_Proyecto: id_Proyecto,
    id_Departamento: id_Departamento,
    id_catalogoDepreciacion: id_catalogoDepreciacion,
    id_Modelo: id_Modelo,
    id_Factura: id_Factura,
  };

  const bien = await Bien.create(newBien);
  res.json(bien);
});

module.exports = router;
