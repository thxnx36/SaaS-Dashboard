'use client';
import { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with Search and Filter */}
      <div className="sticky top-0 z-10 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-full px-4 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate">
                Users Management
              </h1>

              {/* Stats for larger screens */}
              <div className="hidden sm:grid sm:grid-cols-2 gap-2">
                <div className="bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Users</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">256</p>
                </div>
                <div className="bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Active</p>
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400">230</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 min-w-0">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search users..."
                  className="block w-full pl-9 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="flex gap-2 shrink-0">
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <FunnelIcon className="h-4 w-4 mr-1.5 text-gray-400" />
                  Filter
                </button>
                <button className="inline-flex items-center px-3 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  + Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="sm:hidden px-4 pb-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm">
              <p className="text-xs text-gray-500 dark:text-gray-400">Total Users</p>
              <p className="text-base font-semibold text-gray-900 dark:text-white">256</p>
            </div>
            <div className="bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm">
              <p className="text-xs text-gray-500 dark:text-gray-400">Active</p>
              <p className="text-base font-semibold text-green-600 dark:text-green-400">230</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}