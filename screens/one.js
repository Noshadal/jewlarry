import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; 

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  const carouselImages = [
    require('../assets/scrollerimages/earing.jpg'),
    require('../assets/scrollerimages/gold.jpg'),
    require('../assets/scrollerimages/nacklace.jpg'),
    require('../assets/scrollerimages/Rings.jpg'),
  ];

  const fullRoundedImages = [
    { image: require('../assets/roundimages/gold earing.jpg'), label: 'Necklace' },
    { image: require('../assets/roundimages/goldneck.jpg'), label: 'Earrings' },
    { image: require('../assets/roundimages/necklace.jpg'), label: 'Bag' },
    { image: require('../assets/roundimages/Ring.jpg'), label: 'Ring' },
  ];

  const gridImages = [
    { image: require('../assets/squreiamge/ankelts.jpg'), label: 'Gold Necklace' },
    { image: require('../assets/squreiamge/breslet.jpg'), label: 'Gold Earrings' },
    { image: require('../assets/squreiamge/pandat.jpg'), label: 'Gold Pendant' },
    { image: require('../assets/squreiamge/goldearing.jpg'), label: 'Gold Earrings' },
    { image: require('../assets/squreiamge/nacklace.jpg'), label: 'Gold Necklace' },
    { image: require('../assets/squreiamge/ring.jpg'), label: 'Gold Ring' },
  ];

  const recentProducts = {
    earrings: [
      { image: require('../assets/productimage/blackearing.jpg'), name: 'black earing', price: '$120', discount: '30%' },
      { image: require('../assets/productimage/earing.jpg'), name: 'goldearing', price: '$120', discount: '30%' },
      { image: require('../assets/productimage/earinggreen.jpg'), name: 'gold selver', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/redrearing.jpg'), name: 'gold selver earing', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/golden.jpg'), name: 'Golden earing', price: '$200', discount: '40%' },
    ],
    necklace: [
      { image: require('../assets/productimage/namenacklace.jpg'), name: 'Name necklace', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/golden.jpg'), name: 'Golden necklace', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/necklace.jpg'), name: 'Golden necklace', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/rednecklace.jpg'), name: 'Red necklace', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/set.jpg'), name: 'set of necklace', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/silvernicklace.jpg'), name: 'Silver necklace', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/white.jpg'), name: 'white necklace', price: '$200', discount: '40%' },
    ],
    rings: [
      { image: require('../assets/productimage/blue dimond.jpg'), name: 'Blue Dimond Ring', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/cople ring.jpg'), name: 'Couple Ring ', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/gold ring.jpg'), name: 'Gold  Ring', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/golden ring.jpg'), name: 'Golden Ring', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/laxuray ring.jpg'), name: 'Laxuary Ring', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/nice.jpg'), name: 'Ring', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/pink dimond.jpg'), name: ' Pink Dimond Ring', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/red dimond.jpg'), name: ' Red Dimond Ring', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/silver ring.jpg'), name: ' silver Ring', price: '$200', discount: '40%' },
      { image: require('../assets/productimage/sky blue.jpg'), name: ' Sky blue Ring', price: '$200', discount: '40%' },
    ],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % carouselImages.length;
        carouselRef.current.scrollTo({ x: nextIndex * width, animated: true });
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <LinearGradient colors={['#f8c5d4', '#ffd1e3']} style={styles.container}>
      {/* ScrollView to allow vertical scrolling */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Carousel */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          ref={carouselRef}
        >
          {carouselImages.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={[styles.carouselImage, { width }]}
            />
          ))}
        </ScrollView>

        {/* Categories */}
        <Text style={[styles.sectionTitle, styles.redText]}>Categories</Text>
        <View style={styles.categories}>
          {fullRoundedImages.map((item, index) => (
            <View key={index} style={styles.roundedImageContainer}>
              <Image source={item.image} style={styles.roundedImage} />
              <Text style={styles.label}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Grid */}
        <View style={styles.grid}>
          {gridImages.map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <Image source={item.image} style={styles.gridImage} />
              <Text style={styles.label}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Earrings Section */}
        <Text style={[styles.sectionTitle, styles.redText]}>Earrings</Text>
        <FlatList
          data={recentProducts.earrings}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
 <TouchableOpacity onPress={() => navigation.navigate("product",{ product: item })} // Use the correct screen name
>
              <View style={styles.productCard}>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{item.discount}</Text>
                </View>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Necklace Section */}
        <Text style={[styles.sectionTitle, styles.redText]}>Necklaces</Text>
        <FlatList
          data={recentProducts.necklace}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("product")}>
              <View style={styles.productCard}>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{item.discount}</Text>
                </View>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Rings Section */}
        <Text style={[styles.sectionTitle, styles.redText]}>Rings</Text>
        <FlatList
          data={recentProducts.rings}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("product")}>
              <View style={styles.productCard}>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{item.discount}</Text>
                </View>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  carousel: {
    marginBottom: 20,
  },
  carouselImage: {
    height: 250,
    resizeMode: 'cover',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  redText: {
    color: '#ff6f61',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  roundedImageContainer: {
    alignItems: 'center',
  },
  roundedImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  label: {
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    width: width / 3 - 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  gridImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  productCard: {
    width: 120,
    marginRight: 15,
    alignItems: 'center',
    position: 'relative',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff6f61',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  productName: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 12,
    color: '#888',
  },
});

export default HomeScreen;
