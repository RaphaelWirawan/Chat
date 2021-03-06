import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || "Chat!",
  });
  state = {
    messages: [],
  };


componentDidMount() {
  Fire.shared.on(message =>
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message),
    }))
  );
}

componentWillUnmount() {
Fire.shared.off();
}

  render() {
    return <GiftedChat messages={this.state.messages} />;
  }
}
export default Chat;
