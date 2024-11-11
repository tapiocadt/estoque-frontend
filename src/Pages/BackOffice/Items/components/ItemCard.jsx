import React, { useEffect, useState } from 'react';
import styles from './cardStyle.module.css';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import Battery1BarIcon from '@mui/icons-material/Battery1Bar';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';

export default function ItemCard({ item }) {

    const [level, setLevel] = useState(3);

    useEffect(() => {
        const halfLevel = item.totalQuantity / 2;

        if (item.freeQuantity === 0) {
            // console.log("BLACK");
            setLevel(0);
            return;
        }

        if (item.freeQuantity <= item.minQuantity) {
            // console.log("RED");
            setLevel(1);
            return;
        }

        if (item.freeQuantity <= halfLevel) {
            // console.log("YELLOW");
            setLevel(2);
            return;
        }

    }, []);

    return (
        <div className={styles.card}>

            {/* icones bateria */}
            <>
                {level === 0 && (
                    <Battery0BarIcon />
                )}

                {level === 1 && (
                    <Battery1BarIcon />
                )}

                {level === 2 && (
                    <Battery4BarIcon />
                )}

                {level === 3 && (
                    <BatteryFullIcon />
                )}
            </>

            <h2> {item.name} </h2>

            <p> Quantidade </p>
            {/* <p> Disponível / Total </p> */}

            <p> {item.freeQuantity} / {item.totalQuantity} </p>
            {/* <p>Quantidade Mínima: {item.minQuantity}</p> */}
        </div>
    )
}
