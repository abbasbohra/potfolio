import React from "react";
import "./CssFile/JainSupplierDetail.css";

const RoyalMotorsDetail = () => (
  <div className="project-detail-container">
    <h1 className="project-title">Royal Motors</h1>
    <p className="project-description">
      Royal Motors is an application specifically designed for staff to
      efficiently manage their sales and maintain detailed reports of login and
      logout activities. The app streamlines day-to-day operations for staff
      members while providing a user-friendly interface for tracking and
      managing data.
    </p>
    <h2>Key Features</h2>
    <ul>
      <li>
        <b>Sales Management:</b> Staff can record, track, and manage their daily
        sales efficiently.
      </li>
      <li>
        <b>Login and Logout Reports:</b> The app maintains a detailed log of
        staff login and logout times to ensure accurate reporting and
        accountability.
      </li>
      <li>
        <b>Data Insights:</b> Provides staff with insights into their sales
        performance over time.
      </li>
      <li>
        <b>Notifications:</b> Real-time alerts for important updates and
        reminders.
      </li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
      <li>
        <b>React Native:</b> for cross-platform app development.
      </li>
      <li>
        <b>Firebase Authentication:</b> to manage secure staff login/logout.
      </li>
      <li>
        <b>Firebase Database:</b> to store and manage sales and activity
        reports.
      </li>
      <li>
        <b>Push Notifications:</b> for real-time alerts and updates.
      </li>
    </ul>
    <p>
      Toyo Motors showcases expertise in creating applications tailored for
      operational efficiency, focusing on real-time data management and user
      accountability for enhanced productivity.
    </p>
  </div>
);

export default RoyalMotorsDetail;
