import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import ItemSelect from './ItemSelect';
import { postRequisition } from '../../../../API/requisitionAPI';

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

  const [items, setItems] = useState([{ id: '', name:'', quantity: '' }]);

  const handleRequisitionChange = (e) => {
    const { name, value } = e.target;
    setRequisition({
      ...requisition,
      [name]: value,
    });
  };

  const addItem = () => {
    setItems([...items, { id:'', item: '', quantity: '' }]);
  };

  const sendRequisition = async (e) => {
    e.preventDefault();
    const response = await postRequisition({ ...requisition, requisitionItens: items });
    console.log(response);
  }

  return (
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
      />

      <TextField
        label="Seu Email"
        name="email"
        type="email"
        value={requisition.email}
        onChange={handleRequisitionChange}
        required
        autoComplete='off'
      />

      <TextField
        label="Seu Setor"
        name="setor"
        value={requisition.setor}
        onChange={handleRequisitionChange}
        required
        autoComplete='off'
      />

      <TextField
        label="Para que esses materiais serão usados?"
        name="motive"
        value={requisition.motive}
        onChange={handleRequisitionChange}
        required
        autoComplete='off'
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
  )
}
