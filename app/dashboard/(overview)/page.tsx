import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import CardWrapper from '@/app/ui/dashboard/cards';
// 각 대시보드 UI 컴포넌트를 임포트합니다.

import { lusitana } from '@/app/ui/fonts';
// 사용자 지정 폰트를 임포트합니다.
import {  fetchCardData } from '@/app/lib/data'; 
// 데이터 패칭 로직을 임포트합니다.
import { Suspense } from 'react';
// 데이터 로딩 중 UI를 처리하기 위한 Suspense 컴포넌트를 임포트합니다.
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardSkeleton } from '@/app/ui/skeletons';
// 로딩 중 상태를 나타내기 위한 스켈레톤 컴포넌트들을 임포트합니다.

export default async function Page() {
   
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Suspense 컴포넌트를 사용하여 로딩 중에는 CardSkeleton 컴포넌트를 렌더링하고, 데이터 로딩이 완료되면 CardWrapper 컴포넌트를 렌더링합니다. */}
       <Suspense fallback={<CardSkeleton/>}>
        <CardWrapper/>
       </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* Suspense 컴포넌트를 사용하여 로딩 중에는 RevenueChartSkeleton 컴포넌트를 렌더링하고, 데이터 로딩이 완료되면 RevenueChart 컴포넌트를 렌더링합니다. */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        {/* Suspense 컴포넌트를 사용하여 로딩 중에는 LatestInvoicesSkeleton 컴포넌트를 렌더링하고, 데이터 로딩이 완료되면 LatestInvoices 컴포넌트를 렌더링합니다. */}
        <Suspense fallback={<LatestInvoicesSkeleton  />}>
         <LatestInvoices  />
        </Suspense>
        
      </div>
    </main>
  );
}