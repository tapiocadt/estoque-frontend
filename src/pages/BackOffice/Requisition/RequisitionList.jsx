import React, { useEffect, useState } from 'react'
import { getRequisitions } from '../../../API/requisitionAPI';
import RequisitionCard from './components/RequisitionCard';
import styles from './listStyle.module.css';

export default function RequisitionList() {
    // const [requisitions, setRequisitions] = useState([]);
    const [loading, setLoading] = useState(true);

    const [toApprove, setToApprove] = useState([]);
    const [toDeliver, setToDeliver] = useState([]);
    const [delivered, setDelivered] = useState([]);

    useEffect(() => {
        const allRequisitions = async () => {
            try {
                const allReq = await getRequisitions();
                // setRequisitions(allReq);
                setToApprove(allReq.filter((req) => req.status === 'Pendente'));
                setToDeliver(allReq.filter((req) => req.status === 'Aprovado'));
                setDelivered(allReq.filter((req) => req.status === 'Entregue'));
            } finally {
                setLoading(false);
            }
        };

        allRequisitions();
    }, []);


    if (loading) {
        return <p> Loading </p>
    }

    return (
        <>
            <h2> Aguardando aprovação: </h2>
            <div className={styles.list}>
                {toApprove?.map((req) => (
                    <div key={req.id}>
                        <RequisitionCard requisition={req} />
                    </div>
                ))}
            </div>

            <h2> Aguardando retirada: </h2>
            <div className={styles.list}>
                {toDeliver?.map((req) => (
                    <div key={req.id}>
                        <RequisitionCard requisition={req} />
                    </div>
                ))}
            </div>

            <h2> Retirados: </h2>
            <div className={styles.list}>
                {delivered?.map((req) => (
                    <div key={req.id}>
                        <RequisitionCard requisition={req} />
                    </div>
                ))}
            </div>
        </>
    )
}
