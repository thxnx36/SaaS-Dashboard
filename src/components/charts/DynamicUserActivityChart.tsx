'use client';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useStore } from '@/store/useStore';

const data = [
  { name: 'Mon', users: 120, active: 80 },
  { name: 'Tue', users: 150, active: 100 },
  { name: 'Wed', users: 180, active: 120 },
  { name: 'Thu', users: 190, active: 130 },
  { name: 'Fri', users: 220, active: 170 },
  { name: 'Sat', users: 200, active: 160 },
  { name: 'Sun', users: 160, active: 120 },
];

export default function DynamicUserActivityChart() {
  const isDarkMode = useStore((state) => state.isDarkMode);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
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
        <Area 
          type="monotone" 
          dataKey="users" 
          stroke="#ff6fd6" 
          fill="#ff6fd6" 
          fillOpacity={0.2}
        />
        <Area 
          type="monotone" 
          dataKey="active" 
          stroke="#63dcf1" 
          fill="#63dcf1" 
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}