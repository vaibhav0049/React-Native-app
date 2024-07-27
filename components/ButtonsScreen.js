import React from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';

export default function ButtonsScreen() {
  const handlePress = (action) => {
    alert(`Button pressed: ${action}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="Log in" onPress={() => handlePress('Log in')} />
      <View style={styles.spacer} />
      <Button title="Add to Cart" onPress={() => handlePress('Add to Cart')} />
      <View style={styles.spacer} />
      <Button title="Request an agent" onPress={() => handlePress('Request an agent')} color="red" />
      <View style={styles.spacer} />
      <Button title="SIGN UP" onPress={() => handlePress('SIGN UP')} color="blue" />
      <View style={styles.spacer} />
      <Button title="HOME" onPress={() => handlePress('HOME')} />
      <View style={styles.spacer} />
      <Button title="PROFILE" onPress={() => handlePress('PROFILE')} color="purple" />
      <View style={styles.spacer} />
      <Button title="Basic Button" onPress={() => handlePress('Basic Button')} />
      <View style={styles.spacer} />
      <Button title="Outline Button" onPress={() => handlePress('Outline Button')} />
      <View style={styles.spacer} />
      <Button title="Clear Button" onPress={() => handlePress('Clear Button')} />
      <View style={styles.spacer} />
      <Button title="Light" onPress={() => handlePress('Light')} />
      <View style={styles.spacer} />
      <Button title="Dark" onPress={() => handlePress('Dark')} />
      <View style={styles.spacer} />
      <Button title="Default" onPress={() => handlePress('Default')} />
      <View style={styles.spacer} />
      <Button title="Secondary" onPress={() => handlePress('Secondary')} color="green" />
      <View style={styles.spacer} />
      <Button title="Danger" onPress={() => handlePress('Danger')} color="red" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  spacer: {
    height: 10,
  },
});
