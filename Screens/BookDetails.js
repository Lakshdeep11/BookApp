import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export default function BookDetails({ route, navigation, borrowBook, borrowedBooks }) {
  const { book } = route.params;

  const handleBorrow = () => {
    if (borrowedBooks.length < 3 ) {
      borrowBook(book)
      Alert.alert('Success', 'Book borrowed successfully!');
    } else {
      Alert.alert('Limit Reached', 'You can only borrow up to 3 books.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.title}>Author: {book.author}</Text>
      <Text style={styles.title}>Genre: {book.genre}</Text>
      <Button title="Borrow" onPress={handleBorrow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 5,
  },
  title:{
    fontSize: 20,
    margin: 5,
    color:'#595EFF'
  },
});