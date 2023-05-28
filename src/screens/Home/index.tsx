import React, { useState } from "react"
import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import Header from "../../components/Header"
import Tasks from "../../components/Tasks"

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskName, setTaskName] = useState("")

  function handleAddTask() {
    setTasks((oldState) => [...oldState, taskName])
    setTaskName("")
  }

  function handleRemoveTask() {}

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.addNewTask}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Ionicons name="add-circle-outline" size={34} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.tasks}>
        <View style={styles.content}>
          <Text style={styles.textCreated}>Criadas</Text>
          <Text style={styles.textCounter}>0</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textDone}>Concluidas</Text>
          <Text style={styles.textCounter}>0</Text>
        </View>
      </View>

      <View style={styles.list}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={(item) => {
            return (
              <View>
                {<Tasks name="Estudar React" onRemove={handleRemoveTask} />}
              </View>
            )
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmpty}>
              <MaterialCommunityIcons
                name="clipboard-text-outline"
                size={58}
                color="#333333"
              />
              <Text style={styles.textOne}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.textTwo}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
