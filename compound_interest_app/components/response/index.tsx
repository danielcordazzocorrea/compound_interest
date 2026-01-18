import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
    title?: string;
    responseData?: string;
};

export function Response({ responseData, title }: Props) {
    return (
        <View style={styles.responseContainer}>
            <Text style={styles.responseTitle}>{title}</Text>
            <View style={styles.responseContent}>
                <Text style={styles.innerText}>{responseData}</Text>
            </View>
        </View>
    );
}