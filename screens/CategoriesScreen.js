import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTiles from "../components/CategoryGridTiles";

const CategoriesScreen = ({ navigation }) => {
  // This function is used to render each item in the FlatList
  // It takes itemData as an argument, which contains the data for the item.
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverView",{
        // Pass the categoryId as a parameter to the MealsOverView screen
        categoryId: itemData.item.id,
      });
    }
    return (
      // The CategoryGridTiles component is used to display the category item.
      // It takes the title, color, and onPressProps as props.
      <CategoryGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onPressProps={pressHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
