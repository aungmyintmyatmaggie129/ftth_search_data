require('dotenv').config();
const mongoose = require('mongoose');
const Customer = require('./models/Customer');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mytel_ftth';

const sampleData = [
    {
        account: 'ACC1001',
        subscriberName: 'Min Khant Zaw',
        customerPhone: '09-123456789',
        stationCode: 'STN-YGN-01',
        vmyCode: 'VMY-2201',
        branch: 'Yangon',
        partnerName: 'Partner A',
        deviceCode: 'OLT-YGN-05',
        portOnCard: 'Card2/Port4',
        portSplitter: 'SPL-12',
        subscriberNode: 'Node-77',
        cableLength: 180,
        ontSerial: 'ONT-889912',
        technicianName: 'Ko Aung',
        technicianPhone: '09-987654321',
        department: 'Technical Support',
        address: 'No.12, Bo Aung Kyaw St, Yangon',
        latLong: '16.8409, 96.1735'
    },
    {
        account: 'ACC1002',
        subscriberName: 'Su Su Hlaing',
        customerPhone: '09-555667788',
        stationCode: 'STN-MDY-02',
        vmyCode: 'VMY-3390',
        branch: 'Mandalay',
        partnerName: 'Partner B',
        deviceCode: 'OLT-MDY-02',
        portOnCard: 'Card1/Port8',
        portSplitter: 'SPL-05',
        subscriberNode: 'Node-14',
        cableLength: 95,
        ontSerial: 'ONT-220017',
        technicianName: 'Zaw Min',
        technicianPhone: '09-112233445',
        department: 'Customer Care',
        address: 'No.5, 78th St, Mandalay',
        latLong: '21.9588, 96.0891'
    },
    {
        account: 'ACC1003',
        subscriberName: 'Htet Htet Aung',
        customerPhone: '09-778899001',
        stationCode: 'STN-NPT-01',
        vmyCode: 'VMY-4471',
        branch: 'Naypyidaw',
        partnerName: 'Partner A',
        deviceCode: 'OLT-NPT-01',
        portOnCard: 'Card3/Port1',
        portSplitter: 'SPL-20',
        subscriberNode: 'Node-31',
        cableLength: 250,
        ontSerial: 'ONT-550033',
        technicianName: 'Kyaw Kyaw',
        technicianPhone: '09-334455667',
        department: 'Technical Support',
        address: 'No.9, Yaza Htarni Rd, Naypyidaw',
        latLong: '19.7633, 96.0785'
    }
];

async function seed() {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected. Seeding...');
    await Customer.deleteMany({});
    await Customer.insertMany(sampleData);
    console.log(`Inserted ${sampleData.length} sample records.`);
    await mongoose.disconnect();
}

seed().catch((err) => {
    console.error('Seed error:', err);
    process.exit(1);
});
