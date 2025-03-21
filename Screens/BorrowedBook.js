import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function BorrowedBooks({ borrowedBooks, returnBook }) {
  return (
    <View>
      <FlatList
        data={borrowedBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.list}> 
            <Text style={styles.title}>{item.title} by {item.author}</Text>
            <Button
              title="Return" 
              onPress={() => returnBook(item.id)} 
            />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 5,
  },
  list:{
    margin: 10,
    backgroundColor: '#fff',
    width:380,
    borderColor:'#595EFF',
    borderRadius: 5,
    borderWidth:3
  },
  title:{
    fontSize: 20,
    margin: 5,
    color:'#595EFF'
  },
});