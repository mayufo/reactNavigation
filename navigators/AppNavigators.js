import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createDrawerNavigator,
    DrawerItems,
    createSwitchNavigator
} from 'react-navigation'
import React from 'react'
import {Platform, Button, ScrollView, SafeAreaView} from 'react-native'
import HomePage from '../page/HomePage'
import Page1 from '../page/Page1'
import Page2 from '../page/Page2'
import Page3 from '../page/Page3'
import Page4 from '../page/Page4'
import Page5 from '../page/Page5'
import Login from '../page/Login'


import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// 上导航
const AppTopNavigator = createMaterialTopTabNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: 'All'
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'IOS'
        }
    },
    Page3: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'React'
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {
            tabBarLabel: 'React Native'
        }
    }
}, {
    tabBarOptions: {
        tabStyle: {mindWidth: 50},
        upperCaseLabel: false, // 标签是否大写
        scrollEnabled: true,
        style: {
            backgroundColor: '#678' //TabBar 的背景色
        },
        indicatorStyle: {
            height: 2,
            backgroundColor: 'white'
        }, // 标签指示器的样式
        labelStyle: {
            fontSize: 13,
            marginTop: 6,
            marginBottom: 6
        }, // 文字的样式
    }
})

// 下导航
const AppBottomNavigator = createBottomTabNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-home'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-people'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-chatboxes'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-aperture'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    }
}, {
    tabBarOptions: {
       activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff'
    }
})

// 抽屉
const AppDrawerNavigator = createDrawerNavigator({
    Page4: {
        screen: Page4,
        navigationOptions: {
            drawerLabel: 'Page4',
            drawerIcon: ({tintColor}) => (
                <MaterialIcons
                    name={'drafts'}
                    size={24}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            drawerLabel: 'Page3',
            drawerIcon: ({tintColor}) => (
                <MaterialIcons
                    name={'favorite'}
                    size={24}
                    style={{color: tintColor}}
                />
            )
        }
    }
}, {
    initialRouteName: 'Page4',  // 初始默认的页面
    contentOptions: {
        activeTintColor: '#e91e63',
    },
    contentComponent:(props) => (
        <ScrollView style={{backgroundColor: '#789', flex: 1}}>
            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    )
})

const AppStack = createStackNavigator({
    Home: {
        screen: HomePage
    },
    Page1: {
        screen: Page1
    }
});
const AuthStack = createStackNavigator({
    Login: {
        screen: Login
    },
},{
    navigationOptions: {
        // header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
});

export default createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'Auth',
    }
);

export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面名`   // 动态配置
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            title: 'This is page2'   // 静态配置
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state, setParams} = navigation
            const {params} = state
            return {
                title: params.title ? params.title : 'This is page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() => setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
                    />
                )
            }
        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: {
            title: 'This is page4'   // 静态配置
        }
    },
    Bottom: {
        screen: AppBottomNavigator,
        navigationOptions: {
            title: 'BottomNavigator'   // 静态配置
        }
    },
    Top: {
        screen: AppTopNavigator,
        navigationOptions: {
            title: 'TopNavigator'   // 静态配置
        }
    },
    Drawer: {
        screen: AppDrawerNavigator,
        navigationOptions: {
            title: 'DrawerNavigator'   // 静态配置
        }
    }
})
