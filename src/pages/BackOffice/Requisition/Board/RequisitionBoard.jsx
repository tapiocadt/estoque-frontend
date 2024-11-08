import React, { useEffect, useState } from 'react'
import { getRequisitions } from '../../../../API/requisitionAPI';
import RequisitionCard from '../components/RequisitionCard';
import styles from './boardStyle.module.css';
import { Link } from 'react-router-dom';

export default function RequisitionBoard() {
    // const [requisitions, setRequisitions] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [loading, setLoading] = useState(true);

    const [toApprove, setToApprove] = useState([]);
    const [approved, setApproved] = useState([]);
    const [delivered, setDelivered] = useState([]);
    const [cancelled, setCancelled] = useState([]);

    useEffect(() => {
        const allRequisitions = async () => {
            try {
                const allReq = await getRequisitions();
                // setRequisitions(allReq);
                setToApprove(allReq.filter((req) => req.status === 'Pendente'));
                setApproved(allReq.filter((req) => req.status === 'Aprovado'));
                setDelivered(allReq.filter((req) => req.status === 'Retirado'));
                setCancelled(allReq.filter((req) => req.status === 'Cancelado'));
            } finally {
                setLoading(false);
            }
        };
        allRequisitions();
    }, [refresh]);

    if (loading) {
        return <p> Loading </p>
    }

    return (
        <>
            <div>
                <h2> Aguardando aprovação: </h2>
                <Link to={`/list/toApprove`}> Ver todos </Link>
            </div>
            <div className={styles.list}>
                {toApprove?.slice(0, 2).map((req) => (
                    <div key={req.id}>
                        <RequisitionCard requisition={req} setRefresh={setRefresh} />
                    </div>
                ))}
            </div>

            <div>
                <h2> Aguardando retirada: </h2>
                <Link to={`/list/approved`}> Ver todos </Link>
            </div>
            <div className={styles.list}>
                {approved?.slice(0, 2).map((req) => (
                    <div key={req.id}>
                        <RequisitionCard requisition={req} setRefresh={setRefresh} />
                    </div>
                ))}
            </div>

            <div>
                <h2> Retirados: </h2>
                <Link to={`/list/delivered`}> Ver todos </Link>
            </div>
            <div className={styles.list}>
                {delivered?.slice(0, 2).map((req) => (
                    <div key={req.id}>
                        <RequisitionCard requisition={req} setRefresh={setRefresh} />
                    </div>
                ))}
            </div>

            <div>
                <h2> Cancelado: </h2>
                <Link to={`/list/cancelled`}> Ver todos </Link>
            </div>
            <div className={styles.list}>
                {cancelled?.slice(0, 2).map((req) => (
                    <div key={req.id}>
                        <RequisitionCard requisition={req} setRefresh={setRefresh} />
                    </div>
                ))}
            </div>
        </>
    )
}
