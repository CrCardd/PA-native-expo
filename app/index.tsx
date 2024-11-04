import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'
import { FIREBASE_AUTH } from '@/firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Header } from "react-native/Libraries/NewAppScreen";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = FIREBASE_AUTH;


    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((user_data) => {
            console.log(user_data);
            router.push('/(tabs)')
        }).catch((err) => {
            alert(err.message);
        });
    }

    return (
        <View style={styles.body}>
             <LinearGradient
                colors={['#0d0d14', '#181820']}
                style={styles.background}
            />  
            <View style={styles.marca}>
                <Image style={styles.logo} source={'../assets/images/spotify.png'} alt="logo"/>
                <Text style={styles.title}>Spotify</Text>
            </View>

            <SafeAreaView style={styles.inputs}>
                <View>
                    <Image style={styles.icons} source={'../assets/images/login-user.png'} alt={'user'}/>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                </View>

                <View>
                    <Image style={styles.icons} source={'../assets/images/login-password.png'} alt={'password'}/>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
                        keyboardType="numeric"
                        secureTextEntry={true}
                    />
                </View>
                
            </SafeAreaView>
            <View style={styles.loginButton}>
                <TouchableOpacity style={styles.button} onPress={signIn}>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.textGreen}>Forgot password?</Text>
            </View>
            <View style={styles.register}>
                <Text style={styles.textWhite}>Don't have an account?</Text>
                <Link style={styles.textGreen} href={"/register"}>Sign Up</Link>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    marca: {
        
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    logo: {
        width: 100,
        height: 100,
    },
    login: {
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 20,
        height: 55,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3da64c'
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
        alignItems: 'center',
        gap: 35
    },
    inputs: {
        gap: 35,
        alignItems: 'center'
    },
    textGreen: {
        color: '#3da64c'
    },
    textWhite: {
        color: '#f5f5f5'
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
