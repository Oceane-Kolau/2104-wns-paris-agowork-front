import React from "react";
import { Route, Routes } from "react-router-dom";
import UserCreation from "../pages/admin/user/userCreation";
import Dashboard from "../pages/public/dashboard";
import Login from "../pages/public/login";
import ModuleList from "../components/course/students/moduleList";
import Ressources from "../pages/public/ressources";
import CampusCreation from "../pages/admin/campus/campusCreation";
import PrivateRoute from "./privateRoute";
import AdminRoute from "./adminRoute";
import GeneralForm from "../pages/admin/administrationGeneral";
import MoodCreation from "../pages/admin/mood/moodCreation";
import UserUpdate from "../pages/admin/user/userUpdate";
import AdminRessource from "../pages/admin/adminRessource";

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
              <GeneralForm />
            </AdminRoute>
          }
        />
        <Route
          path="/general/campus"
          element={
            <AdminRoute>
              <CampusCreation />
            </AdminRoute>
          }
        />
        <Route
          path="/general/mood"
          element={
            <AdminRoute>
              <MoodCreation />
            </AdminRoute>
          }
        />
        <Route
          path="/general/ressource"
          element={
            <AdminRoute>
              <AdminRessource />
            </AdminRoute>
          }
        />
        <Route
          path="/general/utilisateur"
          element={
            <AdminRoute>
              <UserCreation />
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
