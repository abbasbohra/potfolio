import React from "react";
import "./CssFile/JainSupplierDetail.css"; // Assuming you'll reuse the same CSS file

const InsuranceAppDetail = () => (
  <div className="project-detail-container">
    <h1 className="project-title"> Meheta Insurance App</h1>
    <p className="project-description">
      Meheta Insurance App is a comprehensive mobile application designed to
      simplify the process of applying for and managing insurance policies.
      Users can apply for car and health insurance, file claims, track claim
      statuses, and submit documents for verification—all within a user-friendly
      interface that enhances convenience and accessibility.
    </p>
    <h2>Key Features</h2>
    <ul>
      <li>
        <b> Meheta Insurance Applications:</b> Users can easily apply for car
        and health insurance policies directly through the app.
      </li>
      <li>
        <b>Claim Management:</b> Allows users to file insurance claims and track
        their status in real-time.
      </li>
      <li>
        <b>Document Submission:</b> Securely upload and submit documents for
        verification to streamline the approval process.
      </li>
      <li>
        <b>Claim Tracking:</b> Provides detailed updates on claim progress,
        ensuring transparency and user awareness.
      </li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
      <li>
        <b>React Native:</b> For cross-platform mobile app development, ensuring
        compatibility with both iOS and Android.
      </li>
      <li>
        <b>Firebase Authentication:</b> To securely manage user logins and
        protect sensitive data.
      </li>
      <li>
        <b>Firebase Firestore:</b> For real-time storage and retrieval of Meheta
        Insurance Applications, claims, and document data.
      </li>
      <li>
        <b>Firebase Storage:</b> To handle secure document uploads and storage
        for verification purposes.
      </li>
    </ul>
    <p>
      Meheta Insurance App demonstrates proficiency in building user-centric
      applications that prioritize convenience, security, and real-time
      functionality, making insurance management effortless and efficient for
      users.
    </p>
  </div>
);

export default InsuranceAppDetail;
