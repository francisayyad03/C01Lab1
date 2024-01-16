import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';


const ToDoList = ({ initialTasks }) => {
    const [tasks, setTasks] = useState(initialTasks.map(task => ({ id: uuidv4(), title: task })));

    
    const addTask = (newTitle) => {
        const newTask = { id: uuidv4(), title: newTitle };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };
    const removeTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    return (
        <View style={styles.listContainer}>
            {tasks.map(task => (
                <View key={task.id} style={styles.taskItem}>
                    <Text>{task.title}</Text>
                    <Button title="Remove" onPress={() => removeTask(task.id)} />
                </View>
            ))}
            <AddTask onAddTask={addTask} />
        </View>
    );
};

ToDoList.defaultProps = {
    initialTasks: [],
};


const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;
