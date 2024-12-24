import React from "react";
import "./CssFile/JainSupplierDetail.css";

const JainSupplierDetail = () => (
  <div className="project-detail-container">
    <h1 className="project-title">Jain Supplier</h1>
    <p className="project-description">
      Jain Supplier is a fast and efficient delivery app for food orders,
      designed to streamline the food delivery process from order placement to
      delivery. The app integrates innovative functionalities to enhance the
      experience for vendors, delivery partners, and customers.
    </p>
    <h2>Key Features</h2>
    <ul>
      <li>
        <b>Order Management:</b> All orders are displayed in real-time, allowing
        vendors to view, manage, and edit orders before delivery.
      </li>
      <li>
        <b>Bluetooth Printing:</b> Integrated Bluetooth functionality enables
        delivery partners to print customer bills directly at the time of
        delivery.
      </li>
      <li>
        <b>Location Tracking:</b>
        <ul>
          <li>
            Real-time location tracking allows customers to track their delivery
            partner's location.
          </li>
          <li>
            Delivery partners can optimize their routes with location-based
            guidance.
          </li>
        </ul>
      </li>
      <li>
        <b>Quick Delivery:</b> The app prioritizes speedy order fulfillment to
        ensure customer satisfaction.
      </li>
      <li>
        <b>Notifications:</b> Firebase is used to send real-time notifications
        to users about order updates and delivery statuses.
      </li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
      <li>
        <b>React Native:</b> for cross-platform development.
      </li>
      <li>
        <b>Bluetooth Integration:</b> for seamless printing using third-party
        libraries like `react-native-bluetooth-printer`.
      </li>
      <li>
        <b>Geolocation Services:</b> for tracking and route optimization using
        libraries like `react-native-geolocation-service`.
      </li>
      <li>
        <b>Firebase Notifications:</b> for sending push notifications to users.
      </li>
      <li>
        <b>Custom APIs:</b> to handle order data, delivery status, and vendor
        management.
      </li>
    </ul>
    <p>
      Jain Supplier demonstrates expertise in integrating hardware
      functionality, geolocation services, and managing real-time data for an
      enhanced delivery experience.
    </p>
  </div>
);

export default JainSupplierDetail;
