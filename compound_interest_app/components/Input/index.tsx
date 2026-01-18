import { styles } from './styles';
import { TextInput, TextInputProps} from 'react-native'


type Props = TextInputProps & {
    placeholder: string;
}

export function Input({ placeholder, ...rest }: Props) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#2979FF"
            {...rest}
        />
    );
}