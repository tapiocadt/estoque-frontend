import React, { useState } from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import ItemSelect from './ItemSelect';
import { postRequisition } from '../../../../API/requisitionAPI';
import { useAlert } from '../../../../Context/AlertContext';

export default function Form() {
  const [requisition, setRequisition] = useState({
    status: 'Pendente',
    name: '',
    email: '',
    setor: '',
    motive: '',
    schedule: '',
    requisitionItems: [],
  });

  const { showAlert } = useAlert();

  const [items, setItems] = useState([{ id: '', name: '', quantity: '' }]);

  const handleRequisitionChange = (e) => {
    const { name, value } = e.target;
    setRequisition({
      ...requisition,
      [name]: value,
    });
  };

  const addItem = () => {
    setItems([...items, { id: '', item: '', quantity: '' }]);
  };

  const sendRequisition = async (e) => {
    e.preventDefault();
    try {
      const response = await postRequisition({ ...requisition, requisitionItens: items });
      showAlert(response, "success");
    } catch (error) {
      showAlert(error, "error");
    }
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
          maxWidth: 600,
          margin: '0 auto',
        }}
        onSubmit={sendRequisition}
      >
        <h2> Formulário de Requisição </h2>

        <TextField
          label="Seu Nome"
          name="name"
          value={requisition.name}
          onChange={handleRequisitionChange}
          required
          autoComplete='off'
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
          label="Seu Email"
          name="email"
          type="email"
          value={requisition.email}
          onChange={handleRequisitionChange}
          required
          autoComplete='off'
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
          label="Seu Setor"
          name="setor"
          value={requisition.setor}
          onChange={handleRequisitionChange}
          required
          autoComplete='off'
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
          label="Para que esses materiais serão usados?"
          name="motive"
          value={requisition.motive}
          onChange={handleRequisitionChange}
          required
          autoComplete='off'
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
          label="Quando você deseja retirar?"
          name="schedule"
          type="datetime-local"
          value={requisition.schedule}
          onChange={handleRequisitionChange}
          InputLabelProps={{
            shrink: true,
          }}
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

        <h3>Items da requisição</h3>
        <ItemSelect items={items} setItems={setItems} />

        <Button startIcon={<AddCircle />} onClick={addItem} sx={{ mt: 2 }}>
          Adicionar mais um item
        </Button>

        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </>
  )
}
