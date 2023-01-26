import React from "react";
import { View, Image, Text, SafeAreaView, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const CardItem = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Card>
          <Image
            className="bg-black"
            source={{
              uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teahub.io%2Fviewwp%2FioiRmwR_iphone-wallpaper-hd-cute-girl-pic-with-high%2F&psig=AOvVaw0-XyD3WKYxybZ9KMTU1fVS&ust=1674731526048000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMC04qDL4vwCFQAAAAAdAAAAABAE",
            }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={styles.paragraph}>
            React Native Card View for Android and IOS using
            "react-native-paper"
          </Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    justifyContent: "center",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
});
