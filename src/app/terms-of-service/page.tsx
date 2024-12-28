import { AlertTriangle, FileText, Shield } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="mt-16">
      <div className=" ">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Terms of Service</h1>
        <p className="text-gray-600 mb-4">
          Welcome to calculators.outgenerate.com! By using this site, you agree to the following terms and conditions.
          Please read them carefully.
        </p>
        <section className="mb-8">
          <div className="flex items-center mb-3">
            <Shield className=" mr-2" size={20} />
            <h2 className="text-2xl font-semibold text-gray-800">Acceptance of Terms</h2>
          </div>
          <p className="text-gray-600">
            By accessing and using this website, you agree to comply with these Terms of Service and all applicable laws and regulations.
            If you do not agree to these terms, please do not use the site.
          </p>
        </section>
        <section className="mb-8">
          <div className="flex items-center mb-3">
            <FileText className=" mr-2" size={20} />
            <h2 className="text-2xl font-semibold text-gray-800">Scope of Service</h2>
          </div>
          <p className="text-gray-600">
            calculators.outgenerate.com provides online tools and calculators for informational purposes only.
            The tools do not store user data, require user accounts, or provide personalized advice.
          </p>
        </section>
        <section className="mb-8">
          <div className="flex items-center mb-3">
            <AlertTriangle className=" mr-2" size={20} />
            <h2 className="text-2xl font-semibold text-gray-800">Limitations of Liability</h2>
          </div>
          <p className="text-gray-600">
            The content provided on calculators.outgenerate.com is for informational purposes only and is provided "as is" without any warranties.
            Outgenerate is not responsible for errors or inaccuracies in the tools or calculations.
          </p>
        </section>
        <section className="mb-8">
          <div className="flex items-center mb-3">
            <Shield className=" mr-2" size={20} />
            <h2 className="text-2xl font-semibold text-gray-800">Prohibited Activities</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Using the site in violation of any applicable laws or regulations.</li>
            <li>Attempting to hack, reverse-engineer, or otherwise disrupt the site’s functionality.</li>
            <li>Engaging in any activity that could harm the site’s reputation or functionality.</li>
          </ul>
        </section>
        <section className="mb-8">
          <div className="flex items-center mb-3">
            <FileText className=" mr-2" size={20} />
            <h2 className="text-2xl font-semibold text-gray-800">Intellectual Property</h2>
          </div>
          <p className="text-gray-600">
            All content on calculators.outgenerate.com, including tools, text, and graphics, is the property of Outgenerate unless otherwise stated.
            Unauthorized use or reproduction is strictly prohibited.
          </p>
        </section>
        <section className="mb-8">
          <div className="flex items-center mb-3">
            <Shield className=" mr-2" size={20} />
            <h2 className="text-2xl font-semibold text-gray-800">Changes to Terms</h2>
          </div>
          <p className="text-gray-600">
            Outgenerate reserves the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated
            revision date.
          </p>
        </section>
        <section className="mb-8">
          <div className="flex items-center mb-3">
            <AlertTriangle className=" mr-2" size={20} />
            <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
          </div>
          <p className="text-gray-600">
            If you have questions about these Terms of Service, please contact us at
            <a href="mailto:support@outgenerate.com" className="text-blue-600 hover:underline"> support@outgenerate.com</a>.
          </p>
        </section>
        
      </div>
    </div>
  );
};

export default TermsOfService;
