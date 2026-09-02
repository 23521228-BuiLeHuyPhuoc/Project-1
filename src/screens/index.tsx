import { useNavigation } from "@react-navigation/native";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }} >
        <View style={{ flex: 1 }}>
          <Button title="Open HomeTab"
            onPress={() => {
              navigation.navigate("HomeTab")
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  item: {
    width: Dimensions.get('window').width / 2 - 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'none',
  },
  bigtitle: {
    color: "blue",
    fontWeight: "bold",
  }
});
