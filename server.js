const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Glaine:Frostyglaine@cluster0.cbgqg9z.mongodb.net/amoni_labs?retryWrites=true&w=majority")
    .then(() => console.log("Connected To MongoDB"))
    .catch((err) => console.log("MongoDB Connection Error: ", err.message));

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
    res.send("Amoni Labs server is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));