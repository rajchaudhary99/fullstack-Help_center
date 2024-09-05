const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/cards.js')


const app = express();
app.use(cors({
  origin: ['https://deploy.mern.1whq.vercel.app'],
  methods: ['POST', 'GET'],
  credentials: true
}));
app.use(express.json());

const DB='mongodb+srv://rajvardhanchaudhary666:Xq2k7HKxHMyr3qK2@cluster0.aywxj.mongodb.net/Help-Center'
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/products', productRoutes);


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
