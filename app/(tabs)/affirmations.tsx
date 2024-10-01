import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import GuidedAffirmationGallery from "@/components/GuidedAffirmationGallery";

const affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">affirmations</Text>

            <View>
                {AFFIRMATION_GALLERY.map((g) => (
                    <GuidedAffirmationGallery key={g.title} title={g.title} previews={g.data} />
                ))}
            </View>

        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default affirmations;
