import React, {useState} from 'react';
import {Button, classNames} from "shared";
import cls from './Sidebar.module.scss'
import {ThemeToggle} from "widgets/ThemeToggle";
import {useTranslation} from "react-i18next";
import {Translate} from "widgets/Translate";

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({className}) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const sidebarToggle = () => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={sidebarToggle}>
                {t("toggle")}
            </Button>
            <div className={cls.switchers}>
                <Translate className={cls.translate}/>
                <ThemeToggle/>
            </div>
        </div>
    );
}

