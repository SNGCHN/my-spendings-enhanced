import React from "react";
import GlobalStyle from "./GlobalStyle";
import Router from "./router/Router";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router />
    </AuthProvider>
  );
};

export default App;
