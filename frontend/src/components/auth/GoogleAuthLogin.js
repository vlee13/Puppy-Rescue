import React from "react";
import actions from "../../services/index";
import { GoogleLogin } from "react-google-login";
import "../CSS/NavigationBar.css";

const responseGoogle = (props) => {
  console.log(props);
  const onResponse = (response) => {
    console.log(response);
    const user = {
      ...response.profileObj,
      password: response.profileObj?.googleId,
    };
    actions
      .logIn(user)
      .then((user) => {
        console.log(user);
        props.setUser(user.data);
      })
      .catch((response) => console.error(response));
  };

  return (
    <GoogleLogin
      render={(renderProps) => (
        <button
          // style={{
          //   width: "10vw",
          //   height: "10vh",
          //   backgroundColor: "green",
          //   borderRadius: "50%",
          // }}
          className="navBarButton"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
<<<<<<< HEAD
        >
          Log in
=======
        > 
          Login
>>>>>>> e42e2a358ed3f6f214645ebb1b74314d7effcf7c
        </button>
      )}
      clientId={process.env.REACT_APP_GOOGLEID}
      buttonText="Login"
      onSuccess={onResponse}
      onFailure={onResponse}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default responseGoogle;
