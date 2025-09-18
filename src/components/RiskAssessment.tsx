import React, { useState } from 'react';
import { Sliders, Target, AlertTriangle, CheckCircle } from 'lucide-react';

interface RiskAssessmentProps {
  selectedTier: number;
  onTierChange: (tier: number) => void;
}

export default function RiskAssessment({ selectedTier, onTierChange }: RiskAssessmentProps) {
  const [riskTolerance, setRiskTolerance] = useState(60);
  const [interestRate, setInterestRate] = useState(8.5);

  const tiers = [
    {
      id: 1,
      name: "Traditional Plus",
      description: "Uses both traditional credit and Empowr Score",
      requirements: "FICO 600+ AND Empowr Score 70+",
      riskLevel: "Low",
      defaultRate: "2.1%",
      interestRange: "6.5% - 9.5%",
      color: "green"
    },
    {
      id: 2,
      name: "Empowr Weighted",
      description: "Empowr Score weighted more heavily",
      requirements: "FICO 550+ AND Empowr Score 80+",
      riskLevel: "Medium",
      defaultRate: "3.8%",
      interestRange: "8.5% - 12.5%",
      color: "yellow"
    },
    {
      id: 3,
      name: "Alternative Focus",
      description: "Primarily Empowr Score with conditions",
      requirements: "Empowr Score 85+ with mentorship program",
      riskLevel: "Medium-High",
      defaultRate: "5.2%",
      interestRange: "11.5% - 15.5%",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string, selected: boolean) => {
    const colors = {
      green: selected ? 'border-green-500 bg-green-500 bg-opacity-10' : 'border-slate-700 hover:border-green-500',
      yellow: selected ? 'border-yellow-500 bg-yellow-500 bg-opacity-10' : 'border-slate-700 hover:border-yellow-500',
      orange: selected ? 'border-orange-500 bg-orange-500 bg-opacity-10' : 'border-slate-700 hover:border-orange-500'
    };
    return colors[color as keyof typeof colors];
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'Low':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'Medium':
        return <Target className="w-5 h-5 text-yellow-400" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-orange-400" />;
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
      <div className="flex items-center mb-6">
        <Sliders className="w-6 h-6 text-purple-400 mr-3" />
        <h3 className="text-lg font-semibold text-white">Tiered Risk Assessment</h3>
      </div>

      {/* Tier Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {tiers.map((tier) => (
          <button
            key={tier.id}
            onClick={() => onTierChange(tier.id)}
            className={`p-4 rounded-lg border transition-all text-left ${
              getColorClasses(tier.color, selectedTier === tier.id)
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-semibold">{tier.name}</h4>
              {getRiskIcon(tier.riskLevel)}
            </div>
            <p className="text-gray-400 text-sm mb-3">{tier.description}</p>
            <div className="space-y-1 text-xs text-gray-500">
              <div>Requirements: {tier.requirements}</div>
              <div>Default Rate: {tier.defaultRate}</div>
              <div>Interest: {tier.interestRange}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Risk Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-white font-medium">Risk Tolerance</label>
              <span className="text-blue-400 font-semibold">{riskTolerance}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={riskTolerance}
              onChange={(e) => setRiskTolerance(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Conservative</span>
              <span>Aggressive</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-white font-medium">Interest Rate</label>
              <span className="text-blue-400 font-semibold">{interestRate}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5%</span>
              <span>20%</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <h4 className="text-white font-semibold mb-3">Current Settings Impact</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Expected Applications</span>
              <span className="text-white">~45 per month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Projected Default Rate</span>
              <span className="text-yellow-400">3.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Est. Monthly Volume</span>
              <span className="text-green-400">$2.8M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Risk-Adjusted Return</span>
              <span className="text-blue-400">7.8%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
          Apply Settings
        </button>
        <button className="border border-slate-600 text-gray-300 hover:text-white hover:border-slate-500 font-semibold py-2 px-6 rounded-lg transition-colors">
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}