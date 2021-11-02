import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";


export default ({ navigation }) => {
  const userId = navigation.getParam('user_id')
  const userName = navigation.getParam('name')
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setPosts(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <View style={styles.container}>
      {loading ? <Text>Loading..</Text> :
        <FlatList 
          data= {posts.filter(x => x.userId === userId)}
          keyExtractor= {x => x.id}
          renderItem= {({ item }) => <ListItem onPress={() => navigation.navigate('Detail', { name: userName, title: item.title, body: item.body })} title={item.title} />}
          style={styles.list}
        />
      }
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
  list: {
    alignSelf: 'stretch'
  },
});