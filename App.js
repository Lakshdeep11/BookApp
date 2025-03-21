import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BookList from './Screens/BooksList';
import BorrowedBooks from './Screens/BorrowedBook';
import BookDetails from './Screens/BookDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Function to add a borrowed book
  const borrowBook = (book) => {
    setBorrowedBooks((prevBooks) => [...prevBooks, book]);
  };

  const returnBook = (bookId) => {
    setBorrowedBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  function BookStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="BookList" 
          component={(props) => <BookList {...props} borrowBook={borrowBook} />} 
        />
        <Stack.Screen 
          name="BookDetails" 
          component={(props) => (
            <BookDetails 
              {...props} 
              borrowBook={borrowBook} 
              borrowedBooks={borrowedBooks} 
            />
          )}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Book List" component={BookStack} />
        <Tab.Screen 
          name="Borrowed Books" 
          component={(props) =>  <BorrowedBooks 
            {...props} 
            borrowedBooks={borrowedBooks} 
            returnBook={returnBook} 
          />} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#595EFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
