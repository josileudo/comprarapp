import {TextInput, TextInputProps, View} from "react-native";
import {styles} from "./styles";

export const Input = ( {...rest}: TextInputProps) => {
    return (
        <TextInput style={styles.container} {...rest} />
    )
}
