import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useAddExpense = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()

    return {
        
        navigation
    }
}