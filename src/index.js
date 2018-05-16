import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="ui-logo">
            <div className="ui-title">React</div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>仪表盘</span>
            </Menu.Item>
            <SubMenu key="2" title={<span><Icon type="user" /><span>库存管理</span></span>}>
              <Menu.Item key="3">库存</Menu.Item>
              <Menu.Item key="4">入库单</Menu.Item>
              <Menu.Item key="5">出库单</Menu.Item>
            </SubMenu>
            <SubMenu key="6" title={<span><Icon type="table" /><span>Table</span></span>}>
              <Menu.Item key="7">nav 1</Menu.Item>
              <Menu.Item key="8">nav 2</Menu.Item>
              <Menu.Item key="9">nav 3</Menu.Item>
            </SubMenu>
            <SubMenu key="10" title={<span><Icon type="form" /><span>Form</span></span>}>
              <Menu.Item key="11">nav 1</Menu.Item>
              <Menu.Item key="12">nav 2</Menu.Item>
              <Menu.Item key="13">nav 3</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger ui-trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo/>, document.getElementById('root'));