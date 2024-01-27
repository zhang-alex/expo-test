import { View, Pressable, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { AppContext } from "../../AppContextProvider";

export default function ListView({ navigation }) {
  const { journalData } = useContext(AppContext);

  const handleEntryPress = (index) => {
    navigation.navigate("EntryView", { selectedIndex: index });
  };

  return (
    <View>
      {journalData.map((entry, index) => (
        <Pressable key={index} onPress={() => handleEntryPress(index)}>
          <View style={styles.entryContainer}>
            <Text style={styles.title}>{entry.title}</Text>
            <Text style={styles.subtitle}>{entry.subtitle}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  entryContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
});
