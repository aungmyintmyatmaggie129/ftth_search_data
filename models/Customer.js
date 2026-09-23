const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    account: { type: String, required: true, trim: true },
    subscriberName: { type: String, trim: true },
    customerPhone: { type: String, trim: true },
    stationCode: { type: String, trim: true },
    vmyCode: { type: String, trim: true },
    branch: { type: String, trim: true },
    partnerName: { type: String, trim: true },
    deviceCode: { type: String, trim: true },
    portOnCard: { type: String, trim: true },
    portSplitter: { type: String, trim: true },
    subscriberNode: { type: String, trim: true },
    cableLength: { type: Number },
    ontSerial: { type: String, trim: true },
    technicianName: { type: String, trim: true },
    technicianPhone: { type: String, trim: true },
    department: { type: String, trim: true },
    address: { type: String, trim: true },
    latLong: { type: String, trim: true }
  },
  { timestamps: true }
);

// Speeds up the search endpoint, which queries these fields together
customerSchema.index({ account: 1, stationCode: 1, vmyCode: 1, customerPhone: 1 });

module.exports = mongoose.model('Customer', customerSchema);
