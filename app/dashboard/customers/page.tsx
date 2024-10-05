'use client';
import { usePathname } from 'next/navigation';
export default function Page() {
  const pathname = usePathname();
    return (<p > Customers Page {pathname} </p>

      
    );  
  }