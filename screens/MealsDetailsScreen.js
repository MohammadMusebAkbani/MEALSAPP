import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useLayoutEffect,useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealsDetailsTile from "../components/MealsDetailsTile";
import IconButtons from "../components/IconButtons";
import { FavoritesContext } from "../store/context/Favorites-context";

const MealsDetailsScreen = ({ route, navigation }) => {
  const favoritesMealsCntxt = useContext(FavoritesContext);

  const { mealId } = route.params;
  const selectedMeal = MEALS.find((props) => props.id === mealId);
  
//  Context API is used to manage the state of favorite meals.
  // The useContext hook is used to access the FavoritesContext.
  const mealIsFavorite = favoritesMealsCntxt.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoritesMealsCntxt.removeFavorite(mealId);
    } else {
      favoritesMealsCntxt.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
        // IconButtons is a custom component that renders an icon button.
        <IconButtons
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onPressProps={changeFavoriteStatusHandler}
        />
     ) },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.titleTxt}>{selectedMeal.title}</Text>
      {/* Calling MealDetails.js Component to Display Tile Details using Props. */}
      <MealsDetailsTile
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={{ color: "white" }}
      />
      <View style={{ width: "90%", alignSelf: "center" }}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Ingredients</Text>
        </View>
        <View>
          {selectedMeal.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.mapItem}>
              <Text style={styles.mapTxt}>{ingredient}</Text>
            </View>
          ))}
        </View>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Steps</Text>
        </View>

        <View>
          {selectedMeal.steps.map((step, index) => (
            <View key={index} style={styles.mapItem}>
              <Text style={styles.mapTxt}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  titleTxt: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e2b497",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12, // chenging the line of ingredients and steps.
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
  mapTxt: {
    color: "#351401",
    textAlign: "center",
  },
  mapItem: {
    marginBottom: 5, // adds spacing between each item
    padding: 5,
    backgroundColor: "#e2b497",
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 12,
  },
});
