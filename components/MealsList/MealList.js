import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MealItemTile from "./MealItemTile";



const MealList = ({items}) => {

  function renderMealItem(itemData) {
 
    return (
      // Passing the itemData to the MealItemTile component to display the meal details
      <MealItemTile
        id={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        ListEmptyComponent={<Text>No meals found.</Text>}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
