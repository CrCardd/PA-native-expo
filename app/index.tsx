import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onPress = () => {
        router.push("/(tabs)")
    };

    return (
        <View style={styles.body}>
             <LinearGradient
                colors={['#8709A0FF', '#611770FF', '#550F83FF']}
                style={styles.background}
            />  

            <SafeAreaView style={styles.inputs}>
                <View>
                    <Image style={styles.icons} source={'../assets/images/login-user.png'} alt={'user'}/>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Username or Email"
                        keyboardType="email-address"
                    />
                </View>

                <View>
                    <Image style={styles.icons} source={'../assets/images/login-password.png'} alt={'password'}/>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Insira sua senha"
                        keyboardType="numeric"
                        secureTextEntry={true}
                    />
                </View>
            </SafeAreaView>
            <View style={styles.loginButton}>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.textWhite}>Forgot password?</Text>
            </View>
            <View style={styles.register}>
                <Text style={styles.textWhite}>Don't have an account?</Text>
                <Link style={styles.textWhite} href={"/register"}>Sign Up</Link>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    login: {
        color: '#611770FF',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#f5f5f5f5',
        borderWidth: 2,     
        borderRadius: 20,
        height: 55,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderColor: '#F5F5F5FF',
        borderWidth: 2,
        borderRadius: 25,
        height: 55,
        width: 300,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#f5f5f5f5'
    },
    background: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%'
    },
    icons: {
        position: 'absolute',
        width: 23,
        height: 23,
        left: '11%',
        top: '30%'
    },
    body: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        gap: 35
    },
    inputs: {
        gap: 35,
        alignItems: 'center'
    },
    textWhite: {
        color: '#f5f5f5f5'
    },
    loginButton: {
        alignItems: 'center',
        gap: 10
    },
    register: {
        width: 230,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    }

})
