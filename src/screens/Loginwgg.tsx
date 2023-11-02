import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Foundation';
import Iconss from 'react-native-vector-icons/FontAwesome5';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from "react";
const Longinwgg = ( { navigation }: any ) =>
{
    const [ userInfo, setUserInfo ] = useState( null );
    useEffect( () =>
    {
        GoogleSignin.configure( { webClientId: '395734664725-nqbpo4saq4rf7hgolqhkbiq1027ni5uj.apps.googleusercontent.com', } );
    }, [] );
    const signIn = async () =>
    {
        try
        {
            await GoogleSignin.hasPlayServices();
            const useInfo = await GoogleSignin.signIn();
            setUserInfo( useInfo );
        } catch ( error: any )
        {
            if ( error.code === statusCodes.SIGN_IN_CANCELLED )
            {
                // user cancelled the login flow
            } else if ( error.code === statusCodes.IN_PROGRESS )
            {
                // operation (e.g. sign in) is in progress already
            } else if ( error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE )
            {
                // play services not available or outdated
            } else
            {
                // some other error happened
            }
        }
    };
    return (
        <>
            <View style={ styles.containner }>
                <View style={ styles.containner1 }>
                    <View >
                        <TouchableOpacity onPress={ () => navigation.goBack() }>
                            <Icon style={ {} } name="left" color="#00BFFF" size={ 28 } />
                        </TouchableOpacity>
                    </View>
                    <View style={ { alignSelf: 'center', left: 75 } } >
                        <Text style={ { fontSize: 18, color: 'black' } }>Đăng Nhập / Đăng ký</Text>
                    </View>
                </View>
                <View style={ { flexDirection: 'column', alignItems: 'center', paddingTop: 60 } }>
                    <View style={ { backgroundColor: '#F0F0F0', borderRadius: 85, padding: 17, width: 65 } }>
                        <Icons style={ { alignSelf: 'center' } } name="heart" color="#00BFFF" size={ 28 } />
                    </View>
                    <Text style={ { fontSize: 15, color: 'black', paddingTop: 10 } }>TYT</Text>
                </View>
                <View>
                    <View style={ { paddingHorizontal: 50, paddingTop: 60 } }>
                        <TouchableOpacity style={ { backgroundColor: '#0039a6', paddingVertical: 15, flexDirection: 'row', borderRadius: 10 } }>
                            <Iconss style={ { left: 7 } } name="facebook" color="white" size={ 23 } />
                            <Text style={ { color: 'white', fontSize: 17, fontWeight: 'bold', left: 48, alignSelf: 'center' } }>Continue with Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ { paddingHorizontal: 50, paddingTop: 20 } }>

                        <TouchableOpacity onPress={ () => { signIn() } } style={ { backgroundColor: '#0066b2', flexDirection: 'row', borderRadius: 10 } }>
                            <Image source={ require( '../assets/image/Google.png' ) } style={ { width: 56, height: 51, left: -4 } } />

                            <Text style={ { color: 'white', fontSize: 17, fontWeight: 'bold', left: 15, alignSelf: 'center' } }>Sigh in with Google</Text>
                        </TouchableOpacity>


                    </View>


                </View>
            </View>

        </>
    )
}
const styles = StyleSheet.create( {
    containner: {
        backgroundColor: 'white',
        flex: 1
    },
    containner1: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 15,

        paddingTop: 20
    }
} )
export default Longinwgg;