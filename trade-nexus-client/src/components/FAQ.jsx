import React from "react";

const FAQ = () => {
  return (
    <div className="container flex flex-col flex-wrap content-center justify-center    mt-20 bg-base-200 rounded p-5">
      <h1 className="text-5xl antialiased font-semibold leading-none text-center text-primary mb-10">
        FAQ
      </h1>
      <div className="join join-vertical bg-base-300 text-base-content ">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title font-semibold">
            1. Who can use this platform?
          </div>
          <div className="collapse-content text-sm">
            Our platform is designed for verified businesses such as
            manufacturers, wholesalers, distributors, retailers, resellers, and
            institutional buyers.{" "}
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            2. What types of products can I find here?
          </div>
          <div className="collapse-content text-sm">
            We support multi-category listings, including electronics, gadgets,
            fashion, apparel, home appliances, industrial machinery, and more.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            3. Is payment safe on your platform?
          </div>
          <div className="collapse-content text-sm">
            Yes, all payments are processed via secure gateways with encryption
            and fraud protection. Escrow services are available for added
            security.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            4. How are orders shipped?
          </div>
          <div className="collapse-content text-sm">
            We partner with trusted logistics providers to handle domestic and
            international shipments. Tracking and delivery status updates are
            included.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            5. Can I list my products as a supplier?
          </div>
          <div className="collapse-content text-sm">
            Absolutely. Suppliers can register, get verified, and create product
            listings across supported categories. Bulk management tools are
            available in the dashboard.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
