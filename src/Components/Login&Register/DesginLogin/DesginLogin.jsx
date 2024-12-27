import React, { useEffect, useState } from "react";
import Css from "./DesginLogin.module.css";
import { Outlet } from "react-router-dom";
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io";
const DesginLogin = () => {
  const [Closed, setClosed] = useState(false);
  const [GetName, SetName] = useState("");
  useEffect(() => {
    const Display = () => {
      if (localStorage.getItem("username") !== null) {
        SetName(JSON.parse(localStorage.getItem("username")));
        setClosed(true);
      } else {
        setClosed(false);
      }
    };
    Display();
  }, []);
  const Remove = () => {
    localStorage.removeItem("username");
    setClosed(false);
  };
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.bg}></div>
        <div className={Css.container}>
          <div className={`${Css.profile} ${Closed ? Css.top : ""}`}>
            <div
              className={`${Css.bar}`}
            >
              <p>
                <IoIosArrowDown />
              </p>
            </div>
            <div className={Css.info}>
              <div className={Css.text}>
                <h2 >
                  Welcome {GetName}
                </h2>
                <button onClick={Remove}>
                  <IoIosLogOut />
                </button>
              </div>
            </div>
          </div>
          <div className={Css.cards}>
            <div className={Css.card}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesginLogin;
