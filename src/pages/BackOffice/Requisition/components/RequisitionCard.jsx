import React, { useEffect } from 'react'
import styles from './CardStyle.module.css'
import { Fab } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { approveRequisition, deliverRequisition } from '../../../../API/requisitionAPI';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CloseIcon from '@mui/icons-material/Close';

export default function RequisitionCard({ requisition }) {

  // useEffect(() => {
  //   requisition.requisitionItens.map((item) => {
  //     console.log(item);
  //     console.log(item.name);
  //   })
  // }, [])

  const convertDate = (date) => {
    return new Date(date).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const requisitionApproval = async (id) => {
    const retorno = await approveRequisition(id);
    console.log(retorno);
  }

  const requisitionDenial = async (id) => {
    const retorno = await approveRequisition(id);
    console.log(retorno);
  }

  const requisitionDeliver = async (id) => {
    const retorno = await deliverRequisition(id);
    console.log(retorno);
  }

  return (
    <div className={styles.card}>

      {requisition.status === 'Pendente' && (
        <>
          <div className={styles.approval}>
            <Fab color="success" onClick={() => requisitionApproval(requisition.id)}>
              <DoneIcon />
            </Fab>
          </div>

          <div className={styles.denial}>
            <Fab color="error" onClick={() => requisitionApproval(requisition.id)}>
              <CloseIcon />
            </Fab>
          </div>
        </>
      )}

      {requisition.status === 'Aprovado' && (
        <div className={styles.approval}>
          <Fab color="success" onClick={() => requisitionDeliver(requisition.id)}>
            <DoneAllIcon />
          </Fab>
        </div>
      )}

      <h2> {requisition.status} </h2>

      <p> {convertDate(requisition.schedule)} </p>

      <div className={styles.grid}>
        <div>
          <p> {requisition.name} </p>
          <p> {requisition.email} </p>
          <p> {requisition.setor} </p>
        </div>

        <div>
          <p> {requisition.motive} </p>
        </div>

        <div className={styles.itensList}>
          {/* <p>Itens da requisição:</p> */}
          <div>
            {requisition.requisitionItens.map((item) => {
              return (
                <div key={item.id} className={styles.item}>
                  {/* <p>{item.id}</p> */}
                  <p> {item.name} {item.quantity}x </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
