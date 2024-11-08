import React, { useEffect, useState } from 'react'
import { TextField, MenuItem, IconButton } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import { RemoveCircle } from '@mui/icons-material';
import { getItens } from '../../../../API/itemAPI';

export default function ItemSelect({ items, setItems }) {

    const [availableItems, setAvailableItems] = useState([]);

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const newItems = [...items];
        if (name === "name") {
            const selectedItem = availableItems.find((item) => item.name === value);
            newItems[index] = {
                ...newItems[index],
                id: selectedItem ? selectedItem.id : "",
                name: value
            };
            console.log(newItems);
        } else if (name === "quantity") {
            newItems[index].quantity = value;
        }
        setItems(newItems);
    };

    useEffect(() => {
        const getting = async () => {
            const itensGet = await getItens();
            setAvailableItems(itensGet);
        }
        getting();
    }, [])

    if (availableItems.length === 0) {
        return <p>Loading</p>
    }

    return (
        <>
            {items.map((item, index) => (
                <Grid2 container spacing={2} alignItems="center" key={index}>
                    <Grid2 size={5}>
                        <TextField
                            select
                            label="Item"
                            name="name"
                            value={item.name || ""}
                            onChange={(e) => handleItemChange(index, e)}
                            required
                            fullWidth
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
                        >
                            {availableItems?.map((option) => (
                                <MenuItem key={option.id} value={option.name}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid2>

                    <Grid2 size={3}>
                        <TextField
                            label="Quantidade"
                            name="quantity"
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(index, e)}
                            required
                            fullWidth
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
                    </Grid2>

                    <Grid2 size={2}>
                        <IconButton onClick={() => removeItem(index)} disabled={items.length === 1}>
                            <RemoveCircle color="error" />
                        </IconButton>
                    </Grid2>
                </Grid2>
            ))}
        </>
    )
}
