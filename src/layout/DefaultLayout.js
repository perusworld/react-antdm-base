import React from "react";
import { withRouter } from "react-router-dom";
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import './DefaultLayout.less';

const Item = List.Item;
const Brief = Item.Brief;

class DefaultLayout extends React.Component {
  state = {
    open: false,
  }
  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }
  goTo = (location) => {
    this.setState({ open: !this.state.open }, () => {
      this.props.history.push(location);
    });
  }
  render() {
    const sidebar = (
      <div>
        <List>
          <Item
            multipleLine onClick={() => this.goTo('/home')}>
            Someone <Brief>someone@somwhere.com</Brief>
          </Item>
          <Item onClick={() => this.goTo('/settings')}>
            Settings
          </Item>
          <Item onClick={() => this.goTo('/logout')}>
            Logout
          </Item>
        </List>
      </div>
    );

    return (<div>
      <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        <div className="content-container">
          {this.props.children}
        </div>
      </Drawer>
    </div>);
  }
}
export default withRouter(DefaultLayout);