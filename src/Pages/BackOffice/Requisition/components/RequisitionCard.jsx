import React from 'react'
import styles from './cardStyles.module.css'
import { Fab } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { approveRequisition, cancelRequisition, deliverRequisition, disapproveRequisition } from '../../../../API/requisitionAPI';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CloseIcon from '@mui/icons-material/Close';
import BlockIcon from '@mui/icons-material/Block';
import { useAlert } from '../../../../Context/AlertContext';

export default function RequisitionCard({ requisition, setRefresh }) {

  const { showAlert } = useAlert();

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
    try {
      const retorno = await approveRequisition(id);
      // console.log(retorno);
      setRefresh((refresh) => refresh + 1);
      showAlert(retorno, "success");
    } catch (error) {
      showAlert(error, "error");
    }
  }

  const requisitionDenial = async (id) => {
    try {
      const retorno = await disapproveRequisition(id);
      // console.log(retorno);
      setRefresh((refresh) => refresh + 1);
      showAlert(retorno, "success");
    } catch (error) {
      showAlert(error, "error");
    }
  }

  const requisitionDeliver = async (id) => {
    try {
      const retorno = await deliverRequisition(id);
      // console.log(retorno);
      setRefresh((refresh) => refresh + 1);
      showAlert(retorno, "success");
    } catch (error) {
      showAlert(error, "error");
    }
  }

  const requisitionCancel = async (id) => {
    try {
      const retorno = await cancelRequisition(id);
      // console.log(retorno);
      setRefresh((refresh) => refresh + 1);
      showAlert(retorno, "success");
    } catch (error) {
      showAlert(error, "error");
    }
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
            <Fab color="error" onClick={() => requisitionDenial(requisition.id)}>
              <CloseIcon />
            </Fab>
          </div>
        </>
      )}

      {requisition.status === 'Aprovado' && (
        <>
          <div className={styles.approval}>
            <Fab color="success" onClick={() => requisitionDeliver(requisition.id)}>
              <DoneAllIcon />
            </Fab>
          </div>

          <div className={styles.denial}>
            <Fab color="error" onClick={() => requisitionCancel(requisition.id)}>
              <BlockIcon />
            </Fab>
          </div>
        </>
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
