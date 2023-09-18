
import React, { Component, createElement, useState } from 'react';
import Icon, {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu, Divider, ConfigProvider } from 'antd';
import { SIDEBAR_ITEMS, SIDEBAR_FIRST } from '../constant/SidebarItems';
import { MenuIcon } from '../constant/IconsYt';


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
                width: "224px",
            }}
        >
            <div className='d-flex align-items-center h-100 px-3 py-2 bg-default'>
                <Icon component={MenuIcon} className='mr-3 icon-hover' style={{ fontSize: "18px" }} />
                <img src="./img/logo.svg" alt="" style={{ height: "20px" }} />
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
                items={items}
                id="my-scrollbar"
                data-scrollbar
                className='pr-3 ml-2'
                inlineIndent={11}
                style={{
                    height: "calc(100vh - 56px)",
                    paddingBottom: "20px",
                }}
            />
        </div>
    );
};
export default SidebarYoutube;