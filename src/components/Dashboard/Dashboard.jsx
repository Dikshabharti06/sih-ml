import React, { useState } from 'react';
import { Users, FileText, LayoutDashboard, Bell, ChevronLeft, ChevronRight, Info, X, Check } from 'lucide-react';

export default function BankAdminPortal() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [activeTab, setActiveTab] = useState('repayment');

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

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
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
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${
              currentPage === 'dashboard' 
                ? 'text-gray-700 bg-blue-50 border-l-4 border-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>
          <button 
            onClick={() => setCurrentPage('beneficiaries')}
            className={`w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg font-medium ${
              currentPage === 'beneficiaries' 
                ? 'text-gray-700 bg-blue-50 border-l-4 border-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Users className="w-5 h-5" />
            Beneficiaries
          </button>
          <button 
            onClick={() => setCurrentPage('reports')}
            className={`w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg font-medium ${
              currentPage === 'reports' 
                ? 'text-gray-700 bg-blue-50 border-l-4 border-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-5 h-5" />
            Reports
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
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
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                BO
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard View */}
        {currentPage === 'dashboard' && (
          <div className="p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Total Beneficiaries</p>
                <p className="text-4xl font-bold text-gray-800">1000</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Pending Applications</p>
                <p className="text-4xl font-bold text-orange-500">20</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Total Disbursed</p>
                <p className="text-4xl font-bold text-green-600">₹1 Cr</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <p className="text-sm text-gray-500 mb-2">High-Risk Profiles</p>
                <p className="text-4xl font-bold text-red-500">40</p>
              </div>
            </div>
            <div className='mt-5 flex flex-nowrap justify-self-center'>
                <button 
            onClick={() => setShowAnalysis(true)}
            className='px-4 py-4 mt-2 rounded-lg font-bold text-gray-700 bg-blue-100 hover:bg-orange-500 hover:text-white'
          >
            Lending Scorecard
                </button>
                </div>
            </div>
        )
}


        {/* Beneficiaries View */}
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
                <input 
                  type="text" 
                  placeholder="Search by Name or ID..." 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                  Add Beneficiary
                </button>
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
                          <button 
                            onClick={() => setShowAnalysis(true)}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 border-t flex items-center justify-between">
                <p className="text-sm text-gray-600">Showing 1 to 10 of 12,540 results</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">2</button>
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">...</button>
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reports View */}
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
                      <option>Portfolio Risk Analysis</option>
                      <option>Repayment Performance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                    <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="dd-mm-yyyy" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                    <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="dd-mm-yyyy" />
                  </div>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                    Generate
                  </button>
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
                          <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                            Download ({report.format})
                          </span>
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

      {/* Analysis Model */}
      {showAnalysis && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Beneficiary Analysis</h2>
              <button 
                onClick={() => setShowAnalysis(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="border-b">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('repayment')}
                  className={`px-8 py-4 font-semibold ${
                    activeTab === 'repayment'
                      ? 'text-gray-800 border-b-2 border-gray-800'
                      : 'text-gray-400'
                  }`}
                >
                  Repayment Analysis
                </button>
                <button
                  onClick={() => setActiveTab('income')}
                  className={`px-8 py-4 font-semibold ${
                    activeTab === 'income'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-400'
                  }`}
                >
                  Income & Need Analysis
                </button>
              </div>
            </div>

            {activeTab === 'repayment' && (
              <div className="p-8 space-y-6">
                <div>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">On-Time Payment Percentage:</span>{' '}
                    <span className="text-green-600 font-bold">100%</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Number of Repeat Loans:</span>{' '}
                    <span className="font-bold">2</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Longest Loan Tenure Completed:</span>{' '}
                    <span className="font-bold">24 months</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-700">
                    <span className="font-semibold">Behavioral Notes:</span>{' '}
                    <span className="text-gray-600">All EMIs paid consistently within the first 5 days of the due date.</span>
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'income' && (
              <div className="p-8">
                <h2 className='text-gray-800 font-bold'>INCOME</h2>
                <p className="text-gray-600">Owns a retail shop.</p>
                <p className="text-gray-600 font-bold">Annual Income: <span>1,50,000 INR</span></p> 
              <div>
                <h2 className='text-gray-800 font-bold'>NEEDS</h2>
                <p className="text-gray-600">1.Needs an education loan.</p>
                <p className="text-gray-600 flex-wrap">2. Needs money for stock purchases and renovation of the shop. </p>
              </div>
              </div>
            )}

            <div className="sticky bottom-0 bg-gray-50 border-t p-6 flex justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600">
                <Info className="w-5 h-5" />
                Request More Info
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600">
                <X className="w-5 h-5" />
                Reject
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
                <Check className="w-5 h-5" />
                Approve Digitally
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}