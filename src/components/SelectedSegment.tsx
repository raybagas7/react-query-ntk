'use client';
import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

const SelectedSegment = () => {
  const segment = useSelectedLayoutSegment();
  console.log(segment);

  return (
    <div>
      <div>Selected</div>
      <p>Segment: {segment}</p>
    </div>
  );
};

export default SelectedSegment;
