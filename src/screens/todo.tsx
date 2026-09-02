import {
    View,
    FlatList,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    Platform
} from 'react-native';
import { Checkbox } from "expo-checkbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from 'react';

type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

export default function TodoScreen() {
    const [title, setTitle] = React.useState<string>("");
    const [todoList, setTodoList] = React.useState<Todo[]>([
        {
            id: 1,
            title: "Công việc 1",
            completed: false
        },
        {
            id: 2,
            title: "Công việc 2",
            completed: true
        },
        {
            id: 3,
            title: "Công việc 3",
            completed: false
        }
    ]);

    const handleChangeValue = (id: number) => {
        setTodoList(
            todoList.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    const handleDelete = (id: number) => {
        if (Platform.OS === "web") {
            const confirmed = window.confirm("Bạn có chắc chắn muốn xóa không?");
            if (confirmed) {
                setTodoList((prev) => prev.filter((item) => item.id !== id));
            }
            return;
        }

        Alert.alert("Xác nhận", "Bạn có chắc chắn muốn xóa?", [
            {
                text: "Hủy",
                style: "cancel"
            },
            {
                text: "Xác nhận",
                onPress: () => {
                    setTodoList((prev) => prev.filter((item) => item.id !== id));
                }
            }
        ]);
    };

    const handleAdd = () => {
        if (!title.trim()) return;
        setTodoList([
            ...todoList,
            {
                id: todoList.length > 0 ? Math.max(...todoList.map((t) => t.id)) + 1 : 1,
                title: title,
                completed: false
            }
        ]);
        setTitle("");
    };

    return (
        <View>
            <Text style={styles.container}>ToDoList App</Text>
            <View style={styles.item}>
                <FlatList
                    data={todoList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemCheckbox}>
                            <View style={styles.itemLeft}>
                                <Checkbox
                                    onValueChange={() => handleChangeValue(item.id)}
                                    value={item.completed}
                                />
                                <Text style={item.completed ? styles.completed : undefined}>
                                    {item.title}
                                </Text>
                            </View>
                            <Ionicons
                                name="backspace"
                                size={24}
                                color="black"
                                onPress={() => handleDelete(item.id)}
                            />
                        </View>
                    )}
                />
            </View>
            <View>
                <TextInput
                    placeholder="Enter name"
                    value={title}
                    onChangeText={setTitle}
                />
                <TouchableOpacity onPress={handleAdd}>
                    <Text>Add</Text>
                </TouchableOpacity>
                <Text>Lỗi:</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red"
    },
    completed: {
        textDecorationLine: "line-through"
    },
    item: {
        padding: 10,
        gap: 10
    },
    itemCheckbox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    }
});