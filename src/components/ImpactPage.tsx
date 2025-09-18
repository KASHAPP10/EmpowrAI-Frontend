import React from 'react';
import { TrendingUp, Users, DollarSign, Target, Download, ExternalLink } from 'lucide-react';

export default function ImpactPage() {
  const impactMetrics = [
    {
      title: "Capital Deployed",
      value: "$127.3M",
      change: "+34% YoY",
      description: "Total funding provided to underserved businesses",
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      title: "Businesses Funded",
      value: "2,847",
      change: "+89% YoY",
      description: "Minority and women-owned enterprises supported",
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: "Previously Rejected",
      value: "67%",
      change: "+5% YoY",
      description: "Of funded businesses were denied by traditional lenders",
      icon: Target,
      color: "text-purple-400"
    },
    {
      title: "Job Creation",
      value: "12,450",
      change: "+56% YoY",
      description: "New jobs created by funded businesses",
      icon: TrendingUp,
      color: "text-yellow-400"
    }
  ];

  const demographics = [
    { label: "Women-Owned", percentage: 43, count: "1,224 businesses" },
    { label: "Minority-Owned", percentage: 52, count: "1,480 businesses" },
    { label: "Rural Businesses", percentage: 31, count: "882 businesses" },
    { label: "First-Time Borrowers", percentage: 38, count: "1,082 businesses" }
  ];

  const repaymentData = [
    { category: "Traditional Credit 750+", rate: 97.2, volume: "$45.2M" },
    { category: "Traditional Credit 650-749", rate: 95.8, volume: "$38.7M" },
    { category: "Traditional Credit 600-649", rate: 94.1, volume: "$24.8M" },
    { category: "Empowr-Only Qualified", rate: 91.7, volume: "$18.6M" }
  ];

  const caseStudies = [
    {
      name: "Maria's Artisan Bakery",
      owner: "Maria Rodriguez",
      location: "Phoenix, AZ",
      industry: "Food Service",
      challenge: "Denied by 3 banks due to limited credit history",
      solution: "Qualified through Empowr Score using POS data and customer reviews",
      outcome: "Expanded to 2 locations, hired 8 employees",
      funding: "$75,000",
      empowrScore: 87
    },
    {
      name: "TechBridge Solutions",
      owner: "Keisha Williams",
      location: "Atlanta, GA",
      industry: "IT Services",
      challenge: "Insufficient collateral for traditional lending",
      solution: "AI algorithm recognized growth potential in revenue patterns",
      outcome: "Increased revenue by 180%, team grew from 3 to 15",
      funding: "$150,000",
      empowrScore: 92
    },
    {
      name: "Green Valley Farm Co-op",
      owner: "Carlos Mendoza",
      location: "Fresno, CA",
      industry: "Agriculture",
      challenge: "Seasonal revenue patterns concerned traditional lenders",
      solution: "Alternative data showed consistent supplier relationships",
      outcome: "Modernized equipment, improved yield by 40%",
      funding: "$200,000",
      empowrScore: 84
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Impact & Research</h1>
        <p className="text-gray-400">Real results from empowering underserved businesses with fair access to capital</p>
      </div>

      {/* Hero Impact Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {impactMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${metric.color}`} />
                <span className="text-green-400 text-sm font-medium">{metric.change}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
              <p className="text-gray-400 text-sm">{metric.description}</p>
            </div>
          );
        })}
      </div>

      {/* Demographics Breakdown */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">Business Demographics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demographics.map((demo, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">{demo.label}</span>
                <span className="text-blue-400 font-semibold">{demo.percentage}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                  style={{ width: `${demo.percentage}%` }}
                />
              </div>
              <div className="text-gray-400 text-sm">{demo.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Repayment Performance */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">Repayment Performance by Category</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-gray-300 font-semibold py-3">Credit Category</th>
                <th className="text-left text-gray-300 font-semibold py-3">Repayment Rate</th>
                <th className="text-left text-gray-300 font-semibold py-3">Total Volume</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {repaymentData.map((data, index) => (
                <tr key={index} className="border-b border-slate-700">
                  <td className="py-3 text-white">{data.category}</td>
                  <td className="py-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 font-semibold">{data.rate}%</span>
                      <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-400"
                          style={{ width: `${data.rate}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-gray-300">{data.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-green-500 bg-opacity-10 border border-green-500 rounded-lg">
          <p className="text-green-400 text-sm">
            <strong>Key Insight:</strong> Even businesses qualified primarily through Empowr Score 
            (with limited traditional credit) maintain a 91.7% repayment rate, demonstrating the 
            effectiveness of alternative data analysis.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-6">Success Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((story, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-1">{story.name}</h3>
                <div className="flex items-center text-gray-400 text-sm space-x-2">
                  <span>{story.owner}</span>
                  <span>•</span>
                  <span>{story.location}</span>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-red-400 font-medium">Challenge:</span>
                  <p className="text-gray-300 mt-1">{story.challenge}</p>
                </div>
                
                <div>
                  <span className="text-blue-400 font-medium">Solution:</span>
                  <p className="text-gray-300 mt-1">{story.solution}</p>
                </div>
                
                <div>
                  <span className="text-green-400 font-medium">Outcome:</span>
                  <p className="text-gray-300 mt-1">{story.outcome}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-700 flex items-center justify-between">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{story.funding}</div>
                  <div className="text-xs text-gray-400">Funding</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">{story.empowrScore}</div>
                  <div className="text-xs text-gray-400">Empowr Score</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research & Downloads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">Research Publications</h3>
          <div className="space-y-4">
            {[
              {
                title: "Alternative Data in Small Business Lending",
                authors: "MIT Computer Science Lab",
                date: "Q3 2024",
                type: "Peer-Reviewed Study"
              },
              {
                title: "AI Bias Prevention in Financial Services",
                authors: "Brookings Institution",
                date: "Q2 2024",
                type: "Policy Brief"
              },
              {
                title: "Economic Impact of Inclusive Lending",
                authors: "CDFI Fund Analysis",
                date: "Q1 2024",
                type: "Government Report"
              }
            ].map((paper, index) => (
              <div key={index} className="p-4 bg-slate-700 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-white font-medium mb-1">{paper.title}</h4>
                    <p className="text-gray-400 text-sm mb-1">{paper.authors}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{paper.date}</span>
                      <span>•</span>
                      <span>{paper.type}</span>
                    </div>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 ml-3">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Partner With Us</h3>
          <p className="text-blue-100 text-sm mb-6">
            Join leading financial institutions in running pilot programs to expand 
            access to capital for underserved businesses in your community.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              Schedule Pilot Discussion
            </button>
            <button className="w-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-10 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              Download Research Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}