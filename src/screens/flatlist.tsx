import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
const DATA = [
  {
    id: '1',
    title: 'First Item',
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: '2',
    title: 'Second Item',
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: '3',
    title: 'Third Item',
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: '4',
    title: 'Fourth Item',
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: '5',
    title: 'Fifth Item',
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

];
type PostItem = {
  id: number;
  title: string;
  body: string;
}
export default function FlatlistScreen({ route }: any) {
  console.log(route);
  const [refreshing, setRefreshing] = React.useState(false);
  const flatListRef = React.useRef<FlatList<PostItem>>(null);

  const handleScrollTo = () => {
    flatListRef.current?.scrollToEnd();
  }
  return (
    <View>
      <Button title="Scrollto" onPress={handleScrollTo} />
      <Text>flatlist</Text>
      <FlatList
        ref={flatListRef}
        ListHeaderComponent={<Text >Flat List Header</Text>}
        ListFooterComponent={<Text >Flat List Footer</Text>}
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.view}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.body}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        //   onViewableItemsChanged={(value)=>{
        //     console.log("onViewableItemsChanged", value);
        //   }}
        // onEndReached={()=>{
        //     console.log("End reached");
        //   }}
        refreshing={refreshing}
        onRefresh={() => {
          console.log("refreshing");
          //Goi API -> khi API co ket qua
          setRefreshing(true);
          setTimeout(() => {
            {
              setRefreshing(false);
              console.log("API call finished");
            }
          }, 2000)
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
  },
  view: {
    width: "50%",
  }
})