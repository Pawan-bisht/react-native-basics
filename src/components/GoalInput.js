import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button, Modal } from "react-native";

export default class GoalInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.onPressHandler = this.onPressHandler.bind(this);
  }

  onPressHandler(e) {
    // console.log(e);
    this.setState({
      text: e,
    });
  }

  render() {
    return (
      // This render part or view part always compiled but above logic part stays in JS
      <Modal visible={this.props.visible} animationType="slide">
        <View style={styling.inputContainer}>
          {/* View only take space only it just its child elements need */}
          <TextInput
            style={styling.input}
            placeholder="please Enter the text"
            onChangeText={this.onPressHandler}
            value={this.state.text}
          />
          <View style={styling.buttonContainer}>
            <View style={styling.button}>
              {/* Button can't use style properties in it so we use View Element to wrap around it */}
              <Button
                title="CANCEL"
                color="#ee5253"
                onPress={(e) => {
                  this.setState((curState) => {
                    return {
                      text: "",
                    };
                  });
                  this.props.onCancel();
                }}
              />
            </View>
            <View style={styling.button}>
              <Button
                title="ADD"
                color="#9b59b6"
                disabled={this.state.text ? false : true}
                onPress={(e) => {
                  this.setState((curState) => {
                    return {
                      text: "",
                    };
                  });
                  this.props.addGoalHandler(this.state.text);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styling = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: "40%",
  },
});
