import { StyleSheet, FlatList, Pressable } from 'react-native'
import { useBooks } from '../../hooks/useBooks'
import { Colors } from '../../constants/Colors'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import ThemedCard from "../../components/ThemedCard"

const Books = () => {

  const { books } = useBooks();

  return (
    <ThemedView style={ styles.container }>
      <ThemedText title={true} style={ styles.title }>Books</ThemedText>

      <Spacer />

      <FlatList 
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable>
            <ThemedCard styles={styles.card}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText> Written by {item.author}</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />

    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  list: {
    marginTop: 40
  },
  card: {
    color: 'yellow',
    width: "90%",
    marginHorizontal: "15%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
})