import { StyleSheet } from 'react-native'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const Books = () => {
  return (
    <ThemedView style={ styles.container }>
      <ThemedText title={true} style={ styles.title }>Books</ThemedText>
    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    link: {
      marginVertical: 10,
      borderBottomWidth: 0.4,
    },
    img:{
      marginVertical: 20
    }
})