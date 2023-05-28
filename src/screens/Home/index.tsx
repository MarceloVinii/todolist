import React, { useState, useEffect } from "react"
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import Header from "../../components/Header"
import Tasks from "../../components/Tasks"

interface TaskProps {
  id: string
  name: string
  done: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskName, setTaskName] = useState("")
  const [createdCount, setCreatedCount] = useState(0)
  const [doneCount, setDoneCount] = useState(0)

  useEffect(() => {
    const createdTasks = tasks.length
    const doneTasks = tasks.filter((task) => task.done).length

    setCreatedCount(createdTasks)
    setDoneCount(doneTasks)
  }, [tasks])

  function handleAddTask() {
    const data = {
      id: String(new Date().getTime()),
      name: taskName,
      done: false,
    }
    setTasks((oldState) => [...oldState, data])
    setTaskName("")
  }

  function handleRemoveTask(id: string) {
    Alert.alert("Remover", "Deseja realmente remover essa tarefa ?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((oldState) => oldState.filter((tasks) => tasks.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ])
  }
  function handleToggleTaskDone(id: string) {
    setTasks((oldState) =>
      oldState.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

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
          <Text style={styles.textCounter}>{createdCount}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textDone}>Concluidas</Text>
          <Text style={styles.textCounter}>{doneCount}</Text>
        </View>
      </View>

      <View style={styles.list}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Tasks
              key={item.id}
              name={item.name}
              done={item.done}
              toggleTaskDone={() => handleToggleTaskDone(item.id)}
              onRemove={() => handleRemoveTask(item.id)}
            />
          )}
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
