
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

type Props = {};
export default class Page1 extends Component<Props> {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Welcome to page1! </Text>
                <Button
                    title={"Go Back"}
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                <Button
                    title={"跳转页面4"}
                    onPress={() => {
                        navigation.navigate("Page4");
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
