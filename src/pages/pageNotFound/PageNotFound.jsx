import React from "react";
import styles from "./PageNotFound.module.css";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Div404}>
      <img src="/chatBuddy/page404.png" alt="" />
      {/* <Link to="/chatBuddy"> */}
      <a href="http://localhost:5173/chatBuddy">Get back Home</a>
      {/* </Link> */}
    </div>
  );
};

export default PageNotFound;
