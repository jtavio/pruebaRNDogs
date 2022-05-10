import React, { useEffect } from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import { Background } from '../../components/Background'
import { WhiteLogo } from '../../components/WhiteLogo'
import { loginuser } from '../../context/login/LoginReducer'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useForm } from '../../hooks/useForm'
import { loginStyle } from '../../theme/loginTheme'

export const LoginScreen = () => {
    const dispatch = useAppDispatch();
    const {email:mail, username, isLogged} = useAppSelector(state => state.login);

    const {email, nombre, password, onChange } = useForm({
        email:'',
        password:'',
        nombre: ''
    });

    const onLogin = () => {
        console.log({email,password, nombre})
        const login = {
            email:email, username:nombre, isLogged:true
        };

        Keyboard.dismiss()
        dispatch(loginuser(login));
    }

    useEffect(() => {
        console.log('userLogin', mail, username, isLogged)
       
    }, [mail, username, isLogged])


    return (
        <>
        
           <Background />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={
                    Platform.OS === 'ios' ? 'padding' : 'height'
                }
            >
                <View style={loginStyle.formContainer}>
                    <WhiteLogo/>
                    <Text style={loginStyle.title}>
                        Login
                    </Text>

                    <Text style={loginStyle.label}>
                        Nombre:
                    </Text>
                    <TextInput
                        placeholder='Ingrese su nombre'
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        style={[
                            loginStyle.inputField,
                            (Platform.OS === 'ios') && loginStyle.inputFieldIos
                        ]}
                        selectionColor='white'
                        onChangeText={(value) => onChange(value, 'nombre')}
                        onSubmitEditing={onLogin}
                        value={nombre}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Text style={loginStyle.label}>
                        Email:
                    </Text>
                    <TextInput
                        placeholder='Ingrese su email:'
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType='email-address'
                        underlineColorAndroid="white"
                        style={[
                            loginStyle.inputField,
                            (Platform.OS === 'ios') && loginStyle.inputFieldIos
                        ]}
                        selectionColor='white'
                        onChangeText={(value) => onChange(value, 'email')}
                        onSubmitEditing={onLogin}
                        value={email}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Text style={loginStyle.label}>
                        Contraseña:
                    </Text>
                    <TextInput
                        placeholder='************'
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        secureTextEntry
                        style={[
                            loginStyle.inputField,
                            (Platform.OS === 'ios') && loginStyle.inputFieldIos
                        ]}
                        selectionColor='white'
                        onChangeText={(value) => onChange(value, 'password')}
                        onSubmitEditing={onLogin}
                        value={password}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    {/* boton */}
                  <View style={loginStyle.bottomContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyle.button}
                            onPress={onLogin}
                        >
                            <Text style={loginStyle.buttonText}>Login</Text>


                        </TouchableOpacity>
                    </View>

                </View>

            </KeyboardAvoidingView> 
        </>
    )
}
