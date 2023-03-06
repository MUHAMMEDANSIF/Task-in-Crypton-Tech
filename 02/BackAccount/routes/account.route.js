import express from "express";
import {
    openAccount,
    updateKYC,
    depositMoney,
    withdrawMoney,
    receiveMoney,
    transferMoney,
    printStatement,
    closeAccount
} from '../controllers/account.controller.js'
const router = express.Router();

  router.post('/openAccount',openAccount);

  router.put('/updateKYC',updateKYC);

  router.post('/depositMoney',depositMoney);

  router.post('/withdrawMoney',withdrawMoney);

  router.post('/transferMoney',transferMoney)

  router.post('/receiveMoney',receiveMoney);

  router.post('/printStatement',printStatement);

  router.put('/closeAccount',closeAccount);

export default router;
