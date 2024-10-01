import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import beachImage from "@/assets/meditation-images/beach.webp";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
            <SafeAreaView className="flex-1 px-1 justify-between">
              <View>
                <Text className="text-center text-white font-bold text-3xl">
                  Simple but better
                </Text>
                <Text className="text-center text-white text-regular text-xl mt-3">
                  simplifying medetation for everyone
                </Text>
              </View>

              <View>
                <CustomButton
                  onPress={() => router.push("/nature-meditate")}
                  title="Get Started"
                />
              </View>

              <StatusBar style="light" />
            </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
