const Bill = require("../models/bill");

const createBill = async (data) => {
  return await Bill.create(data);
};

const getAllBills = async () => {
  return await Bill.findAll();
};

const getBillById = async (id) => {
  return await Bill.findByPk(id);
};

const updateBill = async (id, data) => {
  const bill = await Bill.findByPk(id);
  if (!bill) throw new Error("Bill not found");

  return await bill.update(data);
};

const deleteBill = async (id) => {
  const bill = await Bill.findByPk(id);
  if (!bill) throw new Error("Bill not found");

  return await bill.destroy();
};

module.exports = { createBill, getAllBills, getBillById, updateBill, deleteBill };
