import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Budget(){

    const navigation = useNavigation()
    const [name, setName] = useState('')

    function handleFinish(){
        navigation.navigate('login')
    }

    function handleBack(){
        navigation.goBack()
    }

    return(
        <SafeAreaView>
            <Text>Simulacar</Text>
            <View>
                <Text>.. , fizems um orçamento para o seguro do seu veículo ... .</Text>
                <View>
                    <View>
                        <Text>Base</Text>
                        <Text>R$ 1.000,00</Text>
                    </View>
                    <View>
                        <Text>Por Idade</Text>
                        <Text>R$ 0,00</Text>
                    </View>
                    <View>
                        <Text>Por Ano</Text>
                        <Text>R$ 0,00</Text>
                    </View>
                </View>
                <View>
                    <Text>Total</Text>
                    <Text>R$ 1.000,00</Text>
                </View>
            </View>

            <TextInput>Próximo</TextInput>
            <TouchableOpacity>
                <View>Voltar</View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}