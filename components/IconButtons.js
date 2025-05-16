import { StyleSheet, Text,Pressable, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

const IconButtons = ({icon , color,onPressProps}) => {
  return (
    <View>
      <Pressable onPress={onPressProps}
      style={({pressed}) => pressed ? {opacity: 0.5} : null}>
      <Ionicons name={icon} size={24} color={color} />
      </Pressable>
    </View>
  )
}

export default IconButtons

const styles = StyleSheet.create({})