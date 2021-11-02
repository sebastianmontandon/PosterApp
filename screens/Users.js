import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import ListItem from '../components/ListItem';

export default ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      {loading ? <Text>Loading..</Text> :
        <FlatList 
          data= {users}
          keyExtractor= {x => x.id}
          renderItem= {({ item }) => <ListItem onPress={() => navigation.navigate('Posts', { name: item.name, user_id:item.id })} title={item.name} />}
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch'
  },
});