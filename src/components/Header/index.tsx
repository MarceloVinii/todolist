import React from "react"
import { View, Text, StatusBar } from "react-native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

import { styles } from "./styles"

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.directionText}>
        <MaterialCommunityIcons
          name="rocket-launch"
          size={24}
          color="#4EA8DE"
        />
        <Text style={styles.firstText}>to</Text>
        <Text style={styles.secondText}>do</Text>
      </View>
    </View>
  )
}
