import React, { Component } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

 
export default class TabNav extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <Menu>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    as={NavLink}
                    to={'/'}
                >
                    Home
                </Menu.Item>
                <Menu.Item
                    name='characters'
                    active={activeItem === 'characters'}
                    onClick={this.handleItemClick}
                    as={NavLink}
                    to={'/characters'}
                >
                    Characters
                </Menu.Item>
                <Menu.Item
                    name='episodes'
                    active={activeItem === 'episodes'}
                    onClick={this.handleItemClick}
                    as={NavLink}
                    to={'/episodes'}
                >
                    Episodes
                </Menu.Item>
                <Menu.Item
                    name='locations'
                    active={activeItem === 'locations'}
                    onClick={this.handleItemClick}
                    as={NavLink}
                    to={'/locations'}
                >
                    Locations
                </Menu.Item>
            </Menu>
        )
    }    
}
