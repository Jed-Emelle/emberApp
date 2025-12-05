import { Stack } from 'expo-router'
import GuestOnly from '../../components/auth/GuestOnly';

const AuthenticationLayout = () => {

  return (
    <GuestOnly>
      <Stack>
        <Stack.Screen name='login' options= {{ headerShown: false, animation: 'none' }}/> 
        <Stack.Screen name='register' options= {{ headerShown: false, animation: 'none'  }}/> 
      </Stack>
    </GuestOnly>
  )
}

export default AuthenticationLayout
