const express = require("express");
const router = express.Router();
const BillingController = require("../controllers/billingController");

router.post("/", BillingController.createBill);
router.get("/", BillingController.getAllBills);
router.get("/:id", BillingController.getBillById);
router.put("/:id", BillingController.updateBill);
router.delete("/:id", BillingController.deleteBill);

module.exports = router;
