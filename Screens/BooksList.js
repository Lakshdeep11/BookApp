import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function BookList({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const bookCollection = await getDocs(collection(db, 'Books'));
      setBooks(bookCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      console.log(books);
    };
    fetchBooks();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.list}
            onPress={() => navigation.navigate('BookDetails', { book: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
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
  }
});