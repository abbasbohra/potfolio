import React from "react";
import "./CssFile/HotelBookingAppDetail.css";

const HotelBookingAppDetail = () => (
  <div className="project-detail-container">
    <h1 className="project-title">Hotel Booking App</h1>
    <p className="project-description">
      The Hotel Booking App is a robust and feature-rich platform designed to
      simplify the process of booking hotel rooms for two types of users:{" "}
      <b>Agents</b> and <b>Reservation Users</b>. The app offers a seamless
      experience with tailored functionalities based on user roles.
    </p>
    <h2>Key Features</h2>
    <ul>
      <li>
        <b>User Roles:</b>
        <ul>
          <li>
            <b>Agent:</b> Can search hotels, add rooms to the booking list, and
            complete the booking after payment through the integrated payment
            gateway.
          </li>
          <li>
            <b>Reservation User:</b> Can search hotels, add rooms, and book
            directly without the need for payment.
          </li>
        </ul>
      </li>
      <li>
        <b>Search Hotel:</b> A powerful search functionality allows users to
        find hotels based on location, price, ratings, and amenities.
      </li>
      <li>
        <b>Add Room:</b> Users can add multiple rooms to their booking list,
        selecting options such as room type and number of guests.
      </li>
      <li>
        <b>Checkout and Payment:</b>
        <ul>
          <li>
            Integrated <b>WebView</b> for payment processing ensures a secure
            and smooth transaction experience for agents.
          </li>
          <li>
            Flexible checkout options for reservation users without payment.
          </li>
        </ul>
      </li>
      <li>
        <b>Filters for Booking:</b> Advanced filters enable users to refine
        searches by criteria like availability, price range, and guest capacity.
      </li>
      <li>
        <b>Notifications:</b> Real-time notifications keep users updated about
        booking confirmations, payment status, and special offers.
      </li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
      <li>
        <b>React Native:</b> for cross-platform mobile development.
      </li>
      <li>
        <b>Redux:</b> for state management to handle complex user interactions.
      </li>
      <li>
        <b>Firebase Notifications:</b> for sending push notifications to users.
      </li>
      <li>
        <b>Razorpay WebView:</b> for secure and efficient payment processing.
      </li>
      <li>
        <b>Custom APIs:</b> for backend services to handle hotel data, room
        availability, booking logic, and user management.
      </li>
    </ul>
    <p>
      This app demonstrates expertise in designing and implementing multi-user
      systems, secure payment integrations, and intuitive user interfaces
      tailored for diverse booking needs.
    </p>
  </div>
);

export default HotelBookingAppDetail;
