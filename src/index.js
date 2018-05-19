import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import { Layout, Menu,Card, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {

  // constructor(props, context)
  // 构造函数，在创建组件的时候调用一次。

  // componentWillMount()
  // 在组件挂载之前调用一次。如果在这个函数里面调用setState，本次的render函数可以看到更新后的state，并且只渲染一次。

  // componentDidMount()
  // 在组件挂载之后调用一次。这个时候，子主键也都挂载好了，可以在这里使用refs。

  state = {
    collapsed: false,
    loading: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loading: !this.state.loading,
      });
    },1000);
  }

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
            <Card loading={this.state.loading} title="Card title">
              Whatever content
            </Card>
            <Card loading={this.state.loading} title="Card title">
              Whatever content
            </Card>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo/>, document.getElementById('root'));