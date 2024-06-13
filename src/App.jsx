import React from "react";
import GlobalStyle from "./GlobalStyle";
import Router from "./router/Router";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStyle />
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
