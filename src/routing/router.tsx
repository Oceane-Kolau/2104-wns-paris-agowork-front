import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/public/dashboard";
import Login from "../pages/public/login";
import ModuleList from "../components/course/students/moduleList";
import Ressources from "../pages/public/ressources";
import AllCampus from "../pages/admin/campus/allCampus";
import PrivateRoute from "./privateRoute";
import AdminRoute from "./adminRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AllMoods from "../pages/admin/mood/allMoods";
import UserUpdate from "../pages/admin/user/userUpdate";
import AllRessources from "../pages/admin/ressource/allRessources";
import AllUsers from "../pages/admin/user/allUsers";

const Router = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/connexion" element={<Login />} />
        <Route
          path="/ressources"
          element={
            <PrivateRoute>
              <Ressources />
            </PrivateRoute>
          }
        />
        <Route
          path="/cours"
          element={
            <PrivateRoute>
              <ModuleList />
            </PrivateRoute>
          }
        />
        <Route
          path="/general"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/general/campus"
          element={
            <AdminRoute>
              <AllCampus />
            </AdminRoute>
          }
        />
        <Route
          path="/general/mood"
          element={
            <AdminRoute>
              <AllMoods />
            </AdminRoute>
          }
        />
        <Route
          path="/general/ressource"
          element={
            <AdminRoute>
              <AllRessources />
            </AdminRoute>
          }
        />
        <Route
          path="/general/utilisateur"
          element={
            <AdminRoute>
              <AllUsers />
            </AdminRoute>
          }
        />
        <Route
          path="/general/utilisateur/:id"
          element={
            <PrivateRoute>
              <UserUpdate />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
