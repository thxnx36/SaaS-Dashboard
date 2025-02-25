'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicChart = dynamic(() => import('./DynamicSalesChart'), {
  ssr: false,
});

export function SalesChart() {
  return (
    <Suspense fallback={<div>Loading chart...</div>}>
      <DynamicChart />
    </Suspense>
  );
}