import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type RouteParams = {
    usuario : string,
    idade : any,

}

export default function CarInfo(){

    const navigation = useNavigation()
    const route = useRoute()
    const { usuario, idade } = route.params as RouteParams

    const [carro, setCarro] = useState('')
    const [anoCarro, setAnoCarro] = useState(0)

    function handleNext(){
        navigation.navigate('budget', { usuario, idade, carro, anoCarro })
    }

    function handleBack(){
        navigation.goBack()
    }

    return(
        <SafeAreaView>
            <Text>Simulacar</Text>
            <View>
                <Text>{usuario}, agora vamos solicitar os dados do seu veículo.</Text>
            </View>
            <TouchableOpacity>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}