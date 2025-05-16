import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealsDetailsTile = ({ duration, complexity, affordability ,style ,textStyle }) => {
  return (
    <View style={[styles.detailsContainer,style]}>
      <Text style={[styles.itemTxt,textStyle]}>{duration}m</Text>
      <Text style={[styles.itemTxt,textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.itemTxt,textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealsDetailsTile;

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
  itemTxt: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
