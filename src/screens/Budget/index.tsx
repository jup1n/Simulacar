import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";
import ResultComponent from "@components/results";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
    const [checked, setChecked] = useState(false)

    const handleCheck = () => setChecked(prev => !prev)

    function handleFinish(){
        navigation.navigate('login')
    }

    function handleBack(){
        navigation.goBack()
    }

    const handleTotalCalculation = () => {
            const totalCalculado = base + porAnoCarro + porIdade
            setTotal(totalCalculado)
    }

    useEffect(() => {
        handleBaseCalculation()
      }, [])

    useEffect(() => {
        handlePorIdadeCalculation(base)
    }, [])

    useEffect(() => {
        handelPorAnoCarroCalculation(base)
     }, [])
    
    const handleBaseCalculation = () => {
        let baseAux = 0

        if (preco > 100000) {
            baseAux = 2000
        } else if ((preco <= 100000) && (preco >= 50000)) {
            baseAux = 1500
        } else if (preco < 50000) {
            baseAux = 1000
        }

        setBase(baseAux)
    }

    const handlePorIdadeCalculation = (baseAux) => {
        console.log('base dentro do handle idade:',baseAux)


        if (idade < 22) {
            setPorIdade(baseAux * 0.2)
        } else if ((idade >= 22) && (idade <= 28)) {
            setPorIdade(baseAux * 0.18)
        } else if (idade >= 29) {
            setPorIdade(baseAux * 0.15)
        }
    }

    const handelPorAnoCarroCalculation = (baseAux) => {
        console.log('base dentro do handle ano:',baseAux)

        if (anoCarro < 2000) {
            setPorAnoCarro(baseAux * 0.3)
        } else if ((anoCarro >= 2000) && (anoCarro <=2009)) {
            setPorAnoCarro(baseAux * 0.15)
        } else if ((anoCarro >= 2010) && (anoCarro <= 2015)) {
            setPorAnoCarro(0) 
        } else if (anoCarro >= 2016) {
            setPorAnoCarro(baseAux * 0.1)
        }

        handleTotalCalculation()
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
                        <ResultComponent titulo={"Base"} valor={base} checked={checked} styleBox={style.boxResults} styleValor={style.textResults}/>
                        <ResultComponent titulo={"Por Idade"} valor={porIdade} checked={checked} styleBox={style.boxResults} styleValor={style.textResults}/>
                        <ResultComponent titulo={"Por Ano"} valor={porAnoCarro} checked={checked} styleBox={style.boxResults} styleValor={style.textResults}/>
                    </View>
                    <ResultComponent titulo={"Total"} valor={total} checked={checked} styleBox={style.boxResults} styleValor={style.textResults}/>
                </View>
                <View style={style.boxCheked}>
                    <BouncyCheckbox size={25}
                                    fillColor="#1f5524"
                                    unfillColor="#9d5959"
                                    text="Conversão para dólar"
                                    textStyle={style.textResults}
                                    iconStyle={{ borderColor: "#1f5524" }}
                                    innerIconStyle={{ borderWidth: 2 }}
                                    onPress={handleCheck}
                                    isChecked={checked}/>
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