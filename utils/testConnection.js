// utils/testConnection.js
// import dbConnect from './dbConnect';

// import dbConnect from "./dbConnect";

const dbConnect = require('./dbConnect');

async function testConnection() {
  try {
    await dbConnect();
    console.log('Connection to MongoDB established successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

testConnection();
