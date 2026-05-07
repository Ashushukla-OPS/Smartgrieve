import React from "react";
import {
  LayoutDashboard,
  Building2,
  Users,
  MapPinned,
  Settings,
  LogOut,
  Bell,
  Search,
  Plus,
} from "lucide-react";

const stats = [
  {
    title: "TOTAL ACTIVE GRIEVANCES",
    value: "1,284",
    change: "+12%",
    sub: "vs. last 24 hours",
  },
  {
    title: "AVG RESOLUTION TIME",
    value: "4.2h",
    change: "-8%",
    sub: "Target: 6.0h",
  },
  {
    title: "AI ACCURACY",
    value: "98.4%",
    change: "Stable",
    sub: "Natural Language Processing",
  },
];

const departments = [
  {
    name: "Water & Sewage",
    tasks: 342,
    resolve: 5.8,
    sla: "92%",
    status: "EFFICIENT",
  },
  {
    name: "Solid Waste Mgmt",
    tasks: 215,
    resolve: 3.2,
    sla: "78%",
    status: "AT CAPACITY",
  },
  {
    name: "Public Lighting",
    tasks: 89,
    resolve: 12.4,
    sla: "65%",
    status: "DELAYED",
  },
  {
    name: "Parks & Recreation",
    tasks: 54,
    resolve: 24.5,
    sla: "98%",
    status: "OPTIMIZED",
  },
];

const SidebarItem = ({ icon: Icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
      active
        ? "bg-emerald-50 text-emerald-700 font-semibold"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    <Icon size={18} />
    <span>{label}</span>
  </div>
);

const CardBox = ({ children }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
    {children}
  </div>
);

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r p-5 flex flex-col justify-between">
        <div>
          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-800">Bhopal Admin</h1>
            <p className="text-sm text-gray-500">Municipal Corporation</p>
          </div>

          <div className="space-y-2">
            <SidebarItem icon={LayoutDashboard} label="Command Center" active />
            <SidebarItem icon={Building2} label="Department Queue" />
            <SidebarItem icon={Users} label="Citizen Portal" />
            <SidebarItem icon={MapPinned} label="Track Status" />
          </div>

          <button className="w-full mt-8 h-11 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700">
            Generate Report
          </button>
        </div>

        <div className="space-y-2">
          <SidebarItem icon={Settings} label="Settings" />
          <SidebarItem icon={LogOut} label="Logout" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Bhopal Civic Connect
            </h2>
            <p className="text-sm text-emerald-600 font-medium">
              ● SYSTEM LIVE
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-80">
              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search departments, reports..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 outline-none"
              />
            </div>

            <Bell className="text-gray-600" />
            <div className="w-10 h-10 rounded-full bg-emerald-200" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((item, index) => (
            <CardBox key={index}>
              <div className="p-6">
                <p className="text-xs text-gray-500 font-medium mb-2">
                  {item.title}
                </p>
                <h3 className="text-3xl font-bold text-gray-800">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {item.change} • {item.sub}
                </p>
              </div>
            </CardBox>
          ))}
        </div>

        {/* Map + Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <CardBox>
            <div className="lg:col-span-2 h-[430px] bg-gray-800 rounded-2xl flex items-center justify-center text-emerald-300 text-lg font-semibold">
              Smart City Heatmap Area
            </div>
          </CardBox>

          <CardBox>
            <div className="p-5">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold text-gray-800">Live Alerts</h3>
                <span className="text-xs text-red-500 font-semibold">
                  REAL-TIME
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-red-200 bg-red-50">
                  <p className="font-semibold">Main Pipeline Burst</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Critical water pipeline issue near MP Nagar Zone 2.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-gray-200">
                  <p className="font-semibold">Sewage Overflow</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Multiple reports from Arera Colony.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-gray-200">
                  <p className="font-semibold">Signal Malfunction</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Smart signal issue near Bittan Market.
                  </p>
                </div>
              </div>
            </div>
          </CardBox>
        </div>

        {/* Department Table */}
        <CardBox>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold">Department Performance</h3>
                <p className="text-sm text-gray-500">
                  Resource efficiency and SLA compliance metrics
                </p>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-xl border border-gray-300">
                  Filter
                </button>
                <button className="px-4 py-2 rounded-xl bg-emerald-600 text-white">
                  Export Data
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-4 p-4 rounded-xl border text-sm bg-white"
                >
                  <div className="font-medium">{dept.name}</div>
                  <div>{dept.tasks}</div>
                  <div>{dept.resolve} hrs</div>
                  <div>{dept.sla}</div>
                  <div className="font-semibold text-emerald-600">
                    {dept.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardBox>
      </main>

      {/* Floating Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700">
        <Plus />
      </button>
    </div>
  );
}
