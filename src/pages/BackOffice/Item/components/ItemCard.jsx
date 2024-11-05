import React, { useEffect, useState } from 'react';
import styles from './cardStyle.module.css';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import Battery1BarIcon from '@mui/icons-material/Battery1Bar';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';

export default function ItemCard({ item }) {

    const [level, setLevel] = useState(BatteryFullIcon);

    useEffect(() => {
        const halfLevel = item.totalQuantity / 2;

        if (item.freeQuantity === 0) {
            // warning = black
            console.log("BLACK");
            setLevel(Battery0BarIcon);
            return;
        }

        if (item.freeQuantity <= item.minQuantity) {
            // warning = red
            console.log("RED");
            setLevel(Battery1BarIcon);
            return;
        }

        if (item.freeQuantity <= halfLevel) {
            // warning = yellow
            console.log("YELLOW");
            setLevel(Battery4BarIcon);
            return;
        }

    }, [])

    return (
        <div className={styles.card}>
            <h2>{item.name}</h2>
            <p> Quantidade </p>
            <p> Disponível / Total </p>
            <p> {item.freeQuantity} / {item.totalQuantity} </p>
            {/* <p>Quantidade Mínima: {item.minQuantity}</p> */}
        </div>
    )
}
