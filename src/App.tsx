import { Route, Routes } from "react-router";
import Home from "./pages/home";
import SignIn from "./pages/(auth)/signin";
import Dashboard from "./pages/dashboard/dashboard";
import AuthLayout from "./pages/layout/authLayout";
import { useEffect } from "react";
import SKillDetail from "./pages/dashboard/SKillDetail";
import SignupForm from "./pages/(auth)/signup";

function App() {
  useEffect(() => {
    document.title = "20 Hours of React";
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/:id" element={<SKillDetail />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </>
  );
}

export default App;
