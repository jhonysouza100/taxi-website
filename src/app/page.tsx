"use client"

import dynamic from 'next/dynamic'
 
const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/home/Home'),
  { ssr: false }
)

function page() {
  return (
    <DynamicComponentWithNoSSR />
  );
}

export default page;