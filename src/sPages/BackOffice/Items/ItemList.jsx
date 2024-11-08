import React, { useEffect, useState } from 'react'
import { getItens } from '../../../API/itemAPI';
import ItemCard from './components/ItemCard';
import styles from './listStyle.module.css';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export default function ItemList() {

    const [itens, setItens] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const allItens = async () => {
            try {
                const allItem = await getItens();
                setItens(allItem);
            } finally {
                setLoading(false);
            }
        };
        allItens();
    }, []);

    if (loading) {
        return <p> Loading </p>
    }

    return (
        <div className={styles.list}>
            {itens?.map((item) => (
                <div key={item.id}>
                    <ItemCard item={item} />
                </div>
            ))}
            <Link to={"/addItem"}>
                <Fab className={styles.addButton} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Link>
        </div>
    )
}
