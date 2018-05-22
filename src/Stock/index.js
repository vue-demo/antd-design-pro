import React from 'react';
import {Card, Input, Row, Col, Select, Table} from 'antd';
import './index.css'

const Search = Input.Search;
const Option = Select.Option;
const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '名称',
    dataIndex: 'name',
  }, {
    title: '单位',
    dataIndex: 'unit',
  }, {
    title: '账面库存',
    dataIndex: 'inventory',
  }, {
    title: '实际库存',
    dataIndex: 'inventory_actual',
  }, {
    title: '差价',
    dataIndex: 'balance',
  }, {
    title: '成本价',
    dataIndex: 'price',
  }, {
    title: '仓库名',
    dataIndex: 'Warehouse',
  }, {
    title: '库位',
    dataIndex: 'storage',
  }, {
    title: '操作',
    dataIndex: 'operate',
    render: text => {
      return(
        <div className="ui-set">
          <a href="javascript:;">删除</a>
          <a href="javascript:;">修改</a>
        </div>
      )
    },
  }];
  const data = [{
    id: 1,
    key: 1,
    name: 'iPhone-X',
    unit: '台',
    inventory: 1000,
    inventory_actual: 999,
    balance: 1,
    price: 200,
    amount: 2000,
    Warehouse: '南京仓库',
    storage: 'A1001、A1002',
    operate: '操作',
  },{
    id: 2,
    key: 2,
    name: 'iPad',
    unit: '台',
    inventory: 1000,
    inventory_actual: 999,
    balance: 1,
    price: 200,
    amount: 2000,
    Warehouse: '南京仓库',
    storage: 'A1001、A1002',
    operate: '操作',
  },{
    id: 3,
    key: 3,
    name: 'iPad',
    unit: '台',
    inventory: 1000,
    inventory_actual: 999,
    balance: 1,
    price: 200,
    amount: 2000,
    Warehouse: '南京仓库',
    storage: 'A1001、A1002',
    operate: '操作',
  },{
    id: 4,
    key: 4,
    name: 'Apple Watch',
    unit: '台',
    inventory: 1000,
    inventory_actual: 999,
    balance: 1,
    price: 200,
    amount: 2000,
    Warehouse: '南京仓库',
    storage: 'A1001、A1002',
    operate: '操作',
  },{
    id: 5,
    key: 5,
    name: 'Apple Watch',
    unit: '台',
    inventory: 1000,
    inventory_actual: 999,
    balance: 1,
    price: 200,
    amount: 2000,
    Warehouse: '南京仓库',
    storage: 'A1001、A1002',
    operate: '操作',
  }
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
class Stock extends React.Component {
  state = {
    loading: true
  };

  // 挂载组件
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({loading: !this.state.loading})
    }, 1000);
  };

  // 卸载组件
  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return;
    };
  };

  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  render() {
    return (
      <div className="ui-stock">
        <Card loading={this.state.loading} title="库存管理">
          <Row gutter={16}>
            <Col span={4}>
              <label className="label">选择仓库:</label>
              <Select labelInValue defaultValue={{key: '1'}} style={{width: 160}} onChange={this.handleChange}>
                <Option value="1" disabled>选择仓库</Option>
                <Option value="2">北京仓库</Option>
                <Option value="3">南京仓库</Option>
              </Select>
            </Col>

            <Col span={4}>
              <label className="label">商品类别:</label>
              <Select labelInValue defaultValue={{key: '1'}} style={{width: 160}} onChange={this.handleChange}>
                <Option value="1" disabled>选择仓库</Option>
                <Option value="2">服装鞋帽</Option>
                <Option value="3">图书音像</Option>
              </Select>
            </Col>

            <Col span={4}>
              <Search placeholder="input search text" enterButton onSearch={value => console.log(value)}/>
            </Col>
          </Row>

          <Row gutter={24} className="ui-table">
            <div className="table-operations"></div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered />
          </Row>

        </Card>
      </div>
    );
  }
}

export default Stock;