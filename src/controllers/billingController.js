const BillingService = require("../services/billingService");

const createBill = async (req, res) => {
  try {
    const bill = await BillingService.createBill(req.body);
    res.status(201).json({ message: "Bill created successfully", bill });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllBills = async (req, res) => {
  try {
    const bills = await BillingService.getAllBills();
    res.status(200).json(bills);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBillById = async (req, res) => {
  try {
    const bill = await BillingService.getBillById(req.params.id);
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    res.status(200).json(bill);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBill = async (req, res) => {
  try {
    const updatedBill = await BillingService.updateBill(req.params.id, req.body);
    res.status(200).json({ message: "Bill updated successfully", updatedBill });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBill = async (req, res) => {
  try {
    await BillingService.deleteBill(req.params.id);
    res.status(200).json({ message: "Bill deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBill, getAllBills, getBillById, updateBill, deleteBill };
