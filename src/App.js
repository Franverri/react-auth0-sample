import { Routes, Route } from "react-router-dom";
import AuthenticationButton from "./components/authentication-button";
import { useAuth0 } from '@auth0/auth0-react';

import Profile from "./views/profile";

function App() {
  const { isLoading } = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      React Auth0 Sample
      <AuthenticationButton />
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
