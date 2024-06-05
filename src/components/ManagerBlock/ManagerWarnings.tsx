import React from "react";
import cl from "./Manager.module.scss";
import ai from "../../db/ai.json";
const ManagerWarnings = () => {
  return (
    <div className={cl.manager}>
      {ai.map(({ text }, index) => (
        <div ai="alert alert-ai">{ text}</div>
      ))}
    </div>
  );
};

export default ManagerWarnings;
