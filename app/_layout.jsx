import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import { UserProvider } from '../context/UserContext'
import { BooksProvider } from '../context/BooksContext'

const RootLayout = () => {
  return (
    <UserProvider>
      <BooksProvider>
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='(auth)' options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
        </Stack>
      </BooksProvider>
    </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})