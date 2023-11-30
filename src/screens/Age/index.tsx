import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { MaskedInput } from "@components/inputs";

type RouteParams = {
    usuario : string
}

export default function InputAge(){

    const navigation = useNavigation()
    const route = useRoute()
    const [idade, setIdade] = useState(0)
    const [cpf, setCpf] = useState('')

    const { usuario } = route.params as RouteParams


    function handleNext(){
        try {
            if (idade === 0 || cpf === '') {
                Alert.alert('Erro', 'Credenciais inválidas. Tente novamente.')
            } else {
                navigation.navigate('carInfo', { usuario, idade })
            }
          } catch (error) {
            console.error('Erro durante a autenticação:', error)
          }
        
    }

    function handleBack(){
        navigation.goBack()
    }

    const handleIdadeChange = (text: string) => {
        setIdade(parseInt(text, 10));
    }

    const handleCPF = (valor: string) => {
        setCpf(valor)
    }

    return(
        <LinearGradient
            style={{flex:1}}
            colors={['#5374B6','#B65353']}>
            <SafeAreaView style={style.main}>
                <Text style={style.title}>
                    SIMULACAR
                </Text>
                <View style={style.subTitle}>
                    <Text style={style.textInputs}>
                        Olá {usuario},vamos realizar uma simulação para um seguro.
                    </Text>
                </View>
                <View style={style.boxOverInputs}>
                    <View style={style.boxInputs}>
                        <Text style={style.textInputs}>Qual a sua idade?</Text>
                        <TextInput  style={style.inputs} 
                                    keyboardType="numeric" 
                                    onChangeText={handleIdadeChange}
                                    returnKeyType="done"/>
                    </View>
                    <View>
                        <Text style={style.textInputs}>Informe o seu CPF</Text>
                        <MaskedInput valor={cpf}
                                     style={style.inputs}
                                     typeInput="cpf"
                                     onChange={handleCPF}/>
                    </View>
                </View>
                <View style={style.boxBotao}>
                    <TouchableOpacity  style={style.botao} 
                                        onPress={handleNext}>
                        <Text style={style.textNext}>
                            Próximo
                        </Text>
                    </TouchableOpacity>  
                </View>
                <View style={style.boxBack}>
                    <TouchableOpacity onPress={handleBack}>
                        <Text style={style.textBack}>
                            Voltar
                        </Text>
                    </TouchableOpacity>  
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}