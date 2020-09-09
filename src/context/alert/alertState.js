import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  // let id;
  const setAlert = (msg, type, timeout = 4000) => {
    const id = uuid();
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  // const removeAlert = () => dispatch({ type: REMOVE_ALERT, payload: id });
  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
        // removeAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;