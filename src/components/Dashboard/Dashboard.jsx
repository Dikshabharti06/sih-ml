import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Users, FileText, LayoutDashboard, Bell } from 'lucide-react';

export default function Dashboard() {
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
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 bg-blue-50 rounded-lg border-l-4 border-blue-600 font-medium">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 mt-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Users className="w-5 h-5" />
            <NavLink
                                to="/beneficiary"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Beneficiaries
                                </NavLink>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 mt-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <FileText className="w-5 h-5" />
            <NavLink
                                to="/reports"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                  Reports
                                </NavLink>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white shadow-sm border-b px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Bank Dashboard</h1>
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

        {/* Dashboard Cards */}
        <div className="p-8">
          <div className="grid grid-cols-2 gap-6">
            {/* Total Beneficiaries */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Total Beneficiaries</p>
              <p className="text-4xl font-bold text-gray-800">12,540</p>
            </div>

            {/* Pending Applications */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Pending Applications</p>
              <p className="text-4xl font-bold text-orange-500">72</p>
            </div>

            {/* Total Disbursed */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Total Disbursed</p>
              <p className="text-4xl font-bold text-green-600">₹8.5 Cr</p>
            </div>

            {/* High-Risk Profiles */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <p className="text-sm text-gray-500 mb-2">High-Risk Profiles</p>
              <p className="text-4xl font-bold text-red-500">421</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}