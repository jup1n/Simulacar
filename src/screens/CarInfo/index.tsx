import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { MaskedInput } from "@components/inputs";

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
    const [placa, setPlaca] = useState('')


    function handleNext(){
        try {
            if (anoCarro === 0 || placa === '') {
                Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.')
            } else {
                navigation.navigate('carValue', { usuario, idade, carro, anoCarro })
            }
          } catch (error) {
            console.error('Erro durante a autenticação:', error)
          }
    }

    function handleBack(){
        navigation.goBack()
    }

    const handleAnoChange = (text: string) => {
        setAnoCarro(parseInt(text,10))
    }

    const handlePlaca = (valor: string) => {
        setPlaca(valor)
    }

    return(
        <LinearGradient
            style={{flex:1,justifyContent:"center"}}
            colors={['#5374B6','#B65353']}>
            <SafeAreaView style={style.main}>
                <Text style={style.title}>SIMULACAR</Text>
                <View style={style.subTitle}>
                    <Text style={style.textInputs}>{usuario}, agora vamos solicitar os dados do seu veículo.</Text>
                </View>
                <View style={style.boxOverInputs}>
                    <View style={style.boxInputs}>
                        <Text style={style.textInputs}>Qual o seu carro?</Text>
                        <TextInput  onChangeText={setCarro}
                                    style={style.inputs}/>
                    </View>
                    <View style={style.boxInputs}>
                        <Text style={style.textInputs}>Qual o ano do seu carro?</Text>
                        <TextInput  onChangeText={handleAnoChange}
                                    style={style.inputs}
                                    keyboardType="numeric" 
                                    returnKeyType="done"/>
                    </View>
                    <View>
                        <Text style={style.textInputs}>Informe a placa do seu carro</Text>
                        <MaskedInput valor={placa}
                                     style={style.inputs} 
                                     optionsInput={{
                                        mask: 'AAA-9999',
                                        translation: {
                                            A: (valor: string) => valor.toUpperCase()
                                        }
                                     }} 
                                     typeInput="custom"
                                     onChange={handlePlaca}/>
                    </View>
                </View>
                <View style={style.boxBotao}>
                    <TouchableOpacity   style={style.botao}
                                        onPress={handleNext}>
                        <Text style={style.textNext}>Proximo</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.boxBack}>
                    <TouchableOpacity onPress={handleBack}>
                        <Text style={style.textBack}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}