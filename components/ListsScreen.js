import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For the stars

const data = [
  { key: 'Appointments' },
  { key: 'Trips' },
  { key: 'Passwords' },
  { key: 'Pitches' },
  { key: 'Updates' },
];

const cardData = [
  { name: 'brynn', image: require('../assets/image20-vmake.png') },
  { name: 'thot leader', image: require('../assets/image20-vmake.png') },
  { name: 'jsa', image: require('../assets/image20-vmake.png') },
  { name: 'talhaconcepts', image: require('../assets/image20-vmake.png') },
];

export default function ListsScreen() {
  const handlePress = (button) => {
    alert(`Button pressed: ${button}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/image20-vmake.png')} style={styles.headerImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Limited supply! It's like digital gold!</Text>
          <View style={styles.starContainer}>
            {[...Array(5)].map((_, index) => (
              <FontAwesome key={index} name="star" size={16} color="gold" />
            ))}
          </View>
          <Text style={styles.headerSubtitle}>5 months ago</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
      <View style={styles.buttonContainer}>
        <Button title="Button1" onPress={() => handlePress('Button1')} />
        <Button title="Button2" onPress={() => handlePress('Button2')} />
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>CARD WITH DIVIDER</Text>
        {cardData.map((item) => (
          <View key={item.name} style={styles.cardItem}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  headerSubtitle: {
    color: 'gray',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  cardTitle: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cardImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  cardText: {
    fontSize: 16,
  },
});
