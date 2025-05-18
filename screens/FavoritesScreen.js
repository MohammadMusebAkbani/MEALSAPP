import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MealList from '../components/MealsList/MealList'
import { FavoritesContext } from '../store/context/Favorites-context'
import { MEALS } from '../data/dummy-data'

export default function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext)
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  )
  if (favoriteMeals.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:'white'}}>No favorite meals found. Start adding some!</Text>
      </View>
    )
  }
  return <MealList items={favoriteMeals} />
}

const styles = StyleSheet.create({})