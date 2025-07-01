import React from 'react';

const Blog = () => {
    return (
        <section className=" mx-auto p-5 py-12 mt-20 bg-base-200">
      <h2 className="text-5xl font-bold text-center mb-10 text-primary">Latest B2B Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-base-300 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-base-content mb-3">
            How to Streamline B2B Logistics in 2025
          </h3>
          <p className="text-sm text-base-content mb-4">
            As the demand for efficient global supply chains grows, B2B logistics has become a critical element for competitive advantage. In this post, we explore the tools and digital strategies businesses are using to manage large-volume shipments, coordinate with third-party logistics providers, and automate tracking and invoicing processes across borders. Learn how your business can reduce delivery times and cut costs through data-driven decision-making and smart infrastructure.
          </p>
          <p className="text-xs text-base-content">June 28, 2025</p>
        </div>

        <div className="bg-base-300 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-base-content mb-3">
            Top 5 Trends in Wholesale Ecommerce
          </h3>
          <p className="text-sm text-base-content mb-4">
            Wholesale ecommerce is evolving rapidly, with trends like personalized B2B storefronts, AI-powered procurement, and on-demand manufacturing gaining momentum. This post dives into how these innovations are transforming buyer expectations and supplier operations. Discover how integrating flexible payment terms, real-time inventory updates, and global reach can set your wholesale business apart in the digital economy.
          </p>
          <p className="text-xs text-base-content">June 20, 2025</p>
        </div>

        <div className="bg-base-300 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-base-content mb-3">
            Building Trust with B2B Buyers
          </h3>
          <p className="text-sm text-base-content mb-4">
            Trust is the foundation of successful B2B relationships. This article outlines key strategies to earn and maintain buyer confidence, such as using verified supplier badges, offering transparent pricing, and showcasing third-party logistics reliability. We also cover how to leverage testimonials, content marketing, and secure payment systems to increase buyer retention and reduce churn.
          </p>
          <p className="text-xs text-base-content">June 10, 2025</p>
        </div>

        <div className="bg-base-300 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-base-content mb-3">
            Cross-Border Trade: Compliance Simplified
          </h3>
          <p className="text-sm text-base-content mb-4">
            Selling internationally can open new revenue streams, but it also introduces complex compliance issues. In this blog, we break down how to handle customs documentation, VAT/tax requirements, and restricted goods lists for top B2B markets. Discover digital tools that automate these processes and reduce legal risk — so you can scale globally without getting buried in bureaucracy.
          </p>
          <p className="text-xs text-base-content">May 30, 2025</p>
        </div>

      </div>
    </section>
    );
};

export default Blog;