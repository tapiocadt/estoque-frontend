import React, { useEffect, useState } from 'react'
import { getItens } from '../../../API/itemAPI';
import ItemCard from './components/ItemCard';
import styles from './listStyle.module.css'

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
        </div>
    )
}
