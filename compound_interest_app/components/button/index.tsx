import { TouchableOpacity, Text, ViewStyle, StyleProp } from "react-native";
import { styles } from "./styles";

type Props = {
    title: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}
export function Button({ title, onPress, ...rest }: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
            {...rest}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}