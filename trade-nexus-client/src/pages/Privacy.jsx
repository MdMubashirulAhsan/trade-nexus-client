import React from "react";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title> Privacy Policy - Trade Nexus</title>
      </Helmet>

      <div className="text-base-content bg-base-200">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy outlines how we
          collect, use, and protect your personal and business information when
          you use our B2B wholesale marketplace.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Account details (business name, contact info, etc.)</li>
          <li>Transaction and order history</li>
          <li>Browsing and usage data</li>
          <li>Logistics and delivery preferences</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Facilitate bulk transactions between suppliers and buyers</li>
          <li>Provide shipping, payment, and logistics services</li>
          <li>Send platform updates and order notifications</li>
          <li>Improve user experience and system performance</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          3. Data Sharing and Protection
        </h2>
        <p className="mb-4">
          We do not sell your personal data. We only share data with trusted
          partners essential to our services (e.g., logistics, payment
          gateways). Your data is encrypted and stored securely.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Your Rights</h2>
        <p className="mb-4">
          You may request access to your data, make corrections, or delete your
          account at any time. Please contact us at{" "}
          <a
            href="mailto:privacy@tradenexus.fake"
            className="text-blue-500 underline"
          >
            privacy@tradenexus.fake
          </a>{" "}
          for assistance.
        </p>
      </div>
    </>
  );
};

export default Privacy;
