import { Image, useColorScheme} from 'react-native'
import DarkLogo from '../assets/images/darklogo2.jpg'
import LightLogo from '../assets/images/lightlogo2.jpg'

const ThemedLogo = () => {
    const colorscheme = useColorScheme();

    const logo = colorscheme === 'dark'? DarkLogo : LightLogo;

  return (
    <>
      <Image source={logo} />
    </>
  )
}

export default ThemedLogo
