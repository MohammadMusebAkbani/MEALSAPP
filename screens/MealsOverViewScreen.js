import React, { useEffect ,useContext} from "react";
import { MEALS , CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealsList/MealList";


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

        // MealList component is used to display the list of meals.
  return <MealList items={displayedMeals}/>;
  
};

export default MealsOverViewScreen;


