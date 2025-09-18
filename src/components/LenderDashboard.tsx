import React, { useState } from 'react';
import { Users, TrendingUp, DollarSign, Filter } from 'lucide-react';
import RiskAssessment from './RiskAssessment';

export default function LenderDashboard() {
  const [selectedTier, setSelectedTier] = useState(1);

  const portfolioStats = [
    { label: 'Active Applications', value: '247', change: '+12%' },
    { label: 'Approved This Month', value: '89', change: '+8%' },
    { label: 'Default Rate', value: '2.3%', change: '-0.5%' },
    { label: 'Portfolio Value', value: '$12.4M', change: '+18%' }
  ];

  const applications = [
    {
      id: 1,
      businessName: "Maria's Bakery",
      owner: "Maria Rodriguez",
      industry: "Food Service",
      requestedAmount: "$50,000",
      traditionalScore: 645,
      empowrScore: 85,
      viability: "High",
      tier: 1
    },
    {
      id: 2,
      businessName: "Tech Solutions Inc",
      owner: "Aisha Johnson",
      industry: "Technology",
      requestedAmount: "$125,000",
      traditionalScore: 598,
      empowrScore: 92,
      viability: "High",
      tier: 2
    },
    {
      id: 3,
      businessName: "Green Clean Co",
      owner: "Jennifer Lee",
      industry: "Services",
      requestedAmount: "$35,000",
      traditionalScore: 612,
      empowrScore: 78,
      viability: "Moderate",
      tier: 1
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Lender Dashboard</h1>
        <p className="text-gray-400">Manage applications and assess risk with AI-powered insights</p>
      </div>

      {/* Portfolio Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {portfolioStats.map((stat, index) => (
          <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Risk Assessment Module */}
      <RiskAssessment selectedTier={selectedTier} onTierChange={setSelectedTier} />

      {/* Applications Table */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Pending Applications</h3>
            <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <Filter className="w-4 h-4 mr-2" />
              Filter & Sort
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Business</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Traditional</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Empowr</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Viability</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-700 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-white font-medium">{app.businessName}</div>
                      <div className="text-gray-400 text-sm">{app.owner} • {app.industry}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white font-medium">{app.requestedAmount}</td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${
                      app.traditionalScore >= 650 ? 'text-green-400' : 
                      app.traditionalScore >= 600 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {app.traditionalScore}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${
                      app.empowrScore >= 80 ? 'text-green-400' : 
                      app.empowrScore >= 60 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {app.empowrScore}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      app.viability === 'High' 
                        ? 'bg-green-500 bg-opacity-20 text-green-400'
                        : 'bg-yellow-500 bg-opacity-20 text-yellow-400'
                    }`}>
                      {app.viability}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{app.tier}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                        Review
                      </button>
                      <button className="text-green-400 hover:text-green-300 text-sm font-medium">
                        Approve
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}