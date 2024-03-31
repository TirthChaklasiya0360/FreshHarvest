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
'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D'
	},
	{
		name: 'Banana',
		type: 'Fruit',
		description: 'Rich in potassium',
		price: 75,
		image:
'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww'
	},
	{
		name: 'Orange',
		type: 'Fruit',
		description: 'Packed with vitamin C',
		price: 200,
		image:
'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww'
	},
	{
		name: 'Carrot',
		type: 'Vegetable',
		description: 'Healthy and crunchy',
		price: 100,
		image:
'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww'
	},
	{
		name: 'Broccoli',
		type: 'Vegetable',
		description: 'Nutrient-rich greens',
		price: 175,
		image:
'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2NvbGl8ZW58MHx8MHx8fDA%3D'
	},
	{
		name: 'Grapes',
		type: 'Fruit',
		description: 'Sweet and juicy',
		price: 250,
		image:
'https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhcGVzfGVufDB8fDB8fHww'
	},
	{
		name: 'Strawberry',
		type: 'Fruit',
		description: 'Delicious red berries',
		price: 300,
		image:
'https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0cmFiZXJyeXxlbnwwfHwwfHx8MA%3D%3D'
	},
	{
		name: 'Lettuce',
		type: 'Vegetable',
		description: 'Crisp and fresh',
		price: 120,
		image:
'https://images.unsplash.com/photo-1515356956468-873dd257f911?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxldHR1Y2V8ZW58MHx8MHx8fDA%3D'
	},
	{
		name: 'Tomato',
		type: 'Vegetable',
		description: 'Versatile and flavorful',
		price: 180,
		image:
'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fHww'
	},
	{
		name: 'Cucumber',
		type: 'Vegetable',
		description: 'Cool and hydrating',
		price: 130,
		image:
'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1Y3VtYmVyfGVufDB8fDB8fHww'
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
