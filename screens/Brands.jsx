import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Animated } from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

import bijoux from "../assets/Brands/bijoux.png";
import cartier from "../assets/Brands/cartier.png";
import winston from "../assets/Brands/harry winston.png";
import verdura from "../assets/Brands/verdura.png";
import vipjewellery from "../assets/Brands/vip jewellery.png";
import Avita from "../assets/Brands/Avita.png";

export default function Brands() {
  const [scaleAnim] = useState(new Animated.Value(1));

  const brands = [
    { image: bijoux, name: "BIJOUX" },
    { image: cartier, name: "CARTIER" },
    { image: winston, name: "WINSTON" },
    { image: verdura, name: "VERDURA" },
    { image: vipjewellery, name: "VIP JEWELLERY" },
    { image: Avita, name: "AVITA" },
  ];

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      friction: 3,
      tension: 200,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 200,
      useNativeDriver: true,
    }).start();
  };
  const navigation = useNavigation(); 

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fdf2f8" }} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#D81B60",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Top Jewelry Brands
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {brands.map((brand, index) => (
            <Animated.View
              key={index}
              style={{
                width: "47%",
                marginBottom: 16,
                transform: [{ scale: scaleAnim }],
              }}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 20,
                  overflow: "hidden",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 5,
                }}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => navigation.navigate("ProductScreen")} // Use the correct screen name
                >
                <Image
                  source={brand.image}
                  style={{
                    height: 150,
                    width: "100%",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                  resizeMode="contain"
                />
                <View
                  style={{
                    padding: 12,
                    backgroundColor: "#FCE4EC",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#D81B60",
                      textAlign: "center",
                    }}
                  >
                    {brand.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
