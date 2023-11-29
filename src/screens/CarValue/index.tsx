import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

type RouteParams = {
    usuario : string
    idade : any
    carro : string
    anoCarro : any
}

export default function CarValue(){

    const navigation = useNavigation()
    const route = useRoute()
    const [preco, setPreco] = useState(0)

    const { usuario, idade, carro, anoCarro } = route.params as RouteParams


    function handleNext(){
        navigation.navigate('budget', { usuario, idade, carro, anoCarro, preco })
    }

    function handleBack(){
        navigation.goBack()
    }

    const handlePrecoChange = (text: string) => {
        setPreco(parseInt(text, 10));
      };

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
                        {usuario}, para proxeguirmos, qual é o valor do seu carro?
                    </Text>
                </View>
                <View style={style.boxOverInputs}>
                    <View style={style.boxInputs}>
                        <Text style={style.textInputs}>Valor do carro</Text>
                        <TextInput  style={style.inputs} 
                                    keyboardType="numeric" 
                                    onChangeText={handlePrecoChange}
                                    returnKeyType="done"/>
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