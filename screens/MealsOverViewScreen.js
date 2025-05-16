import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { MEALS , CATEGORIES } from "../data/dummy-data";
import MealItemTile from "../components/MealItemTile";

const MealsOverViewScreen = ({ route , navigation}) => {
  const { categoryId } = route.params;
  // Use the categoryId to filter the meals based on the selected category
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });
  // Set the header title based on the selected category
  // This useEffect hook is used to set the header title when the component mounts or
  //  when the categoryId changes
  useEffect(() => {
    const headerTitle = CATEGORIES.find((props) => props.id === categoryId).title;
    navigation.setOptions({
      title: headerTitle,
    });
  }, [categoryId, navigation]);

  // This function is used to render each item in the FlatList
  function renderMealItem(itemData) {

    function pressHandler() {
      navigation.navigate("MealsDetails", {
        mealId: itemData.item.id,
      });
    }
    
    return (
      // Passing the itemData to the MealItemTile component to display the meal details
      <MealItemTile
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onPressProps={pressHandler}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
