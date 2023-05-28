import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"

import { styles } from "./styles"

type Props = {
  name: string
  done: boolean
  onRemove: () => void
  toggleTaskDone: () => void
}

export default function Tasks({ name, done, onRemove, toggleTaskDone }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={toggleTaskDone}>
          <MaterialCommunityIcons
            name={
              done
                ? "checkbox-marked-circle-outline"
                : "checkbox-blank-circle-outline"
            }
            size={22}
            color={done ? "#5E60CE" : "#888888"}
            onPress={toggleTaskDone}
          />
        </TouchableOpacity>
      </View>
      <Text style={done ? styles.textTaskDone : styles.textTask}>{name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <AntDesign name="delete" size={22} color="#888888" />
      </TouchableOpacity>
    </View>
  )
}
