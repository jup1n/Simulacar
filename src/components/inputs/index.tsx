
import { TextInputMask, TextInputMaskTypeProp, TextInputMaskOptionProp} from "react-native-masked-text"



type Props = {
    placeHolder?: string
    valor?: string
    onChange?: (value: any) => void
    typeInput: TextInputMaskTypeProp
    optionsInput?: TextInputMaskOptionProp
    style : object
}

export const MaskedInput = (props: Props) => {
    return <TextInputMask style={props.style}
                          placeholder={props.placeHolder}
                          type={props.typeInput}
                          options={props.optionsInput}
                          value={props.valor}  
                          onChangeText={props.onChange}
                          returnKeyType="done"
            />
        }