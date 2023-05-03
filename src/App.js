import "./App.css";
import React, { useState } from "react";
import { Alert, Input } from "antd";
import { Switch } from "antd";
import { Col, Row } from "antd";
import data from "../src/db.json";
import { Button, notification, Space } from "antd";
// import { useNavigate } from "react-router-dom";
import { loginpage } from "./loginpage";
// import { Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

function App() {
  console.log(data);
  // const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };
  // const history = useHistory();
  const SubmitForm = () => {
    console.log(email, "email");
    console.log(password, "password");
    let check = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email) {
        if (data[i].password === password) {
          check = true;
          openNotificationWithIcon("success");
          // navigattoPage();
          // <Redirect to="./loginpage" />
          // history.push('./loginpage');
          // <NavLink to="/page" />
        }
      }
    }
    if (!check) openNotificationWithIcon2("error");
  };
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Notification Title",
      description: "Successful login",
    });
  };
  const openNotificationWithIcon2 = (type) => {
    api[type]({
      message: "Notification Title",
      description: "No Login successful",
    });
  };
  // const navigattoPage = () => {
  //   navigate("./loginpage");
  // };
  return (
    <>
      {contextHolder}
      <div className="main_div">
        <Row className="login_div">
          <Col className="left_div" xs={20} sm={15} md={15} lg={10} xl={12}>
            <div className="left_inner_div">
              <img src="logo.png" className="logo_img" />
              <p className="welcome">Welcome Back</p>
            </div>
            <div>
              <p className="email">Email Address</p>
              <Input.Password className="email_input" onChange={handleChange} />
            </div>
            <div className="pass_div">
              <p className="email">Enter Password</p>
              <Input.Password
                className="email_input"
                onChange={handleChangePass}
              />
            </div>
            <div className="rem_div">
              <div className="switch_div">
                <Switch defaultChecked className="switch_sec" />
                <p className="remember">Remember Me</p>
              </div>
            </div>
            <div className="login_btn">
              <button className="btn" onClick={SubmitForm}>
                <img src="lock.png" className="lock_img" />
                Log In
              </button>
            </div>
            <div className="left_last_div">
              <p className="last">
                © 2023, BlackfishID SL, All Rights Reserved
              </p>
            </div>
          </Col>

          <Col className="right_div" xs={2} sm={4} md={18} lg={10} xl={12}>
            <div className="right_inner_div">
              <img src="rightLogo.png" className="right_logo" />
              <p className="right_para">
                Empowering creators to share confidently
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* <Routes>
        <Route path="/loginpage" element={<loginpage />} />
      </Routes> */}
    </>
  );
}

export default App;
