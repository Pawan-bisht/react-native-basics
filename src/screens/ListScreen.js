import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";

export default class ListScreen extends Component {
  render() {
    const friends = [
      { name: "Friend Name #1", age: 21 },
      { name: "Friend Name #2", age: 21 },
      { name: "Friend Name #3", age: 21 },
      // { name: "Firend Name #1", age:21, key:1},
      // { name: "Firend Name #2", age:21, key:2},
      // { name: "Firend Name #3", age:21, key:3}
      // { name: "Firend Name #4", age:21},
      // { name: "Firend Name #5", age:21},
      // { name: "Firend Name #6", age:21},
      // { name: "Firend Name #7", age:21},
      // { name: "Firend Name #8", age:21},
      // { name: "Firend Name #9", age:21},
    ];

    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(friend) => friend.name}
          data={friends}
          renderItem={({ item }) => {
            // parameter is not same as arrays in reactjs
            // every parameter  === {  item: { name: 'Friend #1', age:21 }, index: 0 }
            return (
              <Text>
                {item.name} - Age {item.age}
              </Text>
            );
          }}
        />
      </View>
    );
  }
}
