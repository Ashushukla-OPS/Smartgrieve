import React from "react";
import {
  Home,
  FileText,
  PlusCircle,
  Bell,
  Megaphone,
  BookOpen,
  Settings,
  HelpCircle,
  MapPin,
  User,
  Clock3,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

const CitizenDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F5F8FC] flex">
      {/* ================= SIDEBAR ================= */}
      <div className="w-[270px] bg-white border-r border-gray-200 min-h-screen p-6">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-700">
            Smart<span className="text-gray-800">Grieve</span>
          </h1>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 bg-blue-100 text-blue-700 font-semibold px-4 py-4 rounded-2xl">
            <Home size={20} />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-4 rounded-2xl transition">
            <FileText size={20} />
            My Complaints
          </button>

          <button className="w-full flex items-center justify-between bg-blue-600 text-white px-4 py-4 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <PlusCircle size={20} />
              New Complaint
            </div>
            →
          </button>

          <button className="w-full flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-4 rounded-2xl transition">
            <Bell size={20} />
            Notifications
          </button>

          <button className="w-full flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-4 rounded-2xl transition">
            <Megaphone size={20} />
            Announcements
          </button>

          <button className="w-full flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-4 rounded-2xl transition">
            <BookOpen size={20} />
            Knowledge Base
          </button>

          <button className="w-full flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-4 rounded-2xl transition">
            <Settings size={20} />
            Profile Settings
          </button>

          <button className="w-full flex items-center gap-3 text-gray-600 hover:bg-gray-100 px-4 py-4 rounded-2xl transition">
            <HelpCircle size={20} />
            Help & Support
          </button>
        </div>

        <div className="mt-10 bg-gradient-to-br from-blue-50 to-white border rounded-3xl p-5">
          <p className="text-sm text-gray-600 font-medium">
            Track your grievances and stay updated in real time.
          </p>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="bg-white rounded-2xl p-5 shadow-sm flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <MapPin size={18} />
            Bhopal
          </div>

          <div className="flex items-center gap-5">
            <Bell className="text-gray-500 cursor-pointer" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                A
              </div>

              <div>
                <h3 className="font-semibold">Ashutosh</h3>
                <p className="text-sm text-gray-500">Citizen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <User size={40} className="text-blue-600" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Welcome back, Ashutosh! 👋
                </h2>

                <p className="text-gray-600 mt-2">
                  Let’s make Bhopal better together.
                </p>

                <div className="flex gap-8 mt-4 text-sm text-gray-600">
                  <p>📍 City: Bhopal</p>
                  <p>🏢 Ward: 12</p>
                  <p>👤 Role: Citizen</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">
              Register a New Complaint
            </h3>

            <p className="text-blue-100 mb-6">
              We’re here to help. Let’s get it resolved.
            </p>

            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl w-full">
              + Register Complaint
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {[
            {
              title: "Total Complaints",
              value: "28",
              icon: <FileText className="text-blue-600" />,
            },
            {
              title: "Pending",
              value: "6",
              icon: <Clock3 className="text-yellow-500" />,
            },
            {
              title: "In Progress",
              value: "8",
              icon: <AlertCircle className="text-blue-500" />,
            },
            {
              title: "Resolved",
              value: "12",
              icon: <CheckCircle className="text-green-500" />,
            },
            {
              title: "Rejected",
              value: "2",
              icon: <XCircle className="text-red-500" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-sm border"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <h2 className="text-3xl font-bold">{item.value}</h2>
                </div>

                <div>{item.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Complaints + Right Panel */}
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT SIDE */}
          <div className="col-span-8 bg-white rounded-3xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6">
              My Recent Complaints
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Pothole on MG Road",
                  status: "In Progress",
                  priority: "High",
                },
                {
                  title: "Garbage not collected",
                  status: "Pending",
                  priority: "Medium",
                },
                {
                  title: "Street light not working",
                  status: "Assigned",
                  priority: "Medium",
                },
                {
                  title: "Drainage overflow",
                  status: "Resolved",
                  priority: "High",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Submitted recently • Bhopal
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                      {item.status}
                    </span>

                    <span className="px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium">
                      {item.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-4 bg-white rounded-3xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold">
                Complaint at a Glance
              </h2>

              <button className="text-blue-600 font-medium text-sm">
                View Details
              </button>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 mb-5">
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                In Progress
              </span>

              <h3 className="font-bold text-lg mt-3">
                Pothole on MG Road
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Large pothole on MG Road near Bharat Talkies is causing
                vehicle damage and traffic disruption.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Location</span>
                <span className="font-medium">MG Road</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">City</span>
                <span className="font-medium">Bhopal</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Ward Number</span>
                <span className="font-medium">12</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className="text-blue-600 font-medium">
                  In Progress
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Priority</span>
                <span className="text-red-500 font-medium">High</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Department</span>
                <span className="font-medium">
                  Roads Department
                </span>
              </div>
            </div>

            {/* Status Tracker */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Status Tracker</h3>

              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500"></div>
                  <p className="text-xs mt-2">Submitted</p>
                </div>

                <div className="flex-1 h-1 bg-green-400 mx-2"></div>

                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500"></div>
                  <p className="text-xs mt-2">Assigned</p>
                </div>

                <div className="flex-1 h-1 bg-blue-400 mx-2"></div>

                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                  <p className="text-xs mt-2">In Progress</p>
                </div>

                <div className="flex-1 h-1 bg-gray-300 mx-2"></div>

                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-400"></div>
                  <p className="text-xs mt-2">Resolved</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CitizenDashboard;