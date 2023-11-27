import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";

type RouteaParams = {
    usuario : string
    idade : any
    carro : string
    anoCarro : any
    preco : any
}

export default function Budget(){

    const navigation = useNavigation()
    const route = useRoute()
    const { usuario, idade, carro, anoCarro, preco } = route.params as RouteaParams

    const [porIdade, setPorIdade] = useState(0)
    const [porAnoCarro, setPorAnoCarro] = useState(0)
    const [total, setTotal] = useState(0)
    const [base, setBase] = useState(0)


    function handleFinish(){
        navigation.navigate('login')
    }

    function handleBack(){
        navigation.goBack()
    }

    const handleTotalCalculation = () => {
        var persc = 0
        console.log('base dentro do handle total:',base)

        if ((anoCarro >= 2016) && (idade >= 29)) {
            const ReduzIdade = (base * 0.15)
            console.log('baseReduzIdade:', ReduzIdade)

            const ReduzAnoCarro = (base * 0.1)
            console.log('baseReduzAnoCarro:', ReduzIdade)

            const totalCalculado = base - ReduzIdade - ReduzAnoCarro
            console.log('totalCalculado:', totalCalculado)

            setTotal(totalCalculado)
        } else if ((idade >= 29)){
            console.log('porIdade:', porIdade)
            console.log('porAnoCarro:', porAnoCarro)

            const baseReduz = (base - (base * 0.15))
            console.log('baseReduz:', baseReduz)

            if (anoCarro < 2000) {
                setPorAnoCarro(baseReduz * 0.3)
            } else if ((anoCarro >= 2000) && (anoCarro <=2009)) {
                setPorAnoCarro(baseReduz * 0.15)
            } else if ((anoCarro >= 2010) && (anoCarro <= 2015)) {
                setPorAnoCarro(0) 
            } else if (anoCarro >= 2016) {
                setPorAnoCarro(baseReduz - (base * 0.1))
            }

            const totalCalculado = baseReduz + porAnoCarro
            console.log('totalCalculado:', totalCalculado)

            setTotal(totalCalculado)
        } else if (anoCarro >= 2016){
            console.log('porIdade:', porIdade)
            console.log('porAnoCarro:', porAnoCarro)

            const baseReduz = (base - (base * 0.15))
            console.log('baseReduz:', baseReduz);

            if (idade < 22) {
                setPorIdade(baseReduz * 0.2)
            } else if ((idade >= 22) && (idade <= 28)) {
                setPorIdade(baseReduz * 0.18)
            } else if (idade >= 29) {
                setPorIdade(baseReduz - (base * 0.15))
            }

            const totalCalculado = baseReduz + porIdade
            console.log('totalCalculado:', totalCalculado)

            setTotal(totalCalculado)
        } else {
            console.log('porIdade:', porIdade)
            console.log('porAnoCarro:', porAnoCarro)

            const totalCalculado = base + porAnoCarro + porIdade
            console.log('totalCalculado:', totalCalculado)
            setTotal(totalCalculado)
        }
    }

    useEffect(() => {
        handleBaseCalculation()
        handlePorIdadeCalculation()
        handelPorAnoCarroCalculation()
        handleTotalCalculation()
      }, [idade, anoCarro])

    
    const handleBaseCalculation = () => {
        console.log('base:', base)
        console.log('idade:', porIdade)
        console.log('anoCarro:', porAnoCarro)

        if (preco > 100000) {
            setBase(2000)
            console.log('base:', base)
        } else if ((preco <= 100000) && (preco >= 50000)) {
            setBase(1500)
            console.log('base:', base)
        } else if (preco < 50000) {
            setBase(1000)
            console.log('base:', base)
        }
    }

    const handlePorIdadeCalculation = () => {
        console.log('base dentro do handle idade:',base)


        if (idade < 22) {
            setPorIdade(base * 0.2)
        } else if ((idade >= 22) && (idade <= 28)) {
            setPorIdade(base * 0.18)
        } else if (idade >= 29) {
            setPorIdade(base * 0.15)
        }
    }

    const handelPorAnoCarroCalculation = () => {
        console.log('base dentro do handle ano:',base)

        if (anoCarro < 2000) {
            setPorAnoCarro(base * 0.3)
        } else if ((anoCarro >= 2000) && (anoCarro <=2009)) {
            setPorAnoCarro(base * 0.15)
        } else if ((anoCarro >= 2010) && (anoCarro <= 2015)) {
            setPorAnoCarro(0) 
        } else if (anoCarro >= 2016) {
            setPorAnoCarro(base * 0.1)
        }
    }

    return(
        <LinearGradient
            style={{flex:1,justifyContent:"center"}}
            colors={['#5374B6','#B65353']}>
            <SafeAreaView style={style.main}>
                <Text style={style.title}>SIMULACAR</Text>
                <View style={style.boxAll}>
                    <View style={style.boxSubTitle}>
                        <Text style={style.textSubTitle}>{usuario}, fizems um orçamento para o seguro do seu veículo {carro}.</Text>
                    </View>
                    <View style={style.boxAll}>
                        <View style={style.boxResults}>
                            <Text style={style.textResults}>Base</Text>
                            <Text style={style.textResults}>R$ {base}</Text>
                        </View>
                        <View style={style.boxResults}>
                            <Text style={style.textResults}>Por Idade</Text>
                            <Text style={style.textResults}>R$ {porIdade}</Text>
                        </View>
                        <View style={style.boxResults}>
                            <Text style={style.textResults}>Por Ano</Text>
                            <Text style={style.textResults}>R$ {porAnoCarro}</Text>
                        </View>
                    </View>
                    <View style={style.boxResults}>
                        <Text style={style.textResults}>Total</Text>
                        <Text style={style.textResults}>R$ {total}</Text>
                    </View>
                </View>
                <View style={style.boxBotao}>
                    <TouchableOpacity   onPress={handleFinish}
                                        style={style.botao}>
                        <Text style={style.textNext}>Finalizar</Text>
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