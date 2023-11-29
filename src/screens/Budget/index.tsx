import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ResultComponent from "@components/results";

type RouteaParams = {
    usuario : string
    idade : any
    carro : string
    anoCarro : any
}

export default function Budget(){

    const navigation = useNavigation()
    const route = useRoute()
    const { usuario, idade, carro, anoCarro } = route.params as RouteaParams

    const [porIdade, setPorIdade] = useState(0)
    const [porAnoCarro, setPorAnoCarro] = useState(0)
    const [total, setTotal] = useState(0)
<<<<<<< Updated upstream
=======
    const [base, setBase] = useState(0)
    const [checked, setChecked] = useState(false)
>>>>>>> Stashed changes


    function handleFinish(){
        navigation.navigate('login')
    }

    function handleBack(){
        navigation.goBack()
    }

    const handleCheck = () => setChecked(prev => !prev)

    const handleTotalCalculation = () => {
        var persc = 0

        if ((anoCarro >= 2016) && (idade >= 29)) {
            const ReduzIdade = (1000 * 0.15)
            console.log('baseReduzIdade:', ReduzIdade)

            const ReduzAnoCarro = (1000 * 0.1)
            console.log('baseReduzAnoCarro:', ReduzIdade)

            const totalCalculado = 1000 - ReduzIdade - ReduzAnoCarro
            console.log('totalCalculado:', totalCalculado)

            setTotal(totalCalculado)
        } else if ((idade >= 29)){
            console.log('porIdade:', porIdade)
            console.log('porAnoCarro:', porAnoCarro)

            const baseReduz = (1000 - (1000 * 0.15))
            console.log('baseReduz:', baseReduz)

            if (anoCarro < 2000) {
                setPorAnoCarro(baseReduz * 0.3)
            } else if ((anoCarro >= 2000) && (anoCarro <=2009)) {
                setPorAnoCarro(baseReduz * 0.15)
            } else if ((anoCarro >= 2010) && (anoCarro <= 2015)) {
                setPorAnoCarro(0) 
            } else if (anoCarro >= 2016) {
                setPorAnoCarro(baseReduz - (1000 * 0.1))
            }

            const totalCalculado = baseReduz + porAnoCarro
            console.log('totalCalculado:', totalCalculado)

            setTotal(totalCalculado)
        } else if (anoCarro >= 2016){
            console.log('porIdade:', porIdade)
            console.log('porAnoCarro:', porAnoCarro)

            const baseReduz = (1000 - (1000 * 0.15))
            console.log('baseReduz:', baseReduz);

            if (idade < 22) {
                setPorIdade(baseReduz * 0.2)
            } else if ((idade >= 22) && (idade <= 28)) {
                setPorIdade(baseReduz * 0.18)
            } else if (idade >= 29) {
                setPorIdade(baseReduz - (1000 * 0.15))
            }

            const totalCalculado = baseReduz + porIdade
            console.log('totalCalculado:', totalCalculado)

            setTotal(totalCalculado)
        } else {
            console.log('porIdade:', porIdade)
            console.log('porAnoCarro:', porAnoCarro)

            const totalCalculado = 1000 + porAnoCarro + porIdade
            console.log('totalCalculado:', totalCalculado)
            setTotal(totalCalculado)
        }

        
    }

    useEffect(() => {
        handlePorIdadeCalculation()
        handelPorAnoCarroCalculation()
        handleTotalCalculation()
      }, [idade, anoCarro, preco])

    const handlePorIdadeCalculation = () => {
        if (idade < 22) {
            setPorIdade(1000 * 0.2)
        } else if ((idade >= 22) && (idade <= 28)) {
            setPorIdade(1000 * 0.18)
        } else if (idade >= 29) {
            setPorIdade(1000 * 0.15)
        }
    }

    const handelPorAnoCarroCalculation = () => {
        if (anoCarro < 2000) {
            setPorAnoCarro(1000 * 0.3)
        } else if ((anoCarro >= 2000) && (anoCarro <=2009)) {
            setPorAnoCarro(1000 * 0.15)
        } else if ((anoCarro >= 2010) && (anoCarro <= 2015)) {
            setPorAnoCarro(0) 
        } else if (anoCarro >= 2016) {
            setPorAnoCarro(1000 * 0.1)
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
<<<<<<< Updated upstream
                        <View style={style.boxResults}>
                            <Text style={style.textResults}>Base</Text>
                            <Text style={style.textResults}>R$ 1.000</Text>
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
=======
                        <ResultComponent titulo={"Base"} valor={base} checked={checked} styleBox={style.boxResults} styleValor={style.textResults}/>
                        <ResultComponent titulo={"Por Idade"} valor={porIdade} checked={checked} styleBox={style.boxResults} styleValor={style.textResults}/>
                        <ResultComponent titulo={"Por Ano"} valor={porAnoCarro} checked={checked} styleBox={style.boxResults} styleValor={style.textResults}/>
>>>>>>> Stashed changes
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
{/* <View style={style.boxResults}>
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
    <View style={style.boxResults}>
        <Text style={style.textResults}>Total</Text>
        <Text style={style.textResults}>R$ {total}</Text>
    </View> */}