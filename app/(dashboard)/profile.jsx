import { StyleSheet, Text } from 'react-native'
import { useUser } from '../../hooks/useUser'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'

const Profile = () => {

  const { logout, user } = useUser();

  return (
    <ThemedView style= { styles.container }>

      <ThemedText style={ styles.title } title={true}>{user.email}</ThemedText>

      <ThemedText>Time to start reading some books...</ThemedText>

      <Spacer />

      <ThemedButton onPress={logout}>
        <Text style={{ color: '#f2f2f2' }}>Logout</Text>
      </ThemedButton>

    </ThemedView>
  )
}

export default Profile

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