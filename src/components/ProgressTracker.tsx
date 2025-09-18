import React from 'react';
import { CheckCircle, Circle, Clock, FileText } from 'lucide-react';

export default function ProgressTracker() {
  const steps = [
    {
      id: 1,
      title: "Application Started",
      description: "Basic information submitted",
      status: "completed",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Documents Uploaded",
      description: "Financial statements and tax returns",
      status: "completed",
      date: "March 16, 2024"
    },
    {
      id: 3,
      title: "Alternative Data Connected",
      description: "POS system and bank account linked",
      status: "in-progress",
      date: "In Progress"
    },
    {
      id: 4,
      title: "Score Calculation",
      description: "AI analysis of all data sources",
      status: "pending",
      date: "Pending"
    },
    {
      id: 5,
      title: "Lender Matching",
      description: "Connect with suitable financing options",
      status: "pending",
      date: "Pending"
    }
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-400" />;
      default:
        return <Circle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'in-progress':
        return 'text-blue-400';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center mb-6">
        <FileText className="w-6 h-6 text-blue-400 mr-3" />
        <h3 className="text-lg font-semibold text-white">Application Progress</h3>
      </div>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              {getIcon(step.status)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className={`text-sm font-medium ${
                  step.status === 'completed' ? 'text-white' : 
                  step.status === 'in-progress' ? 'text-blue-400' : 'text-gray-400'
                }`}>
                  {step.title}
                </h4>
                <span className={`text-xs ${getStatusColor(step.status)}`}>
                  {step.date}
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Overall Progress</span>
          <span className="text-blue-400 font-medium">60% Complete</span>
        </div>
        <div className="mt-2 w-full bg-slate-700 rounded-full h-2 overflow-hidden">
          <div className="w-3/5 h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000" />
        </div>
      </div>
    </div>
  );
}