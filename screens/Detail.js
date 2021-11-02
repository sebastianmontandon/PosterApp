import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ navigation }) => {
  const body = navigation.getParam('body')
  const title = navigation.getParam('title')
  const userName = navigation.getParam('name')


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.name}>{userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    paddingBottom: 80,
  },
  body: {
    fontSize: 16,
  },
  name: {
    paddingTop: 35,
    fontSize: 18,
  }
});