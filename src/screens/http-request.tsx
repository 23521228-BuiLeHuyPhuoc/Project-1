import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
type Post = {
    id: number;
    title: string;
    body: string
}

export default function HttpRequest() {
    const [posts, setPosts] = React.useState<Post[]>([]);
    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'GET'
                }
            )
            const data = await res.json();
            setPosts(data);
        }
        getPosts();
    }, [])


    return (
        <View>
            <Text style={styles.container}>Http Request</Text>
            <FlatList
                data={posts}
                renderItem={({ item }) => {
                    return <View>
                        <Text style={styles.hehe}>
                            {item.title}
                        </Text>
                        <Text>{item.body}</Text>
                    </View>
                }
                }
                keyExtractor={(item) => item.id.toString()}

            />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    hehe: {
        padding: 10,
        color: "blue",
        borderColor: "black"
    }
})