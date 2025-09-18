import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, BookOpen, Shield, BarChart3, LogOut, Zap } from 'lucide-react';
import { UserType } from '../App';

interface NavigationProps {
  userType: UserType;
  onLogout: () => void;
}

export default function Navigation({ userType, onLogout }: NavigationProps) {
  const location = useLocation();

  const businessLinks = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/vc-connect', icon: Users, label: 'Capital Connect' },
    { path: '/education', icon: BookOpen, label: 'Education Hub' },
    { path: '/transparency', icon: Shield, label: 'Transparency' },
    { path: '/impact', icon: BarChart3, label: 'Impact' },
  ];

  const lenderLinks = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/vc-connect', icon: Users, label: 'Deal Flow' },
    { path: '/transparency', icon: Shield, label: 'Transparency' },
    { path: '/impact', icon: BarChart3, label: 'Impact' },
  ];

  const links = userType === 'business' ? businessLinks : lenderLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900 border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Empowr AI</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {links.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                        isActive
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300 capitalize">
              {userType} Account
            </span>
            <button
              onClick={onLogout}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}