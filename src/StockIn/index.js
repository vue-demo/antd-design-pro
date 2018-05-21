import React from 'react';
import {Card} from 'antd';

class StockIn extends React.Component {
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
      <div className="ui-stock-in">
        <Card loading={this.state.loading} title="入库单">
          入库单
        </Card>
      </div>
    );
  }
}

export default StockIn;