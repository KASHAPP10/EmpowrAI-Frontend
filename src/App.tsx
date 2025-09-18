import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import BusinessDashboard from './components/BusinessDashboard';
import LenderDashboard from './components/LenderDashboard';
import VCConnection from './components/VCConnection';
import EducationHub from './components/EducationHub';
import TransparencyPanel from './components/TransparencyPanel';
import ImpactPage from './components/ImpactPage';
import Navigation from './components/Navigation';
import AIAssistant from './components/AIAssistant';

export type UserType = 'business' | 'lender' | null;

function App() {
  const [userType, setUserType] = useState<UserType>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [assessmentData, setAssessmentData] = useState<any>(null);

  const handleLogin = (type: UserType, assessmentResult?: any) => {
    setUserType(type);
    setIsLoggedIn(true);
    if (assessmentResult) {
      setAssessmentData(assessmentResult);
    }
  };

  const handleLogout = () => {
    setUserType(null);
    setIsLoggedIn(false);
    setAssessmentData(null);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation userType={userType} onLogout={handleLogout} />
        <main className="pt-16">
          <Routes>
            <Route 
              path="/" 
              element={userType === 'business' ? <BusinessDashboard assessmentData={assessmentData} /> : <LenderDashboard />} 
            />
            <Route path="/vc-connect" element={<VCConnection />} />
            <Route path="/education" element={<EducationHub />} />
            <Route path="/transparency" element={<TransparencyPanel />} />
            <Route path="/impact" element={<ImpactPage />} />
          </Routes>
        </main>
        <AIAssistant />
      </div>
    </Router>
  );
}

export default App;