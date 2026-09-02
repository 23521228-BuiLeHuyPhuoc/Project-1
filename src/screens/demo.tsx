import { View, Text } from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context"
import Item from '../../@components/Item'
import { DemoContext } from '@/contexts/DemoContext'
export default function Demo() {
    const handlePress=()=>{
        console.log("Vừa click");
    }
  return (
    <SafeAreaView>
        <DemoContext.Provider value={{message:"Hello from DemoContext"}}>
      <View>
        <Item>
            
        </Item>
      </View>
      </DemoContext.Provider>
    </SafeAreaView>
  )
}