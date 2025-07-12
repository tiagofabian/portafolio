import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import "../assets/styles/layout.css";

const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/not-found");
  }, [history]);

  return (
    <div className='layout-container'>
      NotFound
    </div>
  )
}

export default NotFound;
