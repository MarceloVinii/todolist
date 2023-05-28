import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons, AntDesign } from "@expo/vector-icons"

import { styles } from "./styles"

type Props = {
  name: string
  onRemove: () => void
}

export default function Tasks({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTask}>{name}</Text>
      <TouchableOpacity>
        <AntDesign name="delete" size={22} color="#888888" />
      </TouchableOpacity>
    </View>
  )
}
