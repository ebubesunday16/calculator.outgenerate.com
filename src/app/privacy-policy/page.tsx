import React from "react";
import { ShieldCheck, Lock, User, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mt-4">
          Your privacy is important to us. Learn how we handle your data.
        </p>
      </header>

      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <ShieldCheck className="text-primary w-6 h-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
        </div>
        <p className="text-gray-700">
          We collect personal data to provide and improve our services. This may
          include your name, email address, IP address, and usage data.
        </p>

        <ul className="list-disc pl-6 text-gray-700">
          <li>Personal Information: Name, email, etc.</li>
          <li>Usage Data: IP address, browser type, and session activity.</li>
          <li>Cookies: To enhance user experience and analyze traffic.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <Lock className="text-primary w-6 h-6" />
          <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
        </div>
        <p className="text-gray-700">
          We use your information for purposes including but not limited to:
        </p>

        <ul className="list-disc pl-6 text-gray-700">
          <li>Providing personalized services and features.</li>
          <li>Improving our website and user experience.</li>
          <li>Communicating updates, offers, and relevant information.</li>
          <li>Ensuring security and preventing fraud.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <User className="text-primary w-6 h-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Your Rights</h2>
        </div>
        <p className="text-gray-700">
          You have certain rights regarding your personal data, including:
        </p>

        <ul className="list-disc pl-6 text-gray-700">
          <li>Accessing, updating, or deleting your data.</li>
          <li>Opting out of promotional communications.</li>
          <li>Requesting data portability or restriction of processing.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <Globe className="text-primary w-6 h-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Data Sharing and Security</h2>
        </div>
        <p className="text-gray-700">
          We do not sell your data. We may share it with trusted partners solely
          to enhance our services, such as:
        </p>

        <ul className="list-disc pl-6 text-gray-700">
          <li>Service providers: Hosting, analytics, and email services.</li>
          <li>Legal obligations: When required by law or to protect our rights.</li>
        </ul>

        <p className="text-gray-700">
          We implement industry-standard security measures to protect your data
          from unauthorized access, alteration, or destruction.
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <ShieldCheck className="text-primary w-6 h-6" />
          <h2 className="text-2xl font-semibold text-gray-800">Changes to This Policy</h2>
        </div>
        <p className="text-gray-700">
          We may update this privacy policy from time to time. Significant
          changes will be communicated via email or a prominent notice on our
          website.
        </p>
      </section>

      <footer className="text-center mt-12">
        <p className="text-gray-600">
          If you have any questions, feel free to contact us at
          <a href="mailto:privacy@outgenerate.com" className="text-primary ml-1">
            privacy@outgenerate.com
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
