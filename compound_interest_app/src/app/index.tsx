import { Input } from '@/components/Input';
import { Button } from '@/components/button';
import { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { Response } from '@/components/response';

export default function App() {
    const [initialAmount, setInitialAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [years, setYears] = useState('');
    const [monthlyInvestment, setMonthlyInvestment] = useState('');
    const [result, setResult] = useState<number | null>(null);

    function calculateCompoundInterest() {
        const P = parseFloat(initialAmount);
        const r = parseFloat(interestRate) / 100;
        const n = 12;
        const t = parseFloat(years);
        const A = P * Math.pow(1 + r / n, n * t);
        if (isNaN(A)) {
            return Alert.alert('Invalid input', 'Please enter valid numbers for obrigatory all fields.');
        }
        setResult(A);
    }
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Compound Interest Calculator</Text>
                <View style={styles.form}>
                    <Input placeholder="Enter Inicial amount (R$)" keyboardType='numeric' onChangeText={setInitialAmount}/>
                    <Input placeholder="Enter Interest rate per year (%)" keyboardType='numeric' onChangeText={setInterestRate}/>
                    <Input placeholder="Enter Number of years" keyboardType='numeric' onChangeText={setYears}/>
                    <Input placeholder="Investment per month (Optional)" keyboardType='numeric' onChangeText={setMonthlyInvestment}/>
                    <Button title="Calculate" onPress={() => calculateCompoundInterest()}/>
                </View>
                {result !== null && (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.responses}>
                            <Response
                            title="Initial Amount:"
                            responseData={`R$ ${initialAmount}`}/>
                            <Response
                                title='Total Earnings:'
                                responseData={`R$ ${(result - parseFloat(initialAmount)).toFixed(2)}`}/>
                            <Response
                                title="Total Amount:"
                                responseData={`R$ ${result.toFixed(2)}`} />
                        </View>
                        <Button title='Reset' style={styles.resetButton} onPress={() => {
                            setResult(null);
                        }}/>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}