import { Text, View } from "react-native"

type Props = {
    styleBox: any,
    styleValor: any,
    titulo : String,
    valor : any,
    checked : any
}

export default function ResultComponent( props : Props) {

    const resultText = props.checked ? `$ ${props.valor / 5}` : `R$ ${props.valor}`

    return (
        <View style={props.styleBox}>
            <Text style={props.styleValor}>{props.titulo}</Text>
            <Text style={props.styleValor}>{resultText}</Text>
        </View>
    )
}