import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
        <Icon name="chevron-back-outline" size={30} color="#000" />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
  },
  headerTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
    marginBottom:5
  },
});

export default Header;
