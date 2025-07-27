import { Routes, Route } from "react-router-dom";

import { PublicLayout } from "@/layouts/public-layouts";
import AuthenticationLayout from "@/layouts/auth-layout";
import ProtectRoutes from "@/layouts/protected-routes";
import { MainLayout } from "./layouts/main-layout";

import HomePage from "@/routes/home";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";


const App = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
      </Route>

       {/* authentication layouts */}
      <Route element={<AuthenticationLayout />}>
        <Route path="/signin/*" element={<SignInPage />} />
        <Route path="/signup/*" element={<SignUpPage />} />

      </Route>

            {/* protected routes */}
      <Route element={
        <ProtectRoutes>
          <MainLayout />
        </ProtectRoutes>}>

      </Route>

    </Routes>
    
  )
}

export default App