import React from "react";
import { MYAXIOS } from "../Services/Helper";

const Pricing = () => {
  const handleDemoRequest = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in to access resources");
      return;
    }

    try {
      const response = await MYAXIOS.get("/api/demo", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.error("Error accessing demo:", error);
      alert("error: " + error.message);
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are already logged out");
      return;
    }

    try {
      const response = await MYAXIOS.get("/api/logout", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (response.status === 200) {
        // Check the response message for additional information
        if (response.data.message === "Logout successfully") {
          console.log("Msg : = Logout successful");
          localStorage.removeItem("token");
        } else if (response.data.message === "User already logged out") {
          console.log("Msg : = User already logged out");
        } else if (response.data.message === "An error occurred during logout") {
          console.log("yaha par error iye he");
        } else {
          console.log("Msg : = Unexpected response: " + response.data.message);
        }
      } else {
        // Handle other status codes or messages
        console.log("Msg : = Logout failed: " + response.data.message);
      }
    } catch (error) {
      // Handle other errors
      console.log("Msg : = Error during logout: " + error.message);
    }
  };

  const handleAdminOnlyRequest = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in to access resources");
      return;
    }

    try {
      const response = await MYAXIOS.get("/api/admin_only", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log("error: " + error);
    }
  };

  return (
    <>
      <button onClick={handleDemoRequest}>demo</button>
      <br />
      <button onClick={handleAdminOnlyRequest}>Admin only</button> <br />
      <button onClick={handleLogout}>logout</button>
    </>
  );
};

export default Pricing;

// return (
//   <div className="container py-3">
//     <main>
//       <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
//         <h1 className="display-4 fw-normal">Membership Plans</h1>
//         <p className="fs-5 text-muted">
//           Choose the plan that suits your learning journey. Explore the features and get started!
//         </p>
//       </div>

//       <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
//         <div className="col">
//           <div className="card mb-4 rounded-3 shadow-sm">
//             <div className="card-header py-3">
//               <h4 className="my-0 fw-normal">Free</h4>
//             </div>
//             <div className="card-body">
//               <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
//               <ul className="list-unstyled mt-3 mb-4">
//                 <li>Basic Demo</li>
//                 <li>No exams</li>
//                 <li>No Certificate</li>
//               </ul>
//               <button type="button" className="w-100 btn btn-outline-dark">Sign up for free</button>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card mb-4 rounded-3 shadow-sm">
//             <div className="card-header py-3">
//               <h4 className="my-0 fw-normal">Pro</h4>
//             </div>
//             <div className="card-body">
//               <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
//               <ul className="list-unstyled mt-3 mb-4">
//                 <li>Complete course</li>
//                 <li>Priority email support</li>
//                 <li>Test and Exam access</li>
//               </ul>
//               <button type="button" className="w-100 btn btn-secondary">Get started</button>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="card mb-4 rounded-3 shadow-sm border-secondary">
//             <div className="card-header py-3 text-white bg-secondary border-secondary">
//               <h4 className="my-0 fw-normal">Expert</h4>
//             </div>
//             <div className="card-body">
//               <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
//               <ul className="list-unstyled mt-3 mb-4">
//                 <li>All resources</li>
//                 <li>Phone and email support</li>
//                 <li>Certificate with exams</li>
//               </ul>
//               <button type="button" className="w-100 btn btn-secondary">Contact us</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <h2 className="display-6 text-center mb-4">Compare plans</h2>

//       <div className="table-responsive">
//         <table className="table text-center">
//           <thead>
//             <tr>
//               <th style={{ width: '34%' }}></th>
//               <th style={{ width: '22%' }}>Free</th>
//               <th style={{ width: '22%' }}>Pro</th>
//               <th style={{ width: '22%' }}>Expert</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th scope="row" className="text-start">Demo</th>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
//             </tr>
//             <tr>
//               <th scope="row" className="text-start">Priority Support</th>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#x"/></svg></td>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
//             </tr>
//             <tr>
//               <th scope="row" className="text-start">Test and Exam Access</th>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#x"/></svg></td>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
//             </tr>
//             <tr>
//               <th scope="row" className="text-start">All Resources</th>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#x"/></svg></td>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#x"/></svg></td>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
//             </tr>
//             <tr>
//               <th scope="row" className="text-start">Certificate with Exams</th>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#x"/></svg></td>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#x"/></svg></td>
//               <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
//             </tr>
//             {/* Add more rows as needed */}
//           </tbody>
//         </table>
//       </div>
//     </main>
//   </div>
// );
// };

// export default Pricing;
