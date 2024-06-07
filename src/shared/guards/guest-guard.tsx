'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { GuardProps } from 'shared/types/auth';

const GuestGuard = ({ children }: GuardProps) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const res: any = await fetch('/api/auth/protected');
            const json = await res?.json();
            if (json?.protected) {
                router.push('/dashboard/default');
            }
        };
        fetchData();
        
    }, [session]);

    return <>{children}</>;
};

export default GuestGuard;
