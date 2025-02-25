'use client';
import OrderTable from '@/components/orders/OrderTable';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

export default function OrdersPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">
              Orders
            </h1>
            <p className="mt-1 sm:mt-2 text-sm text-gray-600 dark:text-gray-400">
              Manage and track all your orders in one place
            </p>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Total Orders</p>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">1,234</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Pending</p>
              <p className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400">23</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm hidden sm:block">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Completed</p>
              <p className="text-lg sm:text-xl font-semibold text-green-600 dark:text-green-400">1,180</p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 text-xs sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search orders..."
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md shadow-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FunnelIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-gray-400" />
              Filter
            </button>
            <button className="inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              + New Order
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <OrderTable />
      </div>
    </div>
  );
}