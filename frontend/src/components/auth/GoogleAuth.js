import React from "react";
import actions from "../../services/index";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (props) => {
  console.log(props);
  const onResponse = (response) => {
    // console.log(response);
    const user = {
      ...response.profileObj,
      password: response.profileObj?.googleId,
    };
    actions
      .signUp(user)
      .then((user) => {
        props.setUser({ ...user.data });
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
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Signup
        </button>
      )}
      clientId={process.env.REACT_APP_GOOGLEID}
      buttonText="Signup"
      onSuccess={onResponse}
      onFailure={onResponse}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default responseGoogle;
