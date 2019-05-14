[参考](http://www.devio.org/)
## 初始react-native

`react-native init 项目名字` 初始化react-native

`react-native run-ios` 运行项目

创建组件的三种方式

```
// src/Hello.js

import React, {Component} from 'react';
import {Text} from 'react-native';
var createReactClass = require('create-react-class');
// es 6 推荐
export default class Hello extends Component {
    render() {
        return (
            <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello, {this.props.name}</Text>
        )
    }
}

// 方法2: es 5
const Hello = createReactClass({
 render () {
     return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello</Text>
 }
})

module.exports = Hello

// 方法3: 函数式
// 无状态 无法使用this

function Hello (props) {
 return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello, {props.name}</Text>
}


module.exports = Hello

```

调用组件

```
// App.js

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Hello from './src/Hello'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Hello name='may'/>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 50
    }
});
```

注册组件

```
// index.js

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

```

## react-native 生命周期

`src/Lift.js`

- 初始化「Mounting」
    + getDefaultProps 「全局调用一次性的」定义组件的默认属性
    + getInitialState    组件的初始化
    + componentWillMount 装载之前调用
    + render             渲染
    + componentDidMount  组件渲染完成 可以用来发送请求
- 组件运行中「state状态改变」
    + shouldComponentUpdate() 
    + 如果上一步是true, 运行componentWillUpdate()
    + render
    + componentDidUpdate()
- 组件运行中「外部props改变」 
    + componentWillReceiveProps()
    + shouldComponentUpdate() 是否渲染组件，如果是false不会被渲染
    + 如果上一步是true, 运行componentWillUpdate()
    + render
    + componentDidUpdate()
- 卸载组件「Unmount」
    + componentWillUnmount 组件将要卸载 可以用来回收资源
    + 结束   



![](https://raw.githubusercontent.com/crazycodeboy/RNStudyNotes/master/React%20Native%E4%B9%8BReact%E9%80%9F%E5%AD%A6%E6%95%99%E7%A8%8B/images/component-lifecycle.jpg)


- `Mounting`和`Unmount`阶段都是一次性调用,除了render

- `Updating`会被多次调用

## 导入与导出

组件的导入导出见`src/Hello.js`

变量的导入导出

```
export var name = 'may'

const name1 = 'may1'

const age = '22'


export {name1, age}

// 需要使用的地方
import Hello, {name, age} from './src/Hello'
```

方法的导入导出类似于变量

## React Native props使用详解

`src/Props.js`

- props 类型检查 

`npm install --save prop-types`


[prop-types](https://www.npmjs.com/package/prop-types)

```
import React, {Component} from "react";

import PropTypes from 'prop-types';

import {Text} from "react-native";

export default class Props extends Component {
    static defaultProps = {
        name: '慧敏'   // 默认值
    }
    static propTypes = {
        name: PropTypes.string
    }
    render() {
        return (
            <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello, {this.props.name}</Text>
        )
    }
}
```

- 参数较多的传递「延展符使用」

```
 render() {
        let param = {name: 'huimin', age: 18, sex: '女'}
        return (
            <View style={styles.container}>
                <Props {...param}/>
            </View>
        )
    }
```

- 部分属性使用「解构赋值」

```
render() {
        let param = {name: 'huimin', age: 18, sex: '女'}
        let {name, sex} = param

        return (
            <View style={styles.container}>
                <Props name={name} sex={sex}/>
            </View>
        )
    }
```


## React Native state 使用详情

见`src/State.js`

## React Native ref 使用详解


ref 是组件的特殊属性，可以获取真实的组件

见 `src/Ref.js` 和 `App.js`


## React Native class的使用

见 `src/Student.js` 和 `src/MayStudent.js`

## React Native 布局

- `react native` 采用`FlexBox`布局
- 没有单位，它代表了设备独立像素，安卓上的单位是`dp`字体是`sp`,ios上的单位是`pt`
- `react native`中的`flexBox` 和`web css`上`flexBox`
    + `flexDirection`: react中默认是`column`,css中默认`row`
    + `alignItems`: react中默认是`stretch`,css中默认`flex-start`
    + react 中的flex 只支持一个属性
    + 不支持`align-content，flex-basis，order，flex-basis，flex-flow，flex-grow，flex-shrink`  

## react-navigation开发

[reactnavigation](https://reactnavigation.org/docs/zh-Hans/getting-started.html)

安装`react-navigation`

`yarn add react-navigation`

安装 react-native-gesture-handler

`yarn add react-native-gesture-handler`

Link 所有的原生依赖

`react-native link react-native-gesture-handler`

` yarn add react-native-vector-icons`

`react-native link react-native-vector-icons`



https://oblador.github.io/react-native-vector-icons/
