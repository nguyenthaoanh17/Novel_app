import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { CreateAccountwithEmailandPassword } from "../components/CreateAccountwithEmailandPassword";
const Signup = ( { navigation }: any ) =>
{
    const [ email, setEmail ] = useState<any>( '' );
    const [ password, setPassword ] = useState<any>( '' );
    const [ confirmPassword, setConfirmPassword ] = useState( '' );
    const [ showErrors, setShowErrors ] = useState( false );
    const [ errors, setErrors ] = useState<any>( {} );
    const GetErrors = () =>
    {
        const errors: any = {};
        if ( email == '' )
        {
            errors.email = 'Please enter your email'
        } else if ( !email.includes( '@' ) || !email.includes( '.com' ) )
        {
            errors.email = 'Please valid your email'
        }

        if ( password == '' )
        {
            errors.password = 'Please enter your password'
        } else if ( password.length < 8 )
        {
            errors.password = 'Please enter password at least 8 characters'
        }

        if ( confirmPassword == '' )
        {
            errors.confirmPassword = 'Please enter your password'
        } else if ( confirmPassword.length < 8 )
        {
            errors.confirmPassword = 'Please enter correct password'
        }
        else if ( password !== confirmPassword )
        {
            errors.confirmPassword = 'Password not matched'
        }

        return errors;
    }
    const HandleRegister = () =>
    {
        const errors = GetErrors();
        if ( Object.keys( errors ).length > 0 )
        {
            setShowErrors( true );
            setErrors( showErrors && errors );
            console.log( errors );

        } else
        {
            setErrors( {} )
            setShowErrors( false );
            HandleSignIn()

        }

    }
    const HandleSignIn = () =>
    {
        CreateAccountwithEmailandPassword( { email, password } ).then( () =>
        {
            ToastAndroid.show( 'Account Created', ToastAndroid.SHORT )
        } ).catch( ( error: any ) =>
        {
            console.log( error );

        } )
    }
    const SignWithIcon = ( { iconName, onPress, buttonTitle }: any ) =>
    {
        return (
            <TouchableOpacity style={ {
                width: '40%',
                paddingHorizontal: 24,
                paddingVertical: 12,
                borderWidth: 2,
                backgroundColor: '',
                borderColor: 'white',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
            } }>
                <Icon style={ { marginBottom: 4 } } name={ iconName } color="#367CFE" size={ 27 } />
                <Text style={ { color: 'black' } }>{ buttonTitle }</Text>
            </TouchableOpacity>
        )
    }
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={ false }>
                <View style={ styles.container }>
                    <View>
                        <Image style={ { width: 300, height: 150, } } source={ require( '../assets/image/Circle2.png' ) } />
                        <View style={ { paddingLeft: 40 } }>
                            <Text style={ { color: 'white', fontSize: 45, fontFamily: 'SFProRounded-Heavy', } }>Sign Up</Text>
                        </View>
                    </View>
                    <View style={ { paddingHorizontal: 30, paddingTop: 20 } }>
                        <View style={ {
                            paddingVertical: 5, backgroundColor: 'white',
                            borderRadius: 10,
                        } }>
                            <TextInput style={ styles.input } value={ email } onChangeText={ e => setEmail( e ) } placeholderTextColor={ 'black' } placeholder="Your Email" />
                            { errors.email && <Text style={ { left: 20, color: 'red', fontFamily: 'SFProRounded-Heavy', } }>{ errors.email }</Text> }
                        </View>

                    </View>
                    <View style={ { paddingHorizontal: 30, paddingTop: 20 } }>
                        <View style={ {
                            paddingVertical: 5, backgroundColor: 'white',
                            borderRadius: 10,

                        } }>
                            <TextInput style={ styles.input } maxLength={ 8 } placeholderTextColor={ 'black' } value={ password } onChangeText={ e => setPassword( e ) } placeholder="Password" secureTextEntry={ true } />
                            { errors.password && <Text style={ { left: 20, color: 'red', fontFamily: 'SFProRounded-Heavy', } }>{ errors.password }</Text> }
                        </View>
                    </View>
                    <View style={ { paddingHorizontal: 30, paddingTop: 20 } }>
                        <View style={ {
                            paddingVertical: 5, backgroundColor: 'white',
                            borderRadius: 10,

                        } }>
                            <TextInput style={ styles.input } maxLength={ 8 } placeholderTextColor={ 'black' } value={ confirmPassword } onChangeText={ e => setConfirmPassword( e ) } placeholder="Confirm Password" secureTextEntry={ true } />
                            { errors.confirmPassword && <Text style={ { left: 20, color: 'red', fontFamily: 'SFProRounded-Heavy', } }>{ errors.confirmPassword }</Text> }
                        </View>
                    </View>
                    <View style={ { paddingHorizontal: 30, paddingTop: 20 } }>
                        <TouchableOpacity onPress={ () => { HandleRegister() } } style={ {
                            paddingVertical: 5, backgroundColor: '#367CFE',
                            borderRadius: 10,
                            marginBottom: 20
                        } }>
                            <Text style={ {
                                fontSize: 17,
                                color: 'white',
                                fontFamily: 'SFProRounded-Heavy',
                                alignSelf: 'center'
                            } } >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ { paddingTop: 10 } }>
                        <Text style={ { alignSelf: 'center', fontSize: 17, color: 'gray' } }>Or connect with</Text>
                    </View>
                    <View style={ { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20, marginBottom: 30 } }>
                        <SignWithIcon iconName='google' onPress={ () => { } } buttonTitle='Google' />
                        <SignWithIcon iconName='facebook' onPress={ () => { } } buttonTitle='FaceBook' />
                    </View>
                    <TouchableOpacity onPress={ () => navigation.navigate( 'Signin' ) } style={ { width: '100%', alignItems: 'center', paddingBottom: 20 } }>
                        <Text style={ { fontSize: 17, fontWeight: '400', color: 'black' } }>Already a member ?
                            <Text style={ { color: '#367CFE' } }> Sign In Now</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </>
    )
}
const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#D7E5FF',

    },


    input: {

        fontSize: 17,
        color: 'black',
        fontFamily: 'SFProRounded-Heavy',
        paddingLeft: 20,
        top: 3,
        height: 45

    },
} )
export default Signup;