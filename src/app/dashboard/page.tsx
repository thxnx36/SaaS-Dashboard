'use client';

import { useAuth } from '@/hooks/useAuth';
import DynamicSalesChart from '@/components/charts/DynamicSalesChart';
import DynamicUserActivityChart from '@/components/charts/DynamicUserActivityChart';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="py-6 space-y-8">
      {/* Welcome Section */}
      <div className="border-b dark:border-gray-700 pb-6" style={{paddingLeft: '10px', paddingRight: '10px'}}>
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Welcome back, {user.name}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{paddingLeft: '10px', paddingRight: '10px'}}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</h3>
            <span className="flex items-center text-green-500 text-sm font-medium">
              <ArrowUpIcon className="w-4 h-4 mr-1" />
              12%
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$45,231</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">+$3,200 this month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Users</h3>
            <span className="flex items-center text-green-500 text-sm font-medium">
              <ArrowUpIcon className="w-4 h-4 mr-1" />
              8%
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">2,420</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">+180 this week</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">New Orders</h3>
            <span className="flex items-center text-red-500 text-sm font-medium">
              <ArrowDownIcon className="w-4 h-4 mr-1" />
              3%
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">182</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">-6 from yesterday</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Satisfaction</h3>
            <span className="flex items-center text-green-500 text-sm font-medium">
              <ArrowUpIcon className="w-4 h-4 mr-1" />
              5%
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">98%</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">+2% this month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{paddingLeft: '10px', paddingRight: '10px'}}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Sales Overview</h3>
          <DynamicSalesChart />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">User Activity</h3>
          <DynamicUserActivityChart />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6" style={{paddingLeft: '10px', paddingRight: '10px'}}>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4" style={{padding: '10px'}}>
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg" style={{padding: '10px'}}>
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-300">#{item}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  New order received
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Order #{1000 + item} has been placed
                </p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {item}h ago
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}