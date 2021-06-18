import {Layout, Menu} from "antd";
import React from "react";
import { Link } from "react-router-dom";
const {Header} = Layout;

export const AppHeader: React.FC = React.memo(() => {
    return (
        <Header>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" >
                <Menu.Item key="1">
                    <Link to='/search'>Flight & Hotel</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
})

