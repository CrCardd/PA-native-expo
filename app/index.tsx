import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onPress = () => {
        router.push("/(tabs)")
    };

    return (
        <>
            <SafeAreaView>
                <Text>Login</Text>
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Insira sua senha"
                    keyboardType="numeric"
                    secureTextEntry={true}
                />
            </SafeAreaView>
            <View>
                <TouchableOpacity style={styles.lalala} onPress={onPress}>
                    <Text style={styles.porra}>Press Here</Text>
                </TouchableOpacity>
                <View>
                    <Link href={"/register"}>Cadastrar novo usuário</Link>
                </View>
            </View>
        </>
    );
}



const styles = StyleSheet.create({
    lalala: {
        backgroundColor: "#5FD33BFF"        
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    porra: {
        color: "#FF0080FF",
        fontFamily: "Anton"
    }
})
