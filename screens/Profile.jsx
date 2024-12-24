import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Profile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profileImage: { uri: "https://via.placeholder.com/150" },  // Placeholder image URL
  };

  return (
    <ScrollView className="flex-1 bg-gradient-to-b from-purple-100 to-white">
      {/* Profile Header */}
      <View className="px-4 py-6 items-center">
        <Image
          source={user.profileImage}
          className="h-32 w-32 rounded-full border-4 border-white shadow-md"
          resizeMode="cover"
        />
        <Text className="text-3xl font-bold text-purple-800 mt-4">{user.name}</Text>
        <Text className="text-lg text-gray-600">{user.email}</Text>
      </View>

      {/* Profile Details */}
      <View className="px-4 mt-8">
        <Text className="text-xl font-semibold text-purple-800">Profile Details</Text>
        <View className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <Text className="text-sm text-gray-500">Full Name:</Text>
          <Text className="text-lg text-gray-800">{user.name}</Text>
        </View>
        <View className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <Text className="text-sm text-gray-500">Email:</Text>
          <Text className="text-lg text-gray-800">{user.email}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="px-4 mt-8">
        <TouchableOpacity className="bg-purple-700 p-4 rounded-lg mb-4">
          <Text className="text-center text-white font-semibold text-lg">Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-500 p-4 rounded-lg">
          <Text className="text-center text-white font-semibold text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
