import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { postItem } from '../../../API/itemAPI';
import { useAlert } from '../../../Context/AlertContext';

export default function ItemSheet() {

  const {showAlert} = useAlert();

  const [formData, setFormData] = useState({
    image: '',
    name: '',
    totalQuantity: '',
    freeQuantity: '',
    minQuantity: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await postItem(formData);
      showAlert(response, "success");
      // console.log(response);
    } catch(error){
      showAlert(error, "success");
    }
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
        sx={{
          // Cor da borda quando o campo não está focado
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Cor padrão da borda
            },
            "&:hover fieldset": {
              borderColor: "white", // Cor da borda ao passar o mouse
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // Cor da borda ao focar no campo
            },
          },
          // Cor do texto e da label
          "& .MuiInputBase-input": {
            color: "white", // Cor do texto dentro do campo
          },
          "& .MuiInputLabel-root": {
            color: "white", // Cor da label padrão
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white", // Cor da label ao focar no campo
          },
        }}
      />

      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        sx={{
          // Cor da borda quando o campo não está focado
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Cor padrão da borda
            },
            "&:hover fieldset": {
              borderColor: "white", // Cor da borda ao passar o mouse
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // Cor da borda ao focar no campo
            },
          },
          // Cor do texto e da label
          "& .MuiInputBase-input": {
            color: "white", // Cor do texto dentro do campo
          },
          "& .MuiInputLabel-root": {
            color: "white", // Cor da label padrão
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white", // Cor da label ao focar no campo
          },
        }}
      />

      <TextField
        label="Total Quantity"
        variant="outlined"
        type="number"
        name="totalQuantity"
        value={formData.totalQuantity}
        onChange={handleChange}
        required
        sx={{
          // Cor da borda quando o campo não está focado
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Cor padrão da borda
            },
            "&:hover fieldset": {
              borderColor: "white", // Cor da borda ao passar o mouse
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // Cor da borda ao focar no campo
            },
          },
          // Cor do texto e da label
          "& .MuiInputBase-input": {
            color: "white", // Cor do texto dentro do campo
          },
          "& .MuiInputLabel-root": {
            color: "white", // Cor da label padrão
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white", // Cor da label ao focar no campo
          },
        }}
      />

      <TextField
        label="Free Quantity"
        variant="outlined"
        type="number"
        name="freeQuantity"
        value={formData.freeQuantity}
        onChange={handleChange}
        required
        sx={{
          // Cor da borda quando o campo não está focado
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Cor padrão da borda
            },
            "&:hover fieldset": {
              borderColor: "white", // Cor da borda ao passar o mouse
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // Cor da borda ao focar no campo
            },
          },
          // Cor do texto e da label
          "& .MuiInputBase-input": {
            color: "white", // Cor do texto dentro do campo
          },
          "& .MuiInputLabel-root": {
            color: "white", // Cor da label padrão
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white", // Cor da label ao focar no campo
          },
        }}
      />

      <TextField
        label="Min Quantity"
        variant="outlined"
        type="number"
        name="minQuantity"
        value={formData.minQuantity}
        onChange={handleChange}
        required
        sx={{
          // Cor da borda quando o campo não está focado
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Cor padrão da borda
            },
            "&:hover fieldset": {
              borderColor: "white", // Cor da borda ao passar o mouse
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // Cor da borda ao focar no campo
            },
          },
          // Cor do texto e da label
          "& .MuiInputBase-input": {
            color: "white", // Cor do texto dentro do campo
          },
          "& .MuiInputLabel-root": {
            color: "white", // Cor da label padrão
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white", // Cor da label ao focar no campo
          },
        }}
      />

      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Enviar
      </Button>
    </Box>
  );
}
