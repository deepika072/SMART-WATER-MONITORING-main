const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());


// ================= WATER QUALITY DATA =================

let waterData = {
    ph: 7.2,
    turbidity: 2.1,
    chlorine: 1.2,
    temperature: 26,
    treatment: 96,
    reservoir: 78,
    flowRate: 152
};


// ================= HOME =================

app.get("/", (req, res) => {

    res.json({
        message: "SmartWater Backend is running",
        status: "online"
    });

});


// ================= WATER QUALITY =================

app.get("/api/water-quality", (req, res) => {

    res.json(waterData);

});


// ================= UPDATE SENSOR DATA =================

app.post("/api/water-quality", (req, res) => {

    const {
        ph,
        turbidity,
        chlorine,
        temperature
    } = req.body;


    if (ph !== undefined)
        waterData.ph = ph;

    if (turbidity !== undefined)
        waterData.turbidity = turbidity;

    if (chlorine !== undefined)
        waterData.chlorine = chlorine;

    if (temperature !== undefined)
        waterData.temperature = temperature;


    res.json({
        message: "Water quality data updated successfully",
        data: waterData
    });

});


// ================= DASHBOARD DATA =================

app.get("/api/dashboard", (req, res) => {

    res.json({

        waterQuality: {
            ph: waterData.ph,
            turbidity: waterData.turbidity,
            chlorine: waterData.chlorine,
            temperature: waterData.temperature
        },

        treatment: {
            efficiency: waterData.treatment
        },

        reservoir: {
            level: waterData.reservoir
        },

        flow: {
            rate: waterData.flowRate
        },

        alerts: {
            status: "All Normal"
        }

    });

});


// ================= SERVER =================

app.listen(PORT, "0.0.0.0", () => {

    console.log(`SmartWater Backend running on port ${PORT}`);

});