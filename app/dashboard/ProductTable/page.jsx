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

export default function ProductTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Dummy static data
        const dummyData = [
            { _id: '1', name: 'Laptop', price: '999.99', category: 'Electronics' },
            { _id: '2', name: 'Smartphone', price: '699.99', category: 'Electronics' },
            { _id: '3', name: 'Coffee Maker', price: '49.99', category: 'Home' },
            { _id: '4', name: 'Desk Chair', price: '199.99', category: 'Furniture' },
            { _id: '5', name: 'Backpack', price: '59.99', category: 'Accessories' },
            { _id: '6', name: 'Running Shoes', price: '89.99', category: 'Apparel' },
        ];

        setProducts(dummyData);
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: '#0A192F', // Dark blue
                color: 'white',
                minHeight: '100vh',
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
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((p) => (
                            <TableRow key={p._id} hover>
                                <TableCell sx={{ color: 'white' }}>{p.name}</TableCell>
                                <TableCell sx={{ color: 'white' }}>${p.price}</TableCell>
                                <TableCell sx={{ color: 'white' }}>{p.category}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
