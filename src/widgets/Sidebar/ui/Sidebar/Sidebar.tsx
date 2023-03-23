import React, {useState} from 'react';
import {classNames} from "shared";
import cls from './Sidebar.module.scss'
import {ThemeToggle} from "widgets/ThemeToggle";

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const sidebarToggle = () => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={sidebarToggle}>
                toggle
            </button>
            <ThemeToggle/>
        </div>
    );
}

