import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const Earings = () => {
  const products = [
      { image: require('../assets/productimage/blackearing.jpg'), name: 'black earing', price: '$120', discount: '30%' },
      { image: require('../assets/productimage/earing.jpg'), name: 'goldearing', price: '$120', discount: '30%' },
      { image: require('../assets/productimage/earinggreen.jpg'), name: 'gold selver', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/redrearing.jpg'), name: 'gold selver earing', price: '$200', discount: '40%' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Our Products</Text>
      <View style={styles.grid}>
        {products.map((product, index) => (
          <View key={index} style={styles.card}>
            <Image source={product.image} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
            {product.discount && (
              <Text style={styles.discount}>{product.discount}</Text>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Earings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1', // Matching pink theme
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  scrollContent: {
    flexGrow: 1, // This will ensure the content grows to allow scrolling
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff69b4', // Vibrant pink
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    width: '47%', // Two cards per row
    alignItems: 'flex-start', // Align text to the left
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10, // Slight rounded corners for images
    resizeMode: 'cover',
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Text color for readability
  },
  price: {
    fontSize: 14,
    color: '#666', // Slightly muted for price text
  },
  discount: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red', // Discount text in red
    position: 'absolute', // Positioned at the top-left
    top: 5,
    left: 10,
  },
});