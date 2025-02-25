'use client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useStore } from '@/store/useStore';

const data = [
  { name: 'Jan', sales: 4000, target: 4500 },
  { name: 'Feb', sales: 3000, target: 3500 },
  { name: 'Mar', sales: 2000, target: 2500 },
  { name: 'Apr', sales: 2780, target: 2800 },
  { name: 'May', sales: 1890, target: 2000 },
  { name: 'Jun', sales: 2390, target: 2300 },
];

export default function DynamicSalesChart() {
  const isDarkMode = useStore((state) => state.isDarkMode);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke={isDarkMode ? '#374151' : '#E5E7EB'}
        />
        <XAxis 
          dataKey="name" 
          stroke={isDarkMode ? '#9CA3AF' : '#6B7280'}
        />
        <YAxis 
          stroke={isDarkMode ? '#9CA3AF' : '#6B7280'}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
            borderColor: isDarkMode ? '#374151' : '#E5E7EB',
            color: isDarkMode ? '#FFFFFF' : '#000000',
          }}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="sales" 
          stroke="#3babf6" 
          strokeWidth={2}
          dot={{ fill: '#3babf6' }}
        />
        <Line 
          type="monotone" 
          dataKey="target" 
          stroke="#ff0c9a" 
          strokeWidth={2}
          dot={{ fill: '#ff0c9a' }}
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}