import React, { createContext, useContext, useState } from 'react';
import { Alert } from '@mui/material';
import styles from './alertStyle.module.css'

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");

  const showAlert = (msg, severityLevel) => {
    setMessage(msg);
    setSeverity(severityLevel);
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert, severity, message, showAlert }}>
    {alert && (
      <Alert className={styles.alert} variant="filled" severity={severity}>
        {message}
      </Alert>
    )}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
