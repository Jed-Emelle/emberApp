import { StyleSheet } from "react-native"
import { Link } from "expo-router"

// themed components
import ThemedLogo from "../components/ThemedLogo"
import ThemedView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"
import Spacer from "../components/Spacer"

 
const HomePage = () => {
  return (
    <ThemedView style={ styles.container }>

      <ThemedLogo />
      <Spacer height={5}/>

      <ThemedText title={true} style={ styles.title }>Ember</ThemedText>
      <Spacer height={10}/>

      <Spacer />
      
      <Link 
        style={ styles.link } 
        href='/login'>
          <ThemedText>Login page</ThemedText>
      </Link>

      <Link 
        style={ styles.link } 
        href='/register'>
          <ThemedText>Register page</ThemedText>
      </Link>

      <Link 
        style={ styles.link } 
        href='/profile'>
          <ThemedText>Profile</ThemedText>
      </Link>

    </ThemedView>

  )
}

export default HomePage

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
      borderBottomWidth: 1,
    },
    img:{
      marginVertical: 20
    }
})