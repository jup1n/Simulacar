import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";
import { LinearGradient } from "expo-linear-gradient";

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
        navigation.navigate('carValue', { usuario, idade, carro, anoCarro })
    }

    function handleBack(){
        navigation.goBack()
    }

    const handleAnoChange = (text: string) => {
        setAnoCarro(parseInt(text,10))
    }

    const [porIdade, setPorIdade] = useState(0)
    const [porAnoCarro, setPorAnoCarro] = useState(0)
    const [total, setTotal] = useState(0)

    const handlePorIdadeCalculation = () => {
        var persc = 0
        var perscAno = 0

        if (idade < 22) {
            persc = 20
            setPorIdade(1000 * (persc/100))
        } else if ((idade >= 22) && (idade <= 28)) {
            persc = 18
            setPorIdade(1000 * (persc/100))
        } else if (idade >= 29) {
            persc = 10
            setPorIdade(1000 * (persc/100))
        }

        if (anoCarro < 2000) {
            perscAno = 30
            setPorAnoCarro(1000 * (perscAno/100))
        } else if ((anoCarro >= 2000) && (anoCarro <=2009)) {
            perscAno = 15
            setPorAnoCarro(1000 * (perscAno/100))
        } else if ((anoCarro >= 2010) && (anoCarro <= 2015)) {
            setPorAnoCarro(0) 
        } else if (anoCarro >= 2016) {
            perscAno = 10
            setPorAnoCarro(1000 * (perscAno/100))
        }

        setTotal(1000 + porAnoCarro + porIdade)

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