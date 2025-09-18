import React, { useState } from 'react';
import { Building2, Users, Zap, Loader2 } from 'lucide-react';
import { UserType } from '../App';

interface LoginProps {
  onLogin: (type: UserType, assessmentData?: any) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [selectedType, setSelectedType] = useState<'business' | 'lender'>('business');
  const [showAssessmentForm, setShowAssessmentForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    businessName: '',
    industry: '',
    annualRevenue: '',
    yearsInBusiness: '',
    employeeCount: '',
    creditScore: '',
    monthlyExpenses: '',
    location: '',
    businessType: '',
    loanAmount: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    if (selectedType === 'business') {
      setShowAssessmentForm(true);
    } else {
      onLogin(selectedType);
    }
  };

  const handleAssessmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/assess-credit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          businessName: formData.businessName,
          industry: formData.industry,
          annualRevenue: parseFloat(formData.annualRevenue) || 0,
          yearsInBusiness: parseInt(formData.yearsInBusiness) || 0,
          employeeCount: parseInt(formData.employeeCount) || 0,
          creditScore: parseInt(formData.creditScore) || 0,
          monthlyExpenses: parseFloat(formData.monthlyExpenses) || 0,
          location: formData.location,
          businessType: formData.businessType,
          loanAmount: parseFloat(formData.loanAmount) || 0,
          email: formData.email
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const assessmentResult = await response.json();
      onLogin('business', assessmentResult);
    } catch (error) {
      console.error('Assessment API Error:', error);
      alert('Unable to complete assessment. Please try again later or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showAssessmentForm) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white">Credit Assessment</h1>
              </div>
              <p className="text-gray-400">Help us understand your business to provide the best financing options</p>
            </div>

            <form onSubmit={handleAssessmentSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Industry *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    <option value="">Select Industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Retail">Retail</option>
                    <option value="Food Service">Food Service</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Construction">Construction</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Annual Revenue *
                  </label>
                  <input
                    type="number"
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="250000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Years in Business *
                  </label>
                  <input
                    type="number"
                    name="yearsInBusiness"
                    required
                    min="0"
                    max="50"
                    value={formData.yearsInBusiness}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Employee Count *
                  </label>
                  <input
                    type="number"
                    name="employeeCount"
                    required
                    min="1"
                    value={formData.employeeCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Personal Credit Score
                  </label>
                  <input
                    type="number"
                    name="creditScore"
                    min="300"
                    max="850"
                    value={formData.creditScore}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="650"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Monthly Expenses *
                  </label>
                  <input
                    type="number"
                    name="monthlyExpenses"
                    required
                    value={formData.monthlyExpenses}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="15000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Business Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Business Type *
                  </label>
                  <select
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    <option value="">Select Business Type</option>
                    <option value="llc">LLC</option>
                    <option value="corporation">Corporation</option>
                    <option value="partnership">Partnership</option>
                    <option value="sole-proprietorship">Sole Proprietorship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Requested Loan Amount *
                  </label>
                  <input
                    type="number"
                    name="loanAmount"
                    required
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="50000"
                  />
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <button
                  type="button"
                  onClick={() => setShowAssessmentForm(false)}
                  className="flex-1 border border-slate-600 text-gray-300 hover:text-white hover:border-slate-500 font-semibold py-3 px-6 rounded-lg transition-colors"
                  disabled={isSubmitting}
                >
                  Back to Login
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Assessing...
                    </>
                  ) : (
                    'Complete Assessment'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Empowr AI</h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Empowering minority and women-owned businesses through AI-driven alternative scoring and direct capital connections.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-500 mb-1">95%</div>
              <div className="text-sm text-gray-400">Repayment Rate</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-500 mb-1">40%</div>
              <div className="text-sm text-gray-400">Previously Rejected</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-500 mb-1">$50M+</div>
              <div className="text-sm text-gray-400">Capital Deployed</div>
            </div>
          </div>
        </div>

        {/* Right Side - Login */}
        <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-center mb-8">Welcome Back</h2>
          
          {/* Toggle Buttons */}
          <div className="flex bg-slate-700 rounded-xl p-1 mb-8">
            <button
              onClick={() => setSelectedType('business')}
              className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg transition-all ${
                selectedType === 'business'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4 mr-2" />
              Business Owner
            </button>
            <button
              onClick={() => setSelectedType('lender')}
              className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg transition-all ${
                selectedType === 'lender'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              Lender / VC
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              {selectedType === 'business' ? 'Start Assessment' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}