import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import { useState } from "react";


const Login = () =>
{
    const [ isCheck, setisCheck ] = useState( false );

    return (
        <>
            <View style={ styles.container }>
                <View style={ styles.header }>
                    <Text style={ { color: "black", fontSize: 30, paddingBottom: 20, fontFamily: 'Sakkal Majalla', } }>Login</Text>
                    <Text style={ styles.title }> By signing in you are agreeing  </Text>
                    <View style={ { flexDirection: 'row', paddingTop: 10 } }>
                        <Text style={ styles.title }>our </Text>
                        <TouchableOpacity><Text style={ { fontSize: 18, fontFamily: 'Sakkal Majalla', color: '#0386D0' } }>Term and privacy policy</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={ { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 120, paddingTop: 17 } }>
                    <TouchableOpacity><Text style={ { fontSize: 18, fontFamily: 'Sakkal Majalla', color: '#036BB9', borderBottomWidth: 2, borderBottomColor: 'gray', paddingBottom: 3 } }>Login</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={ styles.title }>Register</Text></TouchableOpacity>


                </View>
                <View >
                    <View >
                        <Icon style={ { bottom: -47, left: 57, color: 'gray' } } name="email" size={ 25 } color="#900" />
                        <TextInput style={ styles.input } placeholder="Email Address" />
                        {/* <Image style={ { width: '70%', left: 60 } } source={ require( '../assets/image/Google.png' ) } /> */ }
                    </View>
                    <View >
                        <Icons style={ { bottom: -47, left: 60, color: 'gray' } } name="lock-closed-outline" size={ 25 } color="#900" />
                        <TextInput style={ styles.input } placeholder="Password" secureTextEntry={ true } />
                        {/* <Image style={ { width: '70%', left: 60 } } source={ require( '../assets/image/Google.png' ) } /> */ }
                    </View>

                </View>
                <View style={ { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50, paddingTop: 30 } }>
                    <View style={ { flexDirection: 'row' } }>
                        <CheckBox
                            disabled={ false }
                            value={ isCheck }
                            onValueChange={ () => setisCheck( !isCheck ) }
                        />
                        <Text style={ { bottom: -5 } }>Remember password</Text>
                    </View>

                    <TouchableOpacity ><Text style={ { color: '#0386D0', bottom: -5 } }>Forget password </Text></TouchableOpacity>

                </View>
                <View style={ { paddingHorizontal: 45, paddingVertical: 20 } }>
                    <TouchableOpacity style={ { borderRadius: 6, backgroundColor: "#0386D0", padding: 10 } }><Text style={ { textAlign: 'center', color: 'white', fontSize: 18 } }>Login</Text></TouchableOpacity>

                </View>
                {/* <View>
                    <Text style={ { fontSize: 18, textAlign: 'center', paddingBottom: 25 } }>or connect with</Text>
                    <View style={ { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 120 } }>
                        <Image source={ require( '../assets/image/Google.png' ) } />
                        <Image source={ require( '../assets/image/Google.png' ) } />
                        <Image source={ require( '../assets/image/Google.png' ) } />
                    </View>
                </View> */}
                {/* <View style={ styles.footer }>

                
                    <TouchableOpacity style={ styles.touchid } >
                        <Image source={ require( '../assets/image/Google.png' ) } />
                    </TouchableOpacity>
                    <Image source={ require( '../assets/image/Google.png' ) } />
                </View> */}

            </View >

        </>
    )
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    header: {

        alignItems: "center",
        marginTop: 40

    },
    title: {
        color: 'gray',
        fontSize: 18,
        fontFamily: 'Sakkal Majalla',
    },

    input: {
        left: 80,
        fontSize: 16,
        color: 'gray',
        bottom: -10
    },
    footer: {
        position: 'absolute',
        bottom: 0
    },

    touchid:
    {
        position: 'absolute',

        left: '50%',
        bottom: 20,
        zIndex: 1000,
        transform: [
            { translateX: -50 }
        ],



    }


} )
export default Login;