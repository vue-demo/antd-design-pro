## 重置启动配置
> 引入 react-app-rewired 并修改 package.json 里的启动配置。
````bash
$ yarn add react-app-rewired --dev
````

````bash
// package.json
{
  "name": "antd",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "react-app-rewired": "^1.5.2"
  }
}
// 修改为：
{
  "name": "antd",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "react-app-rewired": "^1.5.2"
  }
}

````
> 然后，创建config-overrides.js，配置如下:
````bash
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
````

## 按需加载组件
> babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件 <br>
> 现在我们尝试安装它并修改 config-overrides.js 文件。
````bash
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }], config);
  
  return config;
};
````

## 打包上线
> 尽管是解构引用，却不止打包Button组件，而是打包全部，体积很大490KB
````bash
$ npm run build

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

const Btn = ()=>(
    <div>
      <Button/>
    </div
  );

ReactDOM.render(<Btn />, document.getElementById('root'));
````

### 按组件打包
> 手动按需加载
````bash
import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import Button from 'antd/lib/button';

ReactDOM.render(<Button />, document.getElementById('root'));
````

### 自动按需加载
> 这才是正确的打包姿势，按需加载，只打包引用的组件
````bash
import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'antd';// css自动加载

ReactDOM.render(<Button />, document.getElementById('root'));
````

### 参考
[antd](https://ant.design/docs/react/introduce-cn)