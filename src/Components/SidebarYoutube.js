
import React, { Component, createElement, useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu, Divider, ConfigProvider } from 'antd';
import { Sidebar } from './Sidebar';
import Scrollbar from 'smooth-scrollbar';
import { SIDEBAR_ITEMS, SIDEBAR_FIRST } from '../constant/SidebarItems';


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = []
SIDEBAR_ITEMS.forEach(({ name, icon }, index) => {
    let key = index + 1
    if (name == undefined) {
        items.push({ type: 'divider' })
    } else if (icon == null) {
        items.push(getItem(name, key, null, null, 'group'))
    } else {
        items.push(getItem(name, key, icon))
    }
})

const SidebarYoutube = () => {
    return (
        <div
            style={{
                width: 228,
            }}
        >
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
                items={items}
                id="my-scrollbar"
                data-scrollbar
                className='bg-black pr-3 ml-2'
                inlineIndent={11}
                style={{
                    height: "calc(100vh - 56px)",
                    overflow: "auto",
                    paddingTop: "9px"
                }}
            />
        </div>
    );
};
export default SidebarYoutube;