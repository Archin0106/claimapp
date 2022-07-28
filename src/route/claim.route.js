const express = require ('express');
const Claimcontroller = require('../controller/controller');
const Claim = require('..model/claim.model');
const router = express.Router();

router.get('/',Claimcontroller.getClaims);
router.post('/add', ClaimController.addClaim);
router.put('/update/:id',ClaimController.updateClaim);
router.delete('/delete/:id',deleteClaim);
router.get('/:id',ClaimController.getClaim);
module.exports = router;

