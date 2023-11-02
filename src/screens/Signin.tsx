import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
const Signin = ( { navigation }: any ) =>
{
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ showErrors, setShowErrors ] = useState( false );
    const [ errors, setErrors ] = useState<any>( {} );
    const [ hidePassword, setHidePassword ] = useState<any>( {} );

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

        return errors;
    }
    const HandleSignIn = () =>
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
            console.log( 'sign in' );

        }

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
            <View style={ styles.container }>
                <View>
                    <Image style={ { width: 300, height: 150, } } source={ require( '../assets/image/Circle2.png' ) } />
                    <View style={ { paddingLeft: 40 } }>
                        <Text style={ { color: 'white', fontSize: 45, fontFamily: 'SFProRounded-Heavy', } }>Sign In</Text>
                    </View>
                </View>
                <View style={ { paddingHorizontal: 30, paddingTop: 20 } }>
                    <View style={ {
                        paddingVertical: 5, backgroundColor: 'white',
                        borderRadius: 10,
                    } }>
                        <TextInput style={ styles.input } placeholderTextColor={ 'black' } value={ email } onChangeText={ e => setEmail( e ) } placeholder="Your Email" />
                        { errors.email && <Text style={ { left: 20, color: 'red', fontFamily: 'SFProRounded-Heavy', } }>{ errors.email }</Text> }
                    </View>

                </View>
                <View style={ { paddingHorizontal: 30, paddingTop: 20 } }>
                    <View style={ {
                        paddingVertical: 5, backgroundColor: 'white',
                        borderRadius: 10,

                    } }>
                        <View style={ { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' } }>
                            <TextInput style={ styles.input } maxLength={ 8 } placeholderTextColor={ 'black' } value={ password } onChangeText={ e => setPassword( e ) } placeholder="Password" secureTextEntry={ hidePassword ? true : false } />
                            { password.length > 0 && (
                                <TouchableOpacity onPress={ () => { setHidePassword( !hidePassword ) } }>
                                    <Icon style={ { right: 10 } } name={ hidePassword ? 'eye-slash' : 'eye' } color="black" size={ 27 } />
                                </TouchableOpacity>
                            ) }

                        </View>

                        { errors.password && <Text style={ { left: 20, color: 'red', fontFamily: 'SFProRounded-Heavy', } }>{ errors.password }</Text> }
                    </View>
                </View>
                <View style={ { paddingHorizontal: 30, paddingTop: 20 } }>
                    <TouchableOpacity onPress={ () => { HandleSignIn() } } style={ {
                        paddingVertical: 5, backgroundColor: '#367CFE',
                        borderRadius: 10,
                        marginBottom: 20
                    } }>
                        <Text style={ {
                            fontSize: 17,
                            color: 'white',
                            fontFamily: 'SFProRounded-Heavy',
                            alignSelf: 'center'
                        } } >Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={ { paddingTop: 10 } }>
                    <Text style={ { alignSelf: 'center', fontSize: 17, color: 'gray' } }>Or connect with</Text>
                </View>
                <View style={ { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20, marginBottom: 30 } }>
                    <SignWithIcon iconName='google' onPress={ () => { } } buttonTitle='Google' />
                    <SignWithIcon iconName='facebook' onPress={ () => { } } buttonTitle='FaceBook' />
                </View>
                <TouchableOpacity onPress={ () => navigation.navigate( 'Signup' ) } style={ { width: '100%', alignItems: 'center' } }>
                    <Text style={ { fontSize: 17, fontWeight: '400', color: 'black' } }>Not a member ?
                        <Text style={ { color: '#367CFE' } }> Sign Up Now</Text>
                    </Text>
                </TouchableOpacity>
            </View>
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
        height: 45,
        width: '90%'
    },



} )
export default Signin;