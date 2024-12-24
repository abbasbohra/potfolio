import React from "react";
import "./CssFile/EcommerceAppDetail.css";

const ECommerceAppDetail = () => (
  <div className="project-detail-container">
    <h1 className="project-title">E-Commerce App</h1>
    <p className="project-description">
      The E-Commerce app is a modern clothing shopping platform built using{" "}
      <b>React Native</b>. It provides a seamless shopping experience with an
      intuitive user interface, smooth navigation, and optimized performance for
      mobile devices.
    </p>
    <h2>Key Features</h2>
    <ul>
      <li>
        <b>Product Browsing</b>: Users can explore a wide range of clothing
        items, including categories like men's wear, women's wear, and
        accessories.
      </li>
      <li>
        <b>Search Functionality</b>: A powerful search feature helps users
        quickly find products using filters such as size, color, price, and
        brand.
      </li>
      <li>
        <b>Wishlist and Cart</b>: Customers can save items to their wishlist or
        add them to the cart for a later purchase.
      </li>
      <li>
        <b>Secure Checkout</b>: Integrated secure payment gateway using{" "}
        <b>Razorpay</b> ensures a safe and fast checkout process with multiple
        payment options, including UPI, credit/debit cards, and net banking.
      </li>
      <li>
        <b>User Accounts</b>: Users can create accounts, manage orders, and view
        their purchase history.
      </li>
      <li>
        <b>Notifications</b>: Real-time notifications inform users about
        exclusive discounts, offers, and order updates.
      </li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
      <li>
        <b>React Native</b> for cross-platform development.
      </li>
      <li>
        <b>Redux</b> for state management.
      </li>
      <li>
        <b>Firebase Notifications:</b> for sending push notifications to users.
      </li>
      <li>
        <b>Razorpay API</b> for secure and seamless payment integration.
      </li>
    </ul>
    <p>
      This app demonstrates expertise in building user-friendly mobile
      applications with a focus on performance, user engagement, and secure
      transactions.
    </p>
  </div>
);

export default ECommerceAppDetail;
