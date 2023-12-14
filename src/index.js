const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

require("dotenv").config()
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const clienteRoutes = require('./routes/cliente');
const visitaRoutes = require('./routes/visita');
const presupuestoRoutes = require('./routes/presupuesto');
const ventaRoutes = require('./routes/venta');

const app = express();
app.use(cors());;
app.use(bodyParser.json());
const port = process.env.PORT || 9000;

// Middleware

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', clienteRoutes);
app.use('/api', visitaRoutes);
app.use('/api', presupuestoRoutes);
app.use('/api', ventaRoutes);

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
})

//MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log("Server is running on port", port)
});