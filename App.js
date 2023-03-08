import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoding, setIslodind] = useState(true);
  const [data, setData] = useState([]);

  const getMenu = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json"
      );
      const json = await response.json();
      setData(json.menu);
    } catch (error) {
      console.error(error);
    } finally {
      setIslodind(false);
    }
  };
  useEffect(() => {
    getMenu();
  }, []);

  const Item = ({ name }) => {
    <View>
      <Text>{name}</Text>
    </View>;
  };
  const renderItem = ({ item }) => <Item name={item.title} />;
  const names = data.map((e, i) => {
    return <Text key={i}> {e.title} </Text>;
  });

  return (
    <View style={styles.container}>
      <Text>View Menu</Text>
      <View>{names}</View>
      {isLoding ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
