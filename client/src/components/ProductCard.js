import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, IconButton, Box, TextField } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <Card sx={{ maxWidth: 345, m: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
            {/* Product Image */}
            <CardMedia
                component="img"
                height="180"
                image={`${process.env.REACT_APP_BACKEND_URL}${product.image}`}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
            />

            {/* Product Info */}
            <CardContent>
                <Typography variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${product.price.toFixed(2)}
                </Typography>

                {/* Quantity Selector */}
                <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                    <Box display="flex" alignItems="center">
                        <IconButton onClick={decrementQuantity}>
                            <RemoveIcon />
                        </IconButton>
                        <TextField
                            value={quantity}
                            variant="outlined"
                            size="small"
                            sx={{ width: '50px', textAlign: 'center' }}
                            inputProps={{ style: { textAlign: 'center' } }}
                        />
                        <IconButton onClick={incrementQuantity}>
                            <AddIcon />
                        </IconButton>
                    </Box>

                    {/* Add to Cart Button */}
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: 'var(--primary-blue)', '&:hover': { backgroundColor: 'var(--secondary-blue)' } }}
                        endIcon={<AddShoppingCartIcon />}
                    >
                        Add to Cart
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
