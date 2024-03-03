import SelectedSegment from '@/components/SelectedSegment';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <nav className="p-3 bg-blue-600">NAVIGATION</nav>
      <SelectedSegment />
      <div>{children}</div>
    </section>
  );
};

export default DashboardLayout;
