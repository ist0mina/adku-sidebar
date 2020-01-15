import * as React from 'react';

export interface IAdkuSidebar {
    wrapperClassName?: string;
    sidebarClassName?: string;
    contentClassName?: string;
    show?: boolean;
    over?: boolean;
    children: React.ReactNode | React.ReactNode[];
    sidebar: React.ReactNode;
    wrapperHeight?: number;
};