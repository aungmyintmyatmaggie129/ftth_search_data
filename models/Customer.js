const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    account: { type: String, required: true, trim: true },
    subscriber_name: { type: String, trim: true },
    customer_phone_number: { type: String, trim: true },
    station_code: { type: String, trim: true },
    VMY_Code: { type: String, trim: true },
    branch: { type: String, trim: true },
    partner_name: { type: String, trim: true },
    device_code: { type: String, trim: true },
    port_on_card: { type: String, trim: true },
    port_splitter: { type: String, trim: true },
    subscriber_node: { type: String, trim: true },
    cable_length: { type: Number },
    ont_serial: { type: String, trim: true },
    technical_name: { type: String, trim: true },
    technical_Phone_Number: { type: String, trim: true },
    department: { type: String, trim: true },
    address: { type: String, trim: true },
    latLong: { type: String, trim: true }
  },
  { timestamps: true }
);

// Speeds up the search endpoint, which queries these fields together
customerSchema.index({ account: 1, stationCode: 1, vmyCode: 1, customerPhone: 1 });

module.exports = mongoose.model('Customer', customerSchema);
