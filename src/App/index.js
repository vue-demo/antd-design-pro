import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {

  // constructor(props, context)
  // 构造函数，在创建组件的时候调用一次。

  // componentWillMount()
  // 在组件挂载之前调用一次。如果在这个函数里面调用setState，本次的render函数可以看到更新后的state，并且只渲染一次。

  // componentDidMount()
  // 在组件挂载之后调用一次。这个时候，子主键也都挂载好了，可以在这里使用refs。

  state = {
    collapsed: false
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
              <span><Link to="/" replace>仪表盘</Link></span>
            </Menu.Item>
            <SubMenu key="2" title={<span><Icon type="user" /><span>库存管理</span></span>}>
              <Menu.Item key="3"><Link to="/Stock" replace>库存</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/StockIn" replace>入库单</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/StockOut" replace>出库单</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="6" title={<span><Icon type="table" /><span>资料管理</span></span>}>
              <Menu.Item key="7">品类资料</Menu.Item>
              <Menu.Item key="8">客户资料</Menu.Item>
              <Menu.Item key="9">员工资料</Menu.Item> 
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
          <Content style={{ margin: '24px 24px 0px', minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;