/**
 * User: mayufo@aliyun.com
 * Date: 2019/4/30
 * Time: 4:24 PM
 * GitHub: https://github.com/mayufo/
 */


import React, { Component } from "react";
import {StyleSheet, Text, View, Button } from "react-native";

type Props = {};
export default class Login extends Component<Props> {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> 登录页 </Text>
                <Button
                    title={"Login"}
                    onPress={() => {
                        navigation.navigate('App');
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    }
});
