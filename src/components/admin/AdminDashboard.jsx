import React from "react";
import { Footer } from "../Footer";
import { AdminNavbar } from "./adminNav/AdminNav";

export const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <div>
        <h2>Admin Dashboard</h2>
      </div>
      <div></div>

      <Footer />
    </div>
  );
};
