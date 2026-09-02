import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from "react-native"

export default function ProductScreen({ route }: any) {
    const navigation = useNavigation<any>();
    return (
        <View>
            <Text>ProductScreen: {route?.params?.id}</Text>
            <Button title="Go Home"
                onPress={() => {
                    navigation.navigate("index")
                }}
            />
        </View>
    )
}