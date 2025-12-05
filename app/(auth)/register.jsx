import { Keyboard, StyleSheet, Text } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import { Colors} from '../../constants/Colors'


// themed imports
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import ThemedTextInput from '../../components/ThemedTextInput'
import { TouchableWithoutFeedback } from 'react-native' 


const Register = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(null)
    const router = useRouter()

    const { register } = useUser()

  const handleSubmit = async () => {
    setError(null)
    try{
      await register(email, password)
      .then(() => {
        router.replace('/profile')
      })
    } catch(error) {
      setError(error)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText title={true} style={ styles.title }>Register</ThemedText>

        <Spacer />

        <ThemedTextInput 
          style={{ width: '80%', marginBottom: 20 }}
          placeholder = 'Email'
          keyboardType = "email-address"
          value = {email}
          onChangeText = {setEmail}
          />

        <ThemedTextInput 
          style={{ width: '80%', marginBottom: 20 }}
          placeholder = 'Password'
          value = {password}
          onChangeText = {setPassword}
          secureTextEntry
          />

          <ThemedButton
              onPress={handleSubmit}>
              <Text 
                style={{ fontSize: 16 }}>Register
              </Text>
          </ThemedButton>

          <Spacer />

          { error && <Text style={styles.error}>{String(error)}</Text> }

          <Spacer />

        <Link 
          style={ styles.link }  
          href='/login'>
          <ThemedText>Back to Login </ThemedText>
      </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}
export default Register

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
    btn: {
        backgroundColor: '#65e0ecff',
        margin: 15,
        padding: 8,
        borderRadius: 5,
        },
    link: {
      marginVertical: 10,
      borderBottomWidth: 0.4,
    },
    error: {
      color: Colors.warning,
      padding: 10,
      backgroundColor: '#f5c1c8',
      borderColor: Colors.warning,
      borderWidth: 1,
      borderRadius: 6,
      marginHorizontal: 10
    }
})