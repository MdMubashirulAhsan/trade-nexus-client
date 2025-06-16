import React from "react";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title> Terms & Conditions - Trade Nexus</title>
      </Helmet>

      <div className="text-base-content bg-base-200">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using our B2B wholesale marketplace, you agree to comply with and
          be bound by these Terms & Conditions.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Platform Usage</h2>
        <p className="mb-4">
          This platform is intended for registered business entities only.
          Unauthorized use or fraudulent listings are strictly prohibited and
          may result in suspension.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          3. Product Listings & Transactions
        </h2>
        <p className="mb-4">
          Suppliers are responsible for accurate descriptions, pricing, and
          stock availability. Buyers are expected to conduct due diligence
          before placing bulk orders.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Payment and Logistics</h2>
        <p className="mb-4">
          Payments must be made through secure channels provided on the
          platform. We facilitate logistics but are not liable for third-party
          delays or damages.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate accounts that violate our
          policies, misuse the platform, or engage in fraudulent activity.
        </p>
      </div>
    </>
  );
};

export default Terms;
