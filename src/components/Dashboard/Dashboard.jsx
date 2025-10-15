import React, { useState } from 'react';
import { Users, FileText, LayoutDashboard, Bell, ChevronLeft, ChevronRight, Info, X, Check, Home, Upload, AlertCircle } from 'lucide-react';
import { CheckCircle, Circle } from 'lucide-react';

export default function CompletePortalSystem() {
  const [portalMode, setPortalMode] = useState('landing');
  const [currentPage, setCurrentPage] = useState('home');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [activeTab, setActiveTab] = useState('repayment');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authScreen, setAuthScreen] = useState('login');
  const [authType, setAuthType] = useState('bank');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [beneficiaryView, setBeneficiaryView] = useState('dashboard');

  const beneficiaries = [
    { id: 'NBCFDC-45721', name: 'Ramesh Kumar', location: 'Jabalpur, MP', score: 780, scoreColor: 'text-green-600', risk: 'Low Risk→High Need' },
    { id: 'NBCFDC-45722', name: 'Sunita Devi', location: 'Sagar, MP', score: 620, scoreColor: 'text-yellow-600', risk: 'Low Risk→High Need' },
    { id: 'NBCFDC-45723', name: 'Amit Singh', location: 'Bhopal, MP', score: 450, scoreColor: 'text-red-600', risk: 'High Risk→High Need' },
    { id: 'NBCFDC-45724', name: 'Priya Sharma', location: 'Indore, MP', score: 810, scoreColor: 'text-green-600', risk: 'Low Risk→Low Need' },
  ];

  const reports = [
    { name: 'Portfolio Risk Analysis', dateRange: '01-Sep-2025 to 30-Sep-2025', generatedOn: '01-Oct-2025', generatedBy: 'R. Sharma', format: 'PDF' },
    { name: 'Loan Disbursement Summary', dateRange: '01-Jul-2025 to 30-Sep-2025', generatedOn: '01-Oct-2025', generatedBy: 'A. Verma', format: 'CSV' },
    { name: 'Repayment Performance', dateRange: '01-Jan-2025 to 30-Jun-2025', generatedOn: '02-Jul-2025', generatedBy: 'R. Sharma', format: 'PDF' },
  ];

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setPortalMode(type);
    setShowAuthModal(false);
    setCurrentPage(type === 'bank' ? 'dashboard' : 'beneficiary-dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPortalMode('landing');
    setCurrentPage('home');
  };

  if (portalMode === 'landing') {
    return (
      <>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold">JanSamarth</span>
              </div>
              <div className="flex gap-4">
                <button onClick={() => { setAuthScreen('login'); setShowAuthModal(true); }} className="px-6 py-2 border border-blue-900 text-blue-900 rounded-lg font-medium hover:bg-gray-50">
                  Login
                </button>
                <button onClick={() => { setAuthScreen('register'); setShowAuthModal(true); }} className="px-6 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800">
                  Register
                </button>
              </div>
            </div>
          </nav>

          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-12">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">Partner Banks and Key Stakeholders</h1>
                <p className="text-lg text-gray-600 mb-8">Various Ministries, Nodal Agencies and Lenders came together on a single Platform to ensure fast, smooth and secure subsidy availing process for beneficiaries.</p>
                <div className="flex gap-12">
                  <div>
                    <h3 className="text-4xl font-bold text-blue-900">8+</h3>
                    <p className="text-gray-600">Ministries</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-blue-900">10+</h3>
                    <p className="text-gray-600">Nodal Agencies</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-blue-900">200+</h3>
                    <p className="text-gray-600">Lenders on Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showAuthModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
              <button onClick={() => setShowAuthModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
              
              {authScreen === 'login' && (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
                  <div className="flex gap-4 mb-6 border-b">
                    <button onClick={() => setAuthType('bank')} className={`flex-1 pb-3 font-medium ${authType === 'bank' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>
                      Bank Portal
                    </button>
                    <button onClick={() => setAuthType('beneficiary')} className={`flex-1 pb-3 font-medium ${authType === 'beneficiary' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>
                      Beneficiary Portal
                    </button>
                  </div>
                  <div className="space-y-4">
                    <input type="text" placeholder={authType === 'bank' ? 'Bank ID / Email' : 'Email / Aadhar'} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    <button onClick={() => handleLogin(authType)} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                      Sign In
                    </button>
                  </div>
                  <p className="text-center mt-6 text-sm text-gray-600">
                    Don't have an account? <button onClick={() => setAuthScreen('register')} className="text-blue-600 font-medium">Create account</button>
                  </p>
                </div>
              )}

              {authScreen === 'register' && (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
                  <div className="flex gap-4 mb-6 border-b">
                    <button onClick={() => setAuthType('bank')} className={`flex-1 pb-3 font-medium ${authType === 'bank' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>
                      Bank
                    </button>
                    <button onClick={() => setAuthType('beneficiary')} className={`flex-1 pb-3 font-medium ${authType === 'beneficiary' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>
                      Beneficiary
                    </button>
                  </div>
                  <div className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    <button onClick={() => handleLogin(authType)} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                      Register
                    </button>
                  </div>
                  <p className="text-center mt-6 text-sm text-gray-600">
                    Already have an account? <button onClick={() => setAuthScreen('login')} className="text-blue-600 font-medium">Sign in</button>
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }

  if (portalMode === 'bank') {
    return (
      <div className="flex h-screen bg-gray-50">
        <div className="w-64 bg-white shadow-sm">
          <div className="p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-800">Admin Portal</span>
            </div>
          </div>
          <nav className="p-4">
            <button onClick={() => setCurrentPage('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${currentPage === 'dashboard' ? 'text-gray-700 bg-blue-50 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
              <LayoutDashboard className="w-5 h-5" />Dashboard
            </button>
            <button onClick={() => setCurrentPage('beneficiaries')} className={`w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg font-medium ${currentPage === 'beneficiaries' ? 'text-gray-700 bg-blue-50 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
              <Users className="w-5 h-5" />Beneficiaries
            </button>
            <button onClick={() => setCurrentPage('reports')} className={`w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg font-medium ${currentPage === 'reports' ? 'text-gray-700 bg-blue-50 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
              <FileText className="w-5 h-5" />Reports
            </button>
          </nav>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="bg-white shadow-sm border-b px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {currentPage === 'dashboard' && 'Bank Dashboard'}
                  {currentPage === 'beneficiaries' && 'Beneficiary Management'}
                  {currentPage === 'reports' && 'Reports & Analytics'}
                </h1>
                <p className="text-sm text-gray-500 mt-1">State Bank of India - Jabalpur Branch</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                  <Bell className="w-5 h-5 text-gray-600" />
                </button>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">BO</div>
                <button onClick={handleLogout} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Logout</button>
          </div>

          {currentPage === 'beneficiary-dashboard' && (
            <div className="min-h-screen bg-gray-50 p-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                    + Apply for New Loan
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h2 className="text-xl font-semibold mb-6">Loan Application Status (L-2025-A01)</h2>
                      
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex flex-col items-center flex-1">
                          <div className="flex items-center w-full">
                            <div className="bg-green-500 rounded-full p-2">
                              <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 h-1 bg-green-500"></div>
                          </div>
                          <div className="text-center mt-3">
                            <p className="font-medium text-sm">Application Submitted</p>
                            <p className="text-xs text-gray-500">Oct 01, 2025</p>
                          </div>
                        </div>

                        <div className="flex flex-col items-center flex-1">
                          <div className="flex items-center w-full">
                            <div className="bg-green-500 rounded-full p-2">
                              <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 h-1 bg-gray-300"></div>
                          </div>
                          <div className="text-center mt-3">
                            <p className="font-medium text-sm">Document Verification</p>
                            <p className="text-xs text-gray-500">Oct 03, 2025</p>
                          </div>
                        </div>

                        <div className="flex flex-col items-center flex-1">
                          <div className="flex items-center w-full">
                            <div className="bg-blue-500 rounded-full p-2 flex items-center justify-center w-10 h-10">
                              <span className="text-white font-semibold">3</span>
                            </div>
                            <div className="flex-1 h-1 bg-gray-300"></div>
                          </div>
                          <div className="text-center mt-3">
                            <p className="font-medium text-sm">Bank Approval</p>
                            <p className="text-xs text-blue-500">In Progress</p>
                          </div>
                        </div>

                        <div className="flex flex-col items-center flex-1">
                          <div className="flex items-center w-full">
                            <div className="bg-gray-300 rounded-full p-2 flex items-center justify-center w-10 h-10">
                              <span className="text-gray-600 font-semibold">4</span>
                            </div>
                          </div>
                          <div className="text-center mt-3">
                            <p className="font-medium text-sm">Loan Disbursal</p>
                            <p className="text-xs text-gray-500">Pending</p>
                          </div>
                        </div>
                      </div>

                      <button className="bg-blue-50 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-100">
                        View Application
                      </button>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h2 className="text-xl font-semibold mb-6">Loan History</h2>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 text-gray-600 font-medium">LOAN ID</th>
                              <th className="text-left py-3 px-4 text-gray-600 font-medium">AMOUNT</th>
                              <th className="text-left py-3 px-4 text-gray-600 font-medium">DATE</th>
                              <th className="text-left py-3 px-4 text-gray-600 font-medium">STATUS</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-4 px-4">L-2023-458</td>
                              <td className="py-4 px-4">₹ 20,000</td>
                              <td className="py-4 px-4">15-Mar-2023</td>
                              <td className="py-4 px-4">
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                  Paid Off
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-4 px-4">L-2021-102</td>
                              <td className="py-4 px-4">₹ 15,000</td>
                              <td className="py-4 px-4">01-Feb-2021</td>
                              <td className="py-4 px-4">
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                  Paid Off
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h2 className="text-xl font-semibold mb-6">Your Opportunity Score</h2>
                      
                      <div className="flex flex-col items-center">
                        <div className="relative w-48 h-48">
                          <svg className="w-48 h-48 transform -rotate-90">
                            <circle
                              cx="96"
                              cy="96"
                              r="80"
                              stroke="#e5e7eb"
                              strokeWidth="16"
                              fill="none"
                            />
                            <circle
                              cx="96"
                              cy="96"
                              r="80"
                              stroke="#22c55e"
                              strokeWidth="16"
                              fill="none"
                              strokeDasharray={502}
                              strokeDashoffset={50}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-bold text-green-600">750</span>
                            <span className="text-green-600 font-semibold">Excellent</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-center mt-4 text-sm">
                          Based on your CIBIL score
                        </p>
                      </div>

                      <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-medium mt-6">
                        View Detailed Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'my-loans' && (
            <div className="p-6">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">My Loans</h1>

                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-xl font-semibold">Active Loan: L-2025-A01</h2>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium">
                      Pay Next EMI: ₹2,210
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-6 mb-6">
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Next Due Date</p>
                      <p className="font-semibold text-lg">05-Nov-2025</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">EMI</p>
                      <p className="font-semibold text-lg">₹2,210</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Interest Rate</p>
                      <p className="font-semibold text-lg">8.5%</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Remaining Tenure</p>
                      <p className="font-semibold text-lg">18 months</p>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Loan Progress</span>
                      <span className="text-gray-800 font-medium">₹15,000 / ₹25,000 Paid</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Payment History (L-2025-A01)</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 text-gray-600 font-medium">TRANSACTION ID</th>
                          <th className="text-left py-3 px-4 text-gray-600 font-medium">DATE</th>
                          <th className="text-left py-3 px-4 text-gray-600 font-medium">AMOUNT PAID</th>
                          <th className="text-left py-3 px-4 text-gray-600 font-medium">STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-4 px-4">PAY-001254</td>
                          <td className="py-4 px-4">05-Oct-2025</td>
                          <td className="py-4 px-4">₹2,210</td>
                          <td className="py-4 px-4">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                              Successful
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'upload-documents' && (
            <div className="p-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">Upload Documents</h2>
                <p className="text-gray-600 mb-6">Upload required documents for your loan application.</p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Drag and drop files here or click to browse</p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'grievances' && (
            <div className="p-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">Grievances</h2>
                <p className="text-gray-600 mb-6">Submit and track your grievances here.</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
                  Submit New Grievance
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
          {currentPage === 'dashboard' && (
            <div className="p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">Total Beneficiaries</p>
                  <p className="text-4xl font-bold text-gray-800">12,540</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">Pending Applications</p>
                  <p className="text-4xl font-bold text-orange-500">72</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">Total Disbursed</p>
                  <p className="text-4xl font-bold text-green-600">₹8.5 Cr</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <p className="text-sm text-gray-500 mb-2">High-Risk Profiles</p>
                  <p className="text-4xl font-bold text-red-500">421</p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'beneficiaries' && (
            <div className="p-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold text-gray-800">All Beneficiaries</h2>
                  <p className="text-sm text-gray-500 mt-1">Search, filter, and manage all individuals in the system.</p>
                </div>
                <div className="p-6 border-b flex gap-4">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Filter by Risk Band...</option>
                  </select>
                  <input type="text" placeholder="Search by Name or ID..." className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm" />
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Add Beneficiary</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Beneficiary ID</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Location</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Credit Score</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Risk Band</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {beneficiaries.map((ben) => (
                        <tr key={ben.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-800">{ben.id}</td>
                          <td className="px-6 py-4 text-sm text-gray-800">{ben.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{ben.location}</td>
                          <td className="px-6 py-4 text-sm font-semibold">
                            <span className={ben.scoreColor}>{ben.score}</span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{ben.risk}</td>
                          <td className="px-6 py-4 text-sm">
                            <button onClick={() => setShowAnalysis(true)} className="text-blue-600 hover:text-blue-800 font-medium">View Profile</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t flex items-center justify-between">
                  <p className="text-sm text-gray-600">Showing 1 to 10 of 12,540 results</p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50"><ChevronLeft className="w-4 h-4" /></button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                    <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">2</button>
                    <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">...</button>
                    <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'reports' && (
            <div className="p-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold text-gray-800">Generate New Report</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-4 items-end">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                        <option>Loan Disbursement Summary</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                      <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                      <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Generate</button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-bold text-gray-800">Recently Generated Reports</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Report Name</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date Range</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Generated On</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Generated By</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {reports.map((report, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-800">{report.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{report.dateRange}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{report.generatedOn}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{report.generatedBy}</td>
                          <td className="px-6 py-4 text-sm">
                            <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">View</span>
                            <span className="mx-2 text-gray-300">|</span>
                            <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">Download ({report.format})</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {showAnalysis && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto">
              <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Beneficiary Analysis</h2>
                <button onClick={() => setShowAnalysis(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="border-b">
                <div className="flex">
                  <button onClick={() => setActiveTab('repayment')} className={`px-8 py-4 font-semibold ${activeTab === 'repayment' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-400'}`}>
                    Repayment Analysis
                  </button>
                  <button onClick={() => setActiveTab('income')} className={`px-8 py-4 font-semibold ${activeTab === 'income' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}>
                    Income & Need Analysis
                  </button>
                </div>
              </div>
              {activeTab === 'repayment' && (
                <div className="p-8 space-y-6">
                  <div><p className="text-lg text-gray-700"><span className="font-semibold">On-Time Payment Percentage:</span> <span className="text-green-600 font-bold">100%</span></p></div>
                  <div><p className="text-lg text-gray-700"><span className="font-semibold">Number of Repeat Loans:</span> <span className="font-bold">2</span></p></div>
                  <div><p className="text-lg text-gray-700"><span className="font-semibold">Longest Loan Tenure Completed:</span> <span className="font-bold">24 months</span></p></div>
                  <div><p className="text-lg text-gray-700"><span className="font-semibold">Behavioral Notes:</span> <span className="text-gray-600">All EMIs paid consistently within the first 5 days of the due date.</span></p></div>
                </div>
              )}
              {activeTab === 'income' && (
                <div className="p-8"><p className="text-gray-600">Income and need analysis data would be displayed here.</p></div>
              )}
              <div className="sticky bottom-0 bg-gray-50 border-t p-6 flex justify-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600"><Info className="w-5 h-5" />Request More Info</button>
                <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600"><X className="w-5 h-5" />Reject</button>
                <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"><Check className="w-5 h-5" />Approve Digitally</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (portalMode === 'beneficiary') {
    return(
      <div>
      <div className="flex h-screen bg-gray-50">
        <div className="w-64 bg-white shadow-sm">
          <div className="p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold">My Portal</span>
            </div>
          </div>
          </div>
          <nav className="p-4">
            <button onClick={() => setCurrentPage('beneficiary-dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${currentPage === 'beneficiary-dashboard' ? 'text-gray-700 bg-blue-50 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
              <LayoutDashboard className="w-5 h-5" />Dashboard
            </button>
            <button onClick={() => setCurrentPage('my-loans')} className={`w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg font-medium ${currentPage === 'my-loans' ? 'text-gray-700 bg-blue-50 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
              <FileText className="w-5 h-5" />My Loans
            </button>
            <button onClick={() => setCurrentPage('upload-documents')} className={`w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg font-medium ${currentPage === 'upload-documents' ? 'text-gray-700 bg-blue-50 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
              <Upload className="w-5 h-5" />Upload Documents
            </button>
            <button onClick={() => setCurrentPage('grievances')} className={`w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg font-medium ${currentPage === 'grievances' ? 'text-gray-700 bg-blue-50 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
              <AlertCircle className="w-5 h-5" />Grievances
            </button>
          </nav>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="bg-white shadow-sm border-b px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Welcome, Sunita Devi</h1>
            <button onClick={handleLogout} className="px-4 py-2 border border-gray-600 rounded-lg bg-white text-black">
              Logout
            </button>
            </div>
            </div>
            </div>
    )
            }
            }