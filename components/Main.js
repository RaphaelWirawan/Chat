import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";

class Main extends React.Component {
  state = { name: "" }; // 2. <- Add the component state
  render() {
    return (
      <View>
        <TextInput
          style={styles.nameInput}
          placeHolder="John Cena"
          value={this.state.name}
        />
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: {
    // 3. <- Add a style for the input
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: "#111111",
    borderWidth: 1,
  },
});

export default Main;
