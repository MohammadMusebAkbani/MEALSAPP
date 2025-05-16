import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";
import MealsDetailsTile from "./MealsDetailsTile";

const MealItemTile = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPressProps,
}) => {
  return (
    <View style={styles.mealItemContainer}>
      <Pressable android_ripple={{ color: "#ccc" }}
       style={({ pressed }) => (pressed ? styles.btnpressed : null)}
       onPress={onPressProps}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.titleTxt}>{title}</Text>
          </View>
          <MealsDetailsTile
            duration={duration}
            complexity={complexity}
            affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItemTile;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  titleTxt: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  mealItemContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.26,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
  btnpressed: {
    opacity: 0.5,
  },
});
