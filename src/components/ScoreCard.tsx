import React from 'react';
import { TrendingUp, Info } from 'lucide-react';

interface ScoreCardProps {
  title: string;
  score: number;
  maxScore: number;
  color: string;
  description: string;
  trend: string;
}

export default function ScoreCard({ title, score, maxScore, color, description, trend }: ScoreCardProps) {
  const percentage = (score / maxScore) * 100;

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Info className="w-4 h-4" />
        </button>
      </div>
      
      <div className="mb-4">
        <div className={`text-3xl font-bold ${color} mb-1`}>{score}</div>
        <div className="text-gray-400 text-sm">{description}</div>
      </div>
      
      {/* Score Bar */}
      <div className="mb-4">
        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0</span>
          <span>{maxScore}</span>
        </div>
      </div>
      
      <div className="flex items-center text-sm">
        <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
        <span className="text-green-400 font-medium">{trend}</span>
      </div>
    </div>
  );
}