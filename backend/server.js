// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

mongoose.connect('mongodb+srv://tirthchaklasiya0360:Gb7khWvNExIWdadK@cluster0.8wqdgux.mongodb.net/Fresh',
{
	useNewUrlParser: true,
	useUnifiedTopology: true
}
);

app.use(express.json());
app.use(cors()); // Use the cors middleware

const productSchema = new mongoose.Schema({
name: String,
type: String,
description: String,
price: Number,
image: String,
});

const Product = mongoose.model('Product', productSchema);

// Function to seed initial data into the database
const seedDatabase = async () => {
try {
	await Product.deleteMany(); // Clear existing data

	const products = [
	{
		name: 'Apple', type: 'Fruit',
		description: 'Fresh and crispy',
		price: 150,
		image:
'https://github.com/TirthChaklasiya0360/FreshHarvest/blob/main/backend/images/1.jpg'
	},
	{
		name: 'Banana',
		type: 'Fruit',
		description: 'Rich in potassium',
		price: 75,
		image:
'https://github.com/TirthChaklasiya0360/FreshHarvest/blob/main/backend/images/2.jpg'
	},
	{
		name: 'Orange',
		type: 'Fruit',
		description: 'Packed with vitamin C',
		price: 200,
		image:
'https://github.com/TirthChaklasiya0360/FreshHarvest/blob/main/backend/images/3.jpg'
	},
	{
		name: 'Carrot',
		type: 'Vegetable',
		description: 'Healthy and crunchy',
		price: 100,
		image:
'https://github.com/TirthChaklasiya0360/FreshHarvest/blob/main/backend/images/4.jpg'
	},
	{
		name: 'Broccoli',
		type: 'Vegetable',
		description: 'Nutrient-rich greens',
		price: 175,
		image:
'https://github.com/TirthChaklasiya0360/FreshHarvest/blob/main/backend/images/5.jpg'
	},
	{
		name: 'Grapes',
		type: 'Fruit',
		description: 'Sweet and juicy',
		price: 250,
		image:
'https://github.com/TirthChaklasiya0360/FreshHarvest/blob/main/backend/images/6.jpg'
	},
	{
		name: 'Strawberry',
		type: 'Fruit',
		description: 'Delicious red berries',
		price: 300,
		image:
'https://github.com/TirthChaklasiya0360/FreshHarvest/blob/main/backend/images/7.jpg'
	},
	{
		name: 'Lettuce',
		type: 'Vegetable',
		description: 'Crisp and fresh',
		price: 120,
		image:
'https://github.com/TirthChaklasiya0360/FreshHarvest/blob/main/backend/images/8.jpg'
	},
	{
		name: 'Tomato',
		type: 'Vegetable',
		description: 'Versatile and flavorful',
		price: 180,
		image:
'https://github.com/TirthChaklasiya0360/FreshHarvest/blob/main/backend/images/9.jpg'
	},
	{
		name: 'Cucumber',
		type: 'Vegetable',
		description: 'Cool and hydrating',
		price: 130,
		image:
'https://github.com/TirthChaklasiya0360/FreshHarvest/blob/main/backend/images/10.jpg'
	},

	];

	await Product.insertMany(products);
	console.log('Database seeded successfully');
} catch (error) {
	console.error('Error seeding database:', error);
}
};

// Seed the database on server startup
seedDatabase();
// Define API endpoint for fetching all products
app.get('/api/products', async (req, res) => {
try {
	// Fetch all products from the database
	const allProducts = await Product.find();

	// Send the entire products array as JSON response
	res.json(allProducts);
} catch (error) {
	console.error(error);
	res.status(500)
	.json({ error: 'Internal Server Error' });
}
});

app.listen(PORT, () => {
console.log(
	`Server is running on port ${PORT}`
);
});
