import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

type Props = {};
export default class App extends Component<Props> {
    static navigationOptions = {
        title: "Home",
        headerBackTitle: "返回哈哈"
    };
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Welcome to HomePage </Text>
                <Button
                    title={"Go to Page1"}
                    onPress={() => {
                        navigation.navigate("Page1", { name: "动态的" });
                    }}
                />
                <Button
                    title={"Go to Page2"}
                    onPress={() => {
                        navigation.navigate("Page2");
                    }}
                />
                <Button
                    title={"Go to Page3"}
                    onPress={() => {
                        navigation.navigate("Page3", { name: "Devio" });
                    }}
                />
                <Button
                    title={"Go to Bottom"}
                    onPress={() => {
                        navigation.navigate("Bottom");
                    }}
                />
                <Button
                    title={"Go to Top"}
                    onPress={() => {
                        navigation.navigate("Top");
                    }}
                />
                <Button
                    title={"Go to Drawer"}
                    onPress={() => {
                        navigation.navigate("Drawer");
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
