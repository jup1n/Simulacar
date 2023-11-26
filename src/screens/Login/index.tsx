import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style";
import { LinearGradient } from "expo-linear-gradient";


export default function Login(){

    const navigation = useNavigation()
    const [usuario, setUsuario] = useState('')


    function handleNext(){
        navigation.navigate('inputAge', { usuario })
    }

    return(
        <LinearGradient
            style={{flex:1,justifyContent:"center"}}
            colors={['#5374B6','#B65353']}>
            <SafeAreaView style={style.main}>
                <Text style={style.title}>
                    SIMULACAR
                </Text>
                <View style={style.boxLogin}>
                    <View style={style.boxInputs}>
                        <Text style={style.textInputs}>
                            Usuario
                        </Text>
                        <TextInput  style={style.inputs} 
                                    onChangeText={setUsuario}/>
                    </View>
                    <View style={style.boxInputs}>
                        <Text style={style.textInputs}>
                            Senha
                        </Text>
                        <TextInput style={style.inputs}/>
                    </View>
                </View>
                <View style={style.boxBotao}>
                    <TouchableOpacity   style={style.botao} 
                                        onPress={handleNext}>
                        <Text style={style.loginText}>
                            Logar
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={style.boxSenha}> 
                    <TouchableOpacity>
                        <Text style={style.textSenha}>
                            Esqueci minha senha
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}