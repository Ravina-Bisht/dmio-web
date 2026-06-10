const axios = require("axios");
const Lead = require("../models/lead");

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbykoFwWI6Z6dJMMD3YZZx4aoNd1oXAtpf-eJzAaJxKc_lItQwg7x29GljPXiz9jxxNH/exec";

const createLead = async (req, res) => {
  try {
    // Save in MongoDB
    const lead = await Lead.create(req.body);

    // Send to Google Sheet
    try {
      await axios.post(GOOGLE_SHEET_URL, req.body);
      console.log("Google Sheet Updated");
    } catch (sheetError) {
      console.log("Google Sheet Error:", sheetError.message);
    }

    res.status(201).json({
      success: true,
      lead,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createLead };





// const GOOGLE_SHEET_URL =
//   "https://script.google.com/macros/s/AKfycbykoFwWI6Z6dJMMD3YZZx4aoNd1oXAtpf-eJzAaJxKc_lItQwg7x29GljPXiz9jxxNH/exec";