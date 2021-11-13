import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  console.log(domain, clientId);

  const history = useNavigate();

  const onRedirectCallback = (appState) => {
    console.log(appState);
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin} onRedirectCallback={onRedirectCallback} audience={process.env.REACT_APP_AUTH0_AUDIENCE}>
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
