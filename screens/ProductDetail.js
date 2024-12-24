import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductScreen = () => {
  const route = useRoute();
  const { product } = route.params; // Passing product details from the HomeScreen

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Product Image */}
      <Image source={product.image} style={styles.productImage} />

      {/* Product Name */}
      <Text style={styles.productName}>{product.name}</Text>

      {/* Product Price & Discount */}
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>{product.price}</Text>
        <Text style={styles.productDiscount}>{product.discount} OFF</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.orderButton]}>
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Ratings and Reviews */}
      <View style={styles.ratingsContainer}>
        <Text style={styles.sectionTitle}>Ratings and Reviews</Text>
        <Text style={styles.ratingsText}>⭐⭐⭐⭐☆ (4.5/5)</Text>
        <Text style={styles.reviewsText}>Amazing quality! Totally worth it!</Text>
        <Text style={styles.reviewsText}>Loved the design and details.</Text>
        <Text style={styles.reviewsText}>Could improve the packaging.</Text>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Changed to black
    marginBottom: 10,
    textAlign: 'left', // Moved to the left
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align price to the left
    marginBottom: 20,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  productDiscount: {
    fontSize: 18,
    color: '#ff6f61',
  },
  buttonContainer: {
    marginBottom: 30,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10, // Space between buttons
    alignItems: 'center',
  },
  orderButton: {
    backgroundColor: '#ff6f61',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingsContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  ratingsText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left',
  },
  reviewsText: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'left',
    fontStyle: 'italic',
    color: '#666',
  },
  commentContainer: {
    marginTop: 20,
  },
  commentInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#007BFF',
  },
});

export default ProductScreen;
