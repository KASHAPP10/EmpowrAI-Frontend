import React, { useState } from 'react';
import { Star, MapPin, TrendingUp, Eye, Bookmark, Filter } from 'lucide-react';

export default function VCConnection() {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    stage: 'all',
    industry: 'all',
    region: 'all',
    score: 'all'
  });

  const businesses = [
    {
      id: 1,
      name: "EcoTech Solutions",
      founder: "Priya Sharma",
      industry: "CleanTech",
      location: "San Francisco, CA",
      stage: "Series A",
      mrr: "$45K",
      empowrScore: 94,
      growth: "+127%",
      tags: ["Product-Market Fit", "Scaling", "ESG Champion"],
      description: "AI-powered energy optimization for commercial buildings",
      logo: "🌿",
      traction: "50+ enterprise clients, $2M ARR"
    },
    {
      id: 2,
      name: "HealthBridge",
      founder: "Dr. Amara Johnson",
      industry: "HealthTech",
      location: "Atlanta, GA",
      stage: "Seed",
      mrr: "$28K",
      empowrScore: 89,
      growth: "+89%",
      tags: ["Underbanked Champion", "Community Impact"],
      description: "Telehealth platform for underserved communities",
      logo: "🏥",
      traction: "10K+ patients served, 95% satisfaction"
    },
    {
      id: 3,
      name: "FoodFlow",
      founder: "Carlos Martinez",
      industry: "FoodTech",
      location: "Austin, TX",
      stage: "Pre-Seed",
      mrr: "$12K",
      empowrScore: 82,
      growth: "+156%",
      tags: ["Scaling", "Community Impact"],
      description: "Supply chain optimization for local food distributors",
      logo: "🚚",
      traction: "25 distributors, 200+ restaurants"
    },
    {
      id: 4,
      name: "EduPath AI",
      founder: "Fatima Al-Zahra",
      industry: "EdTech",
      location: "Boston, MA",
      stage: "Series A",
      mrr: "$67K",
      empowrScore: 91,
      growth: "+203%",
      tags: ["Product-Market Fit", "AI Innovation"],
      description: "Personalized learning platform for K-12 students",
      logo: "🎓",
      traction: "500+ schools, 50K+ students"
    }
  ];

  const BusinessCard = ({ business }: { business: typeof businesses[0] }) => (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="text-3xl mr-3">{business.logo}</div>
          <div>
            <h3 className="text-lg font-semibold text-white">{business.name}</h3>
            <p className="text-gray-400 text-sm">{business.founder}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-yellow-400 transition-colors">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4">{business.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-2xl font-bold text-white">{business.mrr}</div>
          <div className="text-xs text-gray-400">Monthly Revenue</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-400">{business.empowrScore}</div>
          <div className="text-xs text-gray-400">Empowr Score</div>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <MapPin className="w-4 h-4 text-gray-400 mr-2" />
        <span className="text-gray-400 text-sm mr-4">{business.location}</span>
        <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
        <span className="text-green-400 text-sm font-medium">{business.growth}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {business.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-400 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="border-t border-slate-700 pt-4">
        <p className="text-gray-400 text-sm mb-3">{business.traction}</p>
        <div className="flex space-x-3">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
            View Pitch Deck
          </button>
          <button className="flex-1 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
            Request Intro
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Capital Connect</h1>
          <p className="text-gray-400">Discover high-potential businesses ready for investment</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Stage</label>
            <select className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm">
              <option value="all">All Stages</option>
              <option value="pre-seed">Pre-Seed</option>
              <option value="seed">Seed</option>
              <option value="series-a">Series A</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
            <select className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm">
              <option value="all">All Industries</option>
              <option value="tech">Technology</option>
              <option value="health">Healthcare</option>
              <option value="fintech">FinTech</option>
              <option value="cleantech">CleanTech</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Region</label>
            <select className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm">
              <option value="all">All Regions</option>
              <option value="west">West Coast</option>
              <option value="east">East Coast</option>
              <option value="central">Central US</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Empowr Score</label>
            <select className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm">
              <option value="all">All Scores</option>
              <option value="high">90+ (Excellent)</option>
              <option value="good">80-89 (Good)</option>
              <option value="fair">70-79 (Fair)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-1">{businesses.length}</div>
            <div className="text-blue-100">Investor-Ready Businesses</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">$2.3M</div>
            <div className="text-blue-100">Avg. Annual Revenue</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">87</div>
            <div className="text-blue-100">Avg. Empowr Score</div>
          </div>
        </div>
      </div>

      {/* Business Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>

      {/* Eligibility Note */}
      <div className="mt-12 bg-slate-800 rounded-xl p-6 border border-slate-700">
        <div className="flex items-start">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
            <Star className="w-3 h-3 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Investor-Ready Verification</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Only businesses with verified high Empowr Scores (80+), demonstrated traction, and completed profiles 
              are featured in Capital Connect. All financial data and business metrics are independently verified 
              through our AI-driven analysis and third-party validation partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}