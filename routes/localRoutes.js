const express = require('express');
const router = express.Router();
const {atualizarScj, atualizarScjMassa} = require('../controllers/locais/scjController.js');
const {atualizarSd2, atualizarSd2Massa} = require('../controllers/locais/sd2Controller.js');
const {atualizarSf2, atualizarSf2Massa} = require('../controllers/localController.js');
const {atualizarSck, atualizarSckMassa} = require('../controllers/locais/sckController.js');
const {atualizarSa1, atualizarSa1Massa} = require('../controllers/locais/sa1Controller.js');
const {atualizarSb1, atualizarSb1Massa} = require('../controllers/locais/sb1Controller.js');
const {atualizarSb5, atualizarSb5Massa} = require('../controllers/locais/sb5Controller.js');
const {atualizarSa3, atualizarSa3Massa} = require('../controllers/locais/sa3Controller.js');
const {atualizarSc5, atualizarSc5Massa} = require('../controllers/locais/sc5Controller.js');
const {atualizarSc1, atualizarSc1Massa} = require('../controllers/locais/sc1Controller.js');
const {atualizarDa0, atualizarDa0Massa} = require('../controllers/locais/da0Controller.js');
const {atualizarDa1, atualizarDa1Massa} = require('../controllers/locais/da1Controller.js');
const {atualizarSBZ, atualizarSBZMassa} = require('../controllers/locais/sbzController.js');

router.get("/atualizar-scj", atualizarScj);
router.get("/atualizar-scj-massa", atualizarScjMassa);
router.get("/atualizar-scK", atualizarSck);
router.get("/atualizar-scK-massa", atualizarSckMassa);
router.get("/atualizar-sd2", atualizarSd2);
router.get("/atualizar-sd2-massa", atualizarSd2Massa);
router.get("/atualizar-sf2", atualizarSf2);
router.get("/atualizar-sf2-massa", atualizarSf2Massa);
router.get("/atualizar-sa1", atualizarSa1);
router.get("/atualizar-sa1-massa", atualizarSa1Massa);
router.get("/atualizar-sb1", atualizarSb1);
router.get("/atualizar-sb1-massa", atualizarSb1Massa);
router.get("/atualizar-sb5", atualizarSb5);
router.get("/atualizar-sb5-massa", atualizarSb5Massa);
router.get("/atualizar-sa3", atualizarSa3);
router.get("/atualizar-sa3-massa", atualizarSa3Massa);
router.get("/atualizar-sc5", atualizarSc5);
router.get("/atualizar-sc5-massa", atualizarSc5Massa);
router.get("/atualizar-sc1", atualizarSc1);
router.get("/atualizar-sc1-massa", atualizarSc1Massa);
router.get("/atualizar-da0", atualizarDa0);
router.get("/atualizar-da0-massa", atualizarDa0Massa);
router.get("/atualizar-da1", atualizarDa1);
router.get("/atualizar-da1-massa", atualizarDa1Massa);

router.get("/atualizar-sbz", atualizarSBZ);
router.get("/atualizar-sbz-massa", atualizarSBZMassa);

module.exports = router;
