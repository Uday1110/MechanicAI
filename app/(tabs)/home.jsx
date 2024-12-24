import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="flex my-7 px-4 space-y-6">
        {/* Header Section */}
        <View>
          <Text className="font-pmedium text-sm text-gray-100">Welcome To</Text>
          <Text className="text-2xl font-psemibold text-secondary-200">
            Janatha Garage
          </Text>
        </View>

        {/* Content Section */}
        <View className="mt-6">
          <Text className="text-white text-xl">
            Imagine this:{"\n"} {"\n"}You’re on a road trip, miles from the
            nearest town, and your car starts making a strange noise. Instead of
            panicking, you ask an AI assistant: "Why is my car rattling?" Within
            moments, it identifies possible issues, provides troubleshooting
            steps, and advises on safety. Mechanic AI is your virtual car
            expert, making vehicle care as simple as asking a question—anytime,
            anywhere.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
