import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { AppContext } from "../../AppContextProvider";

export default function EntryView({ route: { params } }) {
  const { journalData, setJournalData } = useContext(AppContext);
  const { selectedIndex } = params;

  const selectedEntry = journalData[selectedIndex];
  const [editedTitle, setEditedTitle] = useState(selectedEntry.title);

  const handleTitleChange = (text) => {
    setEditedTitle(text);
  };

  const handleSave = () => {
    // Update the title in the journalData array
    const updatedJournalData = [...journalData];
    updatedJournalData[selectedIndex] = {
      ...selectedEntry,
      title: editedTitle,
    };
    setJournalData(updatedJournalData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        value={editedTitle}
        onChangeText={handleTitleChange}
        placeholder="Edit Title"
      />
      <Text style={styles.subtitle}>{selectedEntry.subtitle}</Text>
      <Text style={styles.saveButton} onPress={handleSave}>
        Save
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleInput: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 30,
    color: "gray",
  },
  saveButton: {
    color: "blue",
    fontSize: 18,
    marginTop: 10,
  },
});
