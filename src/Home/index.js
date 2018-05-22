import React from 'react';
import {Card, Row, Col, Tabs, List} from 'antd';
import ECharts from 'echarts-for-react';

// style
import './index.css';

// const
const TabPane = Tabs.TabPane;

class Home extends React.Component {
  state = {
    loading: true,
    tabKey: '1',
    dataList: [
      'Racing car sprays burning fuel into crowd.',
      'Japanese princess to wed commoner.',
      'Australian walks 100km after outback crash.',
      'Australian walks 100km after outback crash.',
      'Man charged over missing wedding girl.',
      'Man charged over missing wedding girl.'
    ],
    pie: {
      title: {
        text: "\u5e93\u5b58\u91cf\u53d8\u5316",
        // subtext: "\u7eaf\u5c5e\u865a\u6784",
        x: "center",
        textStyle: {
          color: '#666',
          fontWeight: 'lighter',
          fontSize: 16
        }
      },
      tooltip: {
        trigger: "axis"
      },
      grid: {
        top: 50,
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: !0
      },
      xAxis: {
        type: "category",
        boundaryGap: !1,
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} \u6b21"
        }
      },
      series: [{
        name: "\u8bbf\u95ee\u91cf",
        type: "line",
        data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
      }]
    },
    line: {
      title: {
        text: "\u5e93\u5b58\u91d1\u989d\u53d8\u5316",
        // subtext: "\u7eaf\u5c5e\u865a\u6784",
        x: "center",
        textStyle: {
          color: '#666',
          fontWeight: 'lighter',
          fontSize: 16
        }
      },
      color: ["#3398DB"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        },
        formatter: "{b}\u6708{a}:{c}"
      },
      grid: {
        top: 50,
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: !0
      },
      xAxis: [{
        type: "category",
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        axisTick: {
          alignWithLabel: !0
        }
      }],
      yAxis: [{
        type: "value"
      }],
      series: [{
        name: "\u8bbf\u95ee\u91cf",
        type: "bar",
        barWidth: "60%",
        data: [10, 52, 200, 334, 390, 330, 220, 1e3, 500, 444, 999, 11]
      }]
    },
    line2: {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        top: 50,
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: true
      },
      legend: {
        data: ['新办数']
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        }
      ],
      yAxis: {
        type: 'value'
      }
      ,
      series: [
        {
          name: '新办数',
          type: 'line',
          areaStyle: {
            normal: {
              type: 'default',
              color: 'rgba(199, 37, 50,0.2)'
            }
          },
          smooth: true,
          itemStyle: {
            normal: {areaStyle: {type: 'default'}}
          },
          data: [136, 375, 380, 449, 114, 267, 142, 318, 357, 193, 421, 391]
        }
      ]
    }
  };

  fnChange = (key) => {
    console.log(key);
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
      <div className="ui-home">

        <Row className="ui-rect-wrap" gutter={16}>
          <Col span={6}>
            <div className="ui-rect rect-blue">65535 PV/Day</div>
          </Col>
          <Col span={6}>
            <div className="ui-rect rect-green">123,456K</div>
          </Col>
          <Col span={6}>
            <div className="ui-rect rect-orange">$123,456</div>
          </Col>
          <Col span={6}>
            <div className="ui-rect rect-pink">123,456</div>
          </Col>
        </Row>

        <Tabs className="ui-tabs-wrap" defaultActiveKey="1" onChange={this.fnChange}>
          <TabPane tab="销售额" key="1" forceRender={true}>
            <Row className="ui-rect-wrap" gutter={24}>
              <Col span={16}>
                <div className="ui-charts">
                  <ECharts option={this.state.pie} notMerge={true} lazyUpdate={true} style={{height: '300px'}}/>
                </div>
              </Col>
              <Col span={8}>
                <div className="ui-charts">
                  <List
                    loading={this.state.loading}
                    header={<div>门店综合排名</div>}
                    dataSource={this.state.dataList}
                    renderItem={(item,i) => (<List.Item>
                      <i className={i<3?'icon on':'icon'}>{i+1}</i>
                      <span>{item}</span>
                      <span className="ui-list-n">{(Math.random()*10000).toFixed(0)}</span>
                    </List.Item>)}/>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="访问量" key="2" forceRender={true}>
            <Row className="ui-rect-wrap" gutter={24}>
              <Col span={16}>
                <div className="ui-charts">
                  <ECharts option={this.state.line} notMerge={true} lazyUpdate={true} style={{height: '300px'}}/>
                </div>
              </Col>
              <Col span={8}>
                <div className="ui-charts">
                  <List
                    loading={this.state.loading}
                    header={<div>门店综合排名</div>}
                    dataSource={this.state.dataList}
                    renderItem={(item,i) => (<List.Item>
                      <i className={i<3?'icon on':'icon'}>{i+1}</i>
                      <span>{item}</span>
                      <span className="ui-list-n">{(Math.random()*10000).toFixed(0)}</span>
                    </List.Item>)}
                  />
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>

        <Row className="ui-rect-wrap" gutter={24}>
          <Col span={12}>
            <Card loading={this.state.loading} title="线上热门搜索">
              <ECharts option={this.state.line2} style={{height: '240px'}}/>
            </Card>
          </Col>
          <Col span={12}>
            <Card loading={this.state.loading} title="销售额类别占比">
              <ECharts option={this.state.line2} style={{height: '240px'}}/>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Home;