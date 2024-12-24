import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Import images
import necklaceImage from "../assets/Catgaripics/Necklace.jpg";
import earingImage from "../assets/Catgaripics/earing.jpg";
import ringsImage from "../assets/Catgaripics/rings.jpg";
import braslateImage from "../assets/Catgaripics/braslate.jpg";
import ankletsImage from "../assets/Catgaripics/ankelts.jpg";
import watchImage from "../assets/Catgaripics/watch.jpg";

export default function CategoryScreen() {
  const [scaleAnim] = useState(new Animated.Value(1));
  const navigation = useNavigation();

  const categories = [
    { image: necklaceImage, name: "Necklaces", route: "Necklace" },
    { image: earingImage, name: "Earrings", route: "Earings" },
    { image: ringsImage, name: "Rings", route: "Rings" },
    { image: braslateImage, name: "Bracelets", route: "Bracelets" },
    { image: ankletsImage, name: "Anklets", route: "Anklets" },
    { image: watchImage, name: "Watches", route: "Watches" },
  ];

  // Animation for touch effect
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

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fdf2f8" }} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
        {/* Header */}
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#D81B60",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Explore Categories
        </Text>

        {/* Category Cards */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {categories.map((category, index) => (
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
                onPress={() => navigation.navigate(category.route)}
              >
                {/* Category Image */}
                <Image
                  source={category.image}
                  style={{
                    height: 150,
                    width: "100%",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                  resizeMode="cover"
                />
                {/* Category Name */}
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
                    {category.name}
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
