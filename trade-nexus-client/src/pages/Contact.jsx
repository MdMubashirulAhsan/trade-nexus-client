import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title> Contact - Trade Nexus</title>
      </Helmet>

      <div className="text-base-content bg-base-200">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          We'd love to hear from you! Whether you have a question about platform
          features, pricing, supplier onboarding, or anything else — our team is
          ready to help.
        </p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1">General Inquiries</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:support@tradenexus.fake"
              className="text-blue-500 underline"
            >
              support@tradenexus.fake
            </a>
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1">Business Partnerships</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:partnerships@tradenexus.fake"
              className="text-blue-500 underline"
            >
              partnerships@tradenexus.fake
            </a>
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1">Head Office</h2>
          <p>
            Sylhet,
            <br />
            Bangladesh
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
