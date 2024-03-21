import React from "react";
import { MYAXIOS } from "../Services/Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Fun = () => {
  const handleDemoRequest = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.info("Please log in to access resources");
      return;
    }

    try {
      const response = await MYAXIOS.get("/api/demo", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (response.status === 200) {
        alert(response.data);
      } else {
        alert("Demo request failed: " + response.data.message);
      }
    } catch (error) {
      alert("Error accessing demo: " + error.message);
    }
  };

  const handleAdminOnlyRequest = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.info("Please log in to access resources");
      return;
    }

    try {
      const response = await MYAXIOS.get("/api/admin_only", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (response.status === 200) {
        alert(response.data);
      } else {
        toast.error("Admin_only failed - ", response.data.message);
      }
    } catch (error) {
      alert("Error accessing admin_only: " + error.message);
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.info("You are already logged out");
      return;
    }

    try {
      const response = await MYAXIOS.get("/api/logout", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        localStorage.removeItem("token");
      } else {
        toast.error("Logout failed: " + response.data.message);
      }
    } catch (error) {
      // Handle other errors
      toast.error("Error during logout: " + error.message);
    }
  };

  return (
    <>
      <button className="btn btn-lg btn-primary" onClick={handleDemoRequest}>
        demo
      </button>{" "}
      <br />
      <button
        className="btn btn-lg btn-success"
        onClick={handleAdminOnlyRequest}
      >
        Admin only
      </button>{" "}
      <br />
      <button className="btn btn-lg btn-info" onClick={handleLogout}>
        logout
      </button>
    </>
  );
};

export default Fun;
