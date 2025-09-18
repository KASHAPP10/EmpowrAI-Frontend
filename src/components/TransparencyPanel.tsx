import React, { useState } from 'react';
import { Shield, Eye, Users, Award, HelpCircle, ChevronDown } from 'lucide-react';

export default function TransparencyPanel() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const scoreBreakdown = [
    { factor: "Payment History", weight: 35, description: "Traditional credit payment patterns" },
    { factor: "Cash Flow Analysis", weight: 25, description: "Bank transaction patterns and stability" },
    { factor: "Business Performance", weight: 20, description: "Revenue trends and growth metrics" },
    { factor: "Social Proof", weight: 10, description: "Customer reviews and community trust" },
    { factor: "Alternative Data", weight: 10, description: "Rent, utilities, and vendor payments" }
  ];

  const fairnessMetrics = [
    { metric: "Gender Equality", score: "94%", description: "Equal approval rates across genders" },
    { metric: "Racial Equity", score: "91%", description: "Fair treatment across ethnic groups" },
    { metric: "Geographic Balance", score: "88%", description: "Rural and urban parity" },
    { metric: "Industry Diversity", score: "92%", description: "Fair scoring across sectors" }
  ];

  const faqs = [
    {
      question: "How does the Empowr Score algorithm work?",
      answer: "Our AI algorithm analyzes over 200 data points including traditional credit data, cash flow patterns, business performance metrics, social proof indicators, and alternative payment histories. Machine learning models identify patterns that predict business success while ensuring fairness across demographic groups."
    },
    {
      question: "What measures prevent bias in scoring?",
      answer: "We employ multiple bias detection algorithms, regular audits by independent third parties, and diverse training datasets. Our models are explicitly designed to be 'blind' to protected characteristics like race, gender, and ethnicity while still capturing relevant business performance indicators."
    },
    {
      question: "How is my data protected?",
      answer: "All data is encrypted in transit and at rest using bank-level security standards. We follow SOC 2 Type II compliance and never sell personal information to third parties. Data access is strictly limited to authorized personnel and automated systems."
    },
    {
      question: "Can I dispute my Empowr Score?",
      answer: "Yes, you can request a score review through our dispute process. Our team will investigate and provide a detailed explanation within 10 business days. If errors are found, your score will be updated immediately."
    },
    {
      question: "Who validates Empowr AI's methodology?",
      answer: "Our algorithms and fairness measures are independently audited by academic institutions including MIT and the Brookings Institution, as well as CDFI Fund partners. Regular third-party assessments ensure our models remain fair and effective."
    }
  ];

  const partners = [
    { name: "MIT Computer Science", type: "Academic Validation" },
    { name: "Brookings Institution", type: "Policy Research" },
    { name: "CDFI Fund", type: "Community Development" },
    { name: "Fair Isaac Corporation", type: "Credit Technology" },
    { name: "National Minority Supplier", type: "Business Certification" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Transparency Center</h1>
        <p className="text-gray-400">Understanding how we evaluate creditworthiness fairly and responsibly</p>
      </div>

      {/* Score Breakdown */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
        <div className="flex items-center mb-6">
          <Shield className="w-6 h-6 text-blue-400 mr-3" />
          <h2 className="text-xl font-bold text-white">Empowr Score Breakdown</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Score Components</h3>
            <div className="space-y-4">
              {scoreBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium">{item.factor}</span>
                      <span className="text-blue-400 font-semibold">{item.weight}%</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Visual Score Distribution</h3>
            <div className="bg-slate-700 rounded-lg p-6 h-64 flex items-center justify-center">
              <div className="relative w-48 h-48">
                {scoreBreakdown.map((item, index) => {
                  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
                  const startAngle = scoreBreakdown.slice(0, index).reduce((sum, prev) => sum + prev.weight * 3.6, 0);
                  const endAngle = item.weight * 3.6;
                  
                  return (
                    <div
                      key={index}
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(from ${startAngle}deg, ${colors[index]} ${endAngle}deg, transparent ${endAngle}deg)`
                      }}
                    />
                  );
                })}
                <div className="absolute inset-4 bg-slate-700 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">Total Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fairness Metrics */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
        <div className="flex items-center mb-6">
          <Users className="w-6 h-6 text-green-400 mr-3" />
          <h2 className="text-xl font-bold text-white">AI Fairness & Bias Prevention</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fairnessMetrics.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-slate-700 rounded-lg">
              <div className="text-3xl font-bold text-green-400 mb-2">{metric.score}</div>
              <h3 className="text-white font-semibold mb-2">{metric.metric}</h3>
              <p className="text-gray-400 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-green-500 bg-opacity-10 border border-green-500 rounded-lg">
          <div className="flex items-start">
            <Award className="w-6 h-6 text-green-400 mr-3 mt-1" />
            <div>
              <h3 className="text-green-400 font-semibold mb-2">Independent Validation</h3>
              <p className="text-gray-300 text-sm">
                Our fairness metrics are independently audited quarterly by academic institutions and 
                civil rights organizations to ensure our AI remains unbiased and equitable for all users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
        <div className="flex items-center mb-6">
          <HelpCircle className="w-6 h-6 text-purple-400 mr-3" />
          <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-700 rounded-lg">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700 transition-colors"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedFAQ === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {expandedFAQ === index && (
                <div className="px-4 pb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Third-Party Validators */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <div className="flex items-center mb-6">
          <Eye className="w-6 h-6 text-blue-400 mr-3" />
          <h2 className="text-xl font-bold text-white">Third-Party Validation Partners</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((partner, index) => (
            <div key={index} className="p-4 bg-slate-700 rounded-lg text-center">
              <h3 className="text-white font-semibold mb-1">{partner.name}</h3>
              <p className="text-gray-400 text-sm">{partner.type}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Download Full Methodology Report
          </button>
        </div>
      </div>
    </div>
  );
}