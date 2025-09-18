import React, { useState } from 'react';
import { TrendingUp, Award, Upload, Bell, CheckCircle, AlertCircle, X } from 'lucide-react';
import ScoreCard from './ScoreCard';
import ProgressTracker from './ProgressTracker';

interface BusinessDashboardProps {
  assessmentData?: any;
}

export default function BusinessDashboard({ assessmentData }: BusinessDashboardProps) {
  const [empowrScore, setEmpowrScore] = useState(78);
  const [traditionalScore] = useState(682);
  const [viabilityRating] = useState('High Viability');
  const [showAssessmentModal, setShowAssessmentModal] = useState(!!assessmentData);

  // Update scores if assessment data is available
  React.useEffect(() => {
    if (assessmentData) {
      if (assessmentData.empowrScore) {
        setEmpowrScore(assessmentData.empowrScore);
      }
      setShowAssessmentModal(true);
    }
  }, [assessmentData]);

  const AssessmentResultModal = () => {
    if (!assessmentData || !showAssessmentModal) return null;

    const isApproved = assessmentData.approved || assessmentData.recommendation === 'approved';
    const riskLevel = assessmentData.riskLevel || 'medium';
    const empowrScore = assessmentData.empowrScore || assessmentData.score || 78;
    const loanAmount = assessmentData.approvedAmount || assessmentData.loanAmount || 0;
    const interestRate = assessmentData.interestRate || 8.5;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-slate-800 rounded-xl p-8 max-w-2xl w-full border border-slate-700 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Credit Assessment Results</h2>
            <button
              onClick={() => setShowAssessmentModal(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Approval Status */}
            <div className={`p-6 rounded-lg border ${
              isApproved 
                ? 'bg-green-500 bg-opacity-10 border-green-500' 
                : 'bg-yellow-500 bg-opacity-10 border-yellow-500'
            }`}>
              <div className="flex items-center mb-3">
                {isApproved ? (
                  <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                ) : (
                  <AlertCircle className="w-8 h-8 text-yellow-400 mr-3" />
                )}
                <div>
                  <h3 className={`text-xl font-bold ${isApproved ? 'text-green-400' : 'text-yellow-400'}`}>
                    {isApproved ? 'Pre-Approved!' : 'Under Review'}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {isApproved 
                      ? 'Congratulations! Your business qualifies for financing.'
                      : 'Your application needs additional review.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Assessment Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">{empowrScore}</div>
                <div className="text-sm text-gray-400">Empowr Score</div>
              </div>
              <div className="bg-slate-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  ${loanAmount.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">
                  {isApproved ? 'Approved Amount' : 'Requested Amount'}
                </div>
              </div>
              <div className="bg-slate-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">{interestRate}%</div>
                <div className="text-sm text-gray-400">Est. Interest Rate</div>
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="bg-slate-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-3">Risk Assessment</h4>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Risk Level:</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  riskLevel === 'low' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                  riskLevel === 'medium' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                  'bg-red-500 bg-opacity-20 text-red-400'
                }`}>
                  {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
                </span>
              </div>
            </div>

            {/* Additional Information */}
            {assessmentData.message && (
              <div className="bg-slate-700 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Assessment Notes</h4>
                <p className="text-gray-300 text-sm">{assessmentData.message}</p>
              </div>
            )}

            {/* Next Steps */}
            <div className="flex space-x-4">
              <button
                onClick={() => setShowAssessmentModal(false)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                View Dashboard
              </button>
              {isApproved && (
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Accept Offer
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <AssessmentResultModal />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Business Dashboard</h1>
        <p className="text-gray-400">Track your scores, upload data, and monitor application progress</p>
      </div>

      {/* Notification Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 mb-8 flex items-center">
        <Bell className="w-6 h-6 text-white mr-3" />
        <div>
          <p className="text-white font-medium">Empowr Score increased by +5!</p>
          <p className="text-blue-100 text-sm">Financial course completion detected</p>
        </div>
      </div>

      {/* Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ScoreCard
          title="Traditional Credit Score"
          score={traditionalScore}
          maxScore={850}
          color="text-green-400"
          description="FICO Score"
          trend="+12 this month"
        />
        <ScoreCard
          title="Empowr Score"
          score={empowrScore}
          maxScore={100}
          color="text-blue-400"
          description="AI-driven alternative data"
          trend="+5 today"
        />
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Blended Viability</h3>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500 bg-opacity-20 text-green-400 rounded-full mb-2">
              <Award className="w-4 h-4 mr-2" />
              {viabilityRating}
            </div>
            <p className="text-gray-400 text-sm">
              Strong combined score profile
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Data Upload Section */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-6">Upload Alternative Data</h3>
          <div className="space-y-4">
            {[
              { name: 'Bank Transactions', status: 'Connected', icon: '🏦' },
              { name: 'POS System Data', status: 'Upload Required', icon: '💳' },
              { name: 'Yelp Reviews', status: 'Connected', icon: '⭐' },
              { name: 'Social Media', status: 'Connected', icon: '📱' },
              { name: 'Vendor References', status: 'Pending', icon: '📄' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="text-white font-medium">{item.name}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === 'Connected' 
                    ? 'bg-green-500 bg-opacity-20 text-green-400'
                    : item.status === 'Upload Required'
                    ? 'bg-yellow-500 bg-opacity-20 text-yellow-400'
                    : 'bg-gray-500 bg-opacity-20 text-gray-400'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
            <Upload className="w-4 h-4 mr-2" />
            Upload New Data Source
          </button>
        </div>

        {/* Progress Tracker */}
        <ProgressTracker />
      </div>

      {/* Score Improvement Tips */}
      <div className="mt-8 bg-slate-800 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-6">Improve Your Scores</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: 'Complete Financial Education',
              description: 'Finish the Business Credit module to boost your Empowr Score',
              impact: '+3-5 points',
              action: 'Start Course'
            },
            {
              title: 'Connect More Data Sources',
              description: 'Link your accounting software for better cash flow analysis',
              impact: '+8-12 points',
              action: 'Connect Now'
            },
            {
              title: 'Improve Payment History',
              description: 'Set up automatic payments to improve traditional credit',
              impact: '+15-25 points',
              action: 'Set Up'
            },
            {
              title: 'Build Social Proof',
              description: 'Encourage customer reviews and testimonials',
              impact: '+5-8 points',
              action: 'Learn How'
            }
          ].map((tip, index) => (
            <div key={index} className="p-4 bg-slate-700 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-white font-medium">{tip.title}</h4>
                <span className="text-blue-400 text-sm font-semibold">{tip.impact}</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">{tip.description}</p>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                {tip.action} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}