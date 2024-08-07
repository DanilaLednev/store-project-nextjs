import { cls } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const Container: React<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return <div className={cls('mx-auto max-w-[1280px]', className)}>{children}</div>;
};
