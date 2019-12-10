import * as React from 'react';

export interface IAdkuSidebar {
    className?: string;
    show?: boolean;
    children: React.ReactNode[],
    sidebar: React.ReactNode
};