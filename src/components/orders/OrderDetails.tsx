'use client';

type OrderDetailsProps = {
  order: {
    id: string;
    customer: string;
    date: string;
    status: string;
    total: number;
  };
  onClose: () => void;
};

export default function OrderDetails({ order, onClose }: OrderDetailsProps) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white dark:bg-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Order Details
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Order ID
            </label>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{order.id}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Customer
            </label>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{order.customer}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Date
            </label>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{order.date}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Status
            </label>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">{order.status}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Total
            </label>
            <p className="mt-1 text-sm text-gray-900 dark:text-white">
              ${order.total.toFixed(2)}
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}