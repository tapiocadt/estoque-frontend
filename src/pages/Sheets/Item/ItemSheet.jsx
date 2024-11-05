import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function ItemSheet() {

    const [formData, setFormData] = useState({
        image: '',
        name: '',
        totalQuantity: '',
        freeQuantity: '',
        minQuantity: '',
    })

    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setResponse(formData);
    };

    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
            maxWidth: 600,
            margin: '0 auto',
          }}
          onSubmit={handleSubmit}
        >
          <h2>Item Form</h2>
    
          <TextField
            label="Image URL"
            variant="outlined"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
    
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
    
          <TextField
            label="Total Quantity"
            variant="outlined"
            type="number"
            name="totalQuantity"
            value={formData.totalQuantity}
            onChange={handleChange}
            required
          />
    
          <TextField
            label="Free Quantity"
            variant="outlined"
            type="number"
            name="freeQuantity"
            value={formData.freeQuantity}
            onChange={handleChange}
            required
          />
    
          <TextField
            label="Min Quantity"
            variant="outlined"
            type="number"
            name="minQuantity"
            value={formData.minQuantity}
            onChange={handleChange}
            required
          />
    
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Enviar
          </Button>
    
          {response && (
            <Box sx={{ mt: 4 }}>
              <h3>Dados enviados:</h3>
              <p><strong>Image:</strong> {response.image}</p>
              <p><strong>Name:</strong> {response.name}</p>
              <p><strong>Total Quantity:</strong> {response.totalQuantity}</p>
              <p><strong>Free Quantity:</strong> {response.freeQuantity}</p>
              <p><strong>Min Quantity:</strong> {response.minQuantity}</p>
            </Box>
          )}
        </Box>
      );
}
