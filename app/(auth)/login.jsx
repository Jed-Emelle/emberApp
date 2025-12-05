import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import { Colors } from '../../constants/Colors'

//themed components 
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'

const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError  ] = useState(null)
  const router = useRouter()

  const { login } = useUser();

  const handleSubmit = async () => {
    setError(null)
    try{
      await login(email, password)
      .then(() => {
        router.replace('/profile')
      })
    } catch(error) {
      setError(error.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={ styles.container }>

        <ThemedText title={true} style= {styles.title }>Login to your Account</ThemedText>
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
                style={{ fontSize: 16 }}>Login
              </Text>
          </ThemedButton>

          <Spacer />

          { error && <Text style={styles.error}>{String(error)}</Text> }

          <Spacer />

          <Link 
              style={[ styles.link, {textDecorationLine: 'none'} ]} 
              href='/register'>
              <ThemedText>Register instead</ThemedText>
          </Link>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

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