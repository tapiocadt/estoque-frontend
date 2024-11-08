import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRequisitions } from '../../../../API/requisitionAPI';
import RequisitionCard from '../components/RequisitionCard';
import styles from './listStyle.module.css'

export default function RequisitionList() {
  const { listName } = useParams();

  const [list, setList] = useState();
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const getall = async () => {
      const allReq = await getRequisitions();
      if (listName === "toApprove") {
        setList(allReq.filter((req) => req.status === 'Pendente'));
      }
      if (listName === "approved") {
        setList(allReq.filter((req) => req.status === 'Aprovado'));
      }
      if (listName === "delivered") {
        setList(allReq.filter((req) => req.status === 'Retirado'));
      }
      if (listName === "cancelled") {
        setList(allReq.filter((req) => req.status === 'Cancelado'));
      }
    }
    getall();
  }, [refresh])

  return (
    <div className={styles.list}>
      {list?.map((req) => (
        <div key={req.id}>
          <RequisitionCard requisition={req} setRefresh={setRefresh} />
        </div>
      ))}
    </div>
  )
}
