import React from "react";
import { View, StyleSheet, Image } from "react-native";

const DisplayImage = () => {
  return (
    <View style={style.container}>
      <Image
        style={style.logo}
        source={{
          uri: "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/little-lemon-logo.png",
        }}
      />
    </View>
  );
};

export default DisplayImage;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 300,
    height: 550,
  },
});
