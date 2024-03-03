'use client';
import SelectedSegment from '@/components/SelectedSegment';
import Link from 'next/link';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <section>
        <nav className="p-3 bg-blue-600 flex justify-between">
          <div>
            <p>NAVIGATION</p>
          </div>
          <div>
            <ul className="flex gap-3">
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/dashboard'}>Dahsboard</Link>
              </li>
              <li>
                <Link href={'/dashboard/setting'}>Setting</Link>
              </li>
            </ul>
          </div>
        </nav>
        <SelectedSegment />
        <div>{children}</div>
      </section>
    </QueryClientProvider>
  );
};

export default DashboardLayout;
