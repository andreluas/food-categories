import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({ items }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
          };
          return (
            <MealItem
              id={mealItemProps.id}
              title={mealItemProps.title}
              imageUrl={mealItemProps.imageUrl}
              duration={mealItemProps.duration}
              complexity={mealItemProps.complexity}
              affordability={mealItemProps.affordability}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
