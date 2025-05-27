import {Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {styles} from "./styles";

type ButtonProps = TouchableOpacityProps & {
   label: string;
}

export const Button = ({label, ...rest}: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} {...rest} activeOpacity= {rest.activeOpacity || 0.8}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}
