import React from 'react';
import {Card} from 'antd';

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

  render() {
    return (
      <div className="ui-stock">
        <Card loading={this.state.loading} title="库存">
          库存
        </Card>
      </div>
    );
  }
}

export default Stock;