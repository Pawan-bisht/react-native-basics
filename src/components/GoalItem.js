import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";

export default class GoalItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      //    Touchable make the View clickable, it wrap arounds View and do some action
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.props.onDelete.bind(this, this.props.id)}
      >
        <View style={styling.listItem}>
          <Text> {this.props.title} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styling = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "#000",
    borderWidth: 1,
  },
});
