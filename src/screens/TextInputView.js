import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";

export default class TextInputView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseGoals: [],
      isAddMode: false,
    };
    this.onShowText = this.onShowText.bind(this);
    this.onCancelAdditionCourse = this.onCancelAdditionCourse.bind(this);
  }

  onShowText(goalTitle) {
    this.setState((curState) => {
      // whenever update states using previous one then use always callback method
      return {
        courseGoals: [
          ...curState.courseGoals,
          { id: Math.random().toString(), value: goalTitle },
        ],
        text: "",
        isAddMode: false,
      };
    });
  }

  onCancelAdditionCourse() {
    this.setState({
      isAddMode: false,
    });
  }

  onRemoveItem = (courseId) => {
    this.setState((curState) => {
      return {
        courseGoals: curState.courseGoals.filter(
          (item) => item.id !== courseId
        ),
      };
    });
  };

  render() {
    const renderedList = this.state.courseGoals.map((course, index) => {
      return (
        <View style={styling.listItem} key={index}>
          <Text>{course}</Text>
        </View>
      );
    });

    return (
      <View style={styling.screen}>
        <Button
          title={"Add New course"}
          onPress={(e) => {
            this.setState({ isAddMode: true });
          }}
        />
        <GoalInput
          visible={this.state.isAddMode}
          addGoalHandler={this.onShowText}
          onCancel={this.onCancelAdditionCourse}
        />
        <FlatList
          keyExtractor={(item) => item.id}
          data={this.state.courseGoals}
          renderItem={({ item }) => {
            return (
              <GoalItem
                id={item.id}
                onDelete={this.onRemoveItem}
                title={item.value}
              />
            );
          }}
        />
        {/* <ScrollView>{renderedList}</ScrollView> */}
      </View>
    );
  }
}

const styling = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1,
  },
});
