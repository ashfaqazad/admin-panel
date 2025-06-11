'use client';
import { useEffect, useState } from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Box,
} from '@mui/material';

export default function Product() {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('/api/eshop')
            .then(res => res.json())
            .then(data => {
                console.log('Fetched products:', data.products); // ✅ This should log an array
                setProducts(data.products); // ✅ use correct key
            })
            .catch(err => console.error('Fetch error:', err));
    }, []);


    return (
        <Box
            sx={{
                backgroundColor: '#0A192F', // Dark blue
                color: 'white',
                minHeight: '100vh',
                width: "600px",
                p: 4,
                borderRadius: 2,
            }}
        >
            {/* <Typography variant="h5" fontWeight="bold" mb={3}>
        📦 Products
      </Typography> */}

            <Typography variant="h5" fontWeight="bold" mt={4} mb={3}>
                📦 Products
            </Typography>


            <TableContainer component={Paper} sx={{ backgroundColor: '#0A192F' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Price</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {products.map((p) => (
                            console.log('products:', p);

                        <TableRow key={p._id} hover>
                            <TableCell sx={{ color: 'white' }}>{p.title}</TableCell>
                            <TableCell sx={{ color: 'white' }}>${p.price}</TableCell>
                            <TableCell sx={{ color: 'white' }}>{p.description}</TableCell>
                        </TableRow> */}
                        {products.map((p) => {
                            // console.log('product:', p);
                            console.log("Product:", p); // ✅ works here

                            return (
                                <TableRow key={p._id} hover>
                                    <TableCell sx={{ color: 'white' }}>{p.title}</TableCell>
                                    <TableCell sx={{ color: 'white' }}>${p.price}</TableCell>
                                    <TableCell sx={{ color: 'white' }}>{p.description}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}





    // useEffect(() => {
    //     // Dummy static data
    //     const dummyData = [
    //         { _id: '1', name: 'Laptop', price: '999.99', category: 'Electronics' },
    //         { _id: '2', name: 'Smartphone', price: '699.99', category: 'Electronics' },
    //         { _id: '3', name: 'Coffee Maker', price: '49.99', category: 'Home' },
    //         { _id: '4', name: 'Desk Chair', price: '199.99', category: 'Furniture' },
    //         { _id: '5', name: 'Backpack', price: '59.99', category: 'Accessories' },
    //         { _id: '6', name: 'Running Shoes', price: '89.99', category: 'Apparel' },
    //     ];

    //     setProducts(dummyData);
    // }, []);

    // useEffect(() => {
    //     fetch('http://localhost:3001/api/eshop') // ← E-commerce app's route
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, []);

    // useEffect(() => {
    //     fetch('http://localhost:3001/api/eshop')
    //         .then(res => {
    //             if (!res.ok) throw new Error('API not found');
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log('Fetched data:', data);
    //             setProducts(data.eShop);
    //         })
    //         .catch(err => {
    //             console.error('Fetch error:', err);
    //         });

    // }, []);




    // useEffect(() => {
    //     fetch('/api/eshop')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('Fetched products:', data.products);
    //             setProducts(data.products);
    //         });
    // }, []);
