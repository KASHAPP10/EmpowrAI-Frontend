import React, { useState } from 'react';
import { BookOpen, Award, Play, CheckCircle, Lock, Star } from 'lucide-react';

export default function EducationHub() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: "Building Business Credit",
      description: "Learn how to establish and improve your business credit profile",
      lessons: 8,
      duration: "2 hours",
      difficulty: "Beginner",
      completed: true,
      scoreBoost: "+5 points",
      progress: 100,
      icon: "💳"
    },
    {
      id: 2,
      title: "Understanding Empowr Score",
      description: "Deep dive into how our AI algorithm evaluates alternative data",
      lessons: 12,
      duration: "3 hours",
      difficulty: "Intermediate",
      completed: true,
      scoreBoost: "+3 points",
      progress: 100,
      icon: "🤖"
    },
    {
      id: 3,
      title: "Financial Statement Mastery",
      description: "Create compelling financial statements that tell your story",
      lessons: 15,
      duration: "4 hours",
      difficulty: "Intermediate",
      completed: false,
      scoreBoost: "+8 points",
      progress: 60,
      icon: "📊"
    },
    {
      id: 4,
      title: "Cash Flow Management",
      description: "Optimize your cash flow to improve creditworthiness",
      lessons: 10,
      duration: "2.5 hours",
      difficulty: "Beginner",
      completed: false,
      scoreBoost: "+6 points",
      progress: 0,
      icon: "💰"
    },
    {
      id: 5,
      title: "Alternative Data Sources",
      description: "Maximize your score with non-traditional data points",
      lessons: 9,
      duration: "2 hours",
      difficulty: "Advanced",
      completed: false,
      scoreBoost: "+10 points",
      progress: 0,
      icon: "📈"
    },
    {
      id: 6,
      title: "Investor Pitch Preparation",
      description: "Craft compelling pitches for VCs and lenders",
      lessons: 13,
      duration: "3.5 hours",
      difficulty: "Advanced",
      completed: false,
      scoreBoost: "+7 points",
      progress: 0,
      icon: "🎯"
    }
  ];

  const achievements = [
    { name: "Quick Learner", icon: "⚡", earned: true },
    { name: "Credit Builder", icon: "🏗️", earned: true },
    { name: "Data Master", icon: "📊", earned: false },
    { name: "Pitch Perfect", icon: "🎤", earned: false }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Education Hub</h1>
        <p className="text-gray-400">Build your financial knowledge and boost your Empowr Score</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-semibold">Courses Completed</h3>
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">2 / 6</div>
          <div className="text-sm text-gray-400">33% Complete</div>
        </div>
        
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-semibold">Score Earned</h3>
            <Star className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-blue-400 mb-1">+8</div>
          <div className="text-sm text-gray-400">Empowr Points</div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-semibold">Learning Streak</h3>
            <Award className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">7</div>
          <div className="text-sm text-gray-400">Days in a row</div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-semibold">Time Invested</h3>
            <BookOpen className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">5.5</div>
          <div className="text-sm text-gray-400">Hours</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Modules */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-6">Learning Modules</h2>
          <div className="space-y-6">
            {modules.map((module) => (
              <div
                key={module.id}
                className={`bg-slate-800 rounded-xl p-6 border transition-all cursor-pointer ${
                  selectedModule === module.id 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
                onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="text-3xl">{module.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                        {module.completed && (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        )}
                        <span className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-400 text-xs rounded-full">
                          {module.scoreBoost}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{module.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{module.lessons} lessons</span>
                        <span>{module.duration}</span>
                        <span className="capitalize">{module.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-1">{module.progress}%</div>
                    <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 transition-all"
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {selectedModule === module.id && (
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        {module.completed ? 'Review content' : 'Continue learning'}
                      </div>
                      <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        <Play className="w-4 h-4 mr-2" />
                        {module.completed ? 'Review' : 'Start'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Progress */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Achievements</h3>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-lg ${
                    achievement.earned
                      ? 'bg-blue-500 bg-opacity-20 border border-blue-500'
                      : 'bg-slate-700 border border-slate-600'
                  }`}
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className={`text-sm font-medium ${
                    achievement.earned ? 'text-blue-400' : 'text-gray-500'
                  }`}>
                    {achievement.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Goals */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">This Week's Goals</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Complete 1 module</span>
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Study 3 days</span>
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Earn 5+ score points</span>
                <div className="w-5 h-5 border-2 border-gray-600 rounded-full" />
              </div>
            </div>
          </div>

          {/* Recommended Next */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Recommended Next</h3>
            <p className="text-blue-100 text-sm mb-4">
              Complete "Financial Statement Mastery" to unlock the highest score boost available.
            </p>
            <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Start Module
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}