import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Iconssss from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from "@react-native-firebase/firestore";
const Viewmorefl = ( { route, navigation }: any ) =>
{

    const [ books, setBooks ] = useState<any>( [] );
    const [ isFavorite, setIsFavorite ] = useState<any>( false );
    useEffect( () =>
    {
        firebase()
            .collection( 'books' ).onSnapshot( querySnapshot =>
            {
                const list: any = [];
                querySnapshot.forEach( ( doc ) =>
                {
                    if ( doc.data().follow )
                    {
                        let element: any = doc.data()
                        element.id = doc.id
                        list.push( element )
                    }

                } )

                setBooks( list )
            } );
    }, [] )
    const onClickRemove = ( item: any ) =>
    {
        firebase()
            .collection( 'books' )
            .doc( item.id )
            .update( {
                follow: false,
            } )
            .then( () =>
            {
                console.log( 'Favorite updated!' );
            } );

    }
    const onClickRemoveAll = () =>
    {
        books.forEach( ( element: any ) =>
        {
            firebase()
                .collection( 'books' )
                .doc( element.id )
                .update( {
                    follow: false,
                } )
                .then( () =>
                {
                    console.log( 'Favorite updated!' );
                } );
        } );


    }



    return (
        <>
            <View style={ styles.container1 }>
                <View >
                    <TouchableOpacity onPress={ () => navigation.goBack() }>
                        <Iconssss style={ {} } name="left" color="#00BFFF" size={ 28 } />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={ { fontSize: 18, bottom: -5, fontFamily: 'SFProText-Semibold', color: 'black' } }>Đang Theo Dõi</Text>
                </View>
                <View style={ { flexDirection: 'row' } }>

                    <TouchableOpacity onPress={ () => { onClickRemoveAll() } } >
                        <Icons style={ { bottom: -5 } } name="trash-can-outline" color="red" size={ 27 } />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>

                <View style={ { paddingHorizontal: 20, backgroundColor: 'white', } }>
                    {
                        books.map( ( item: any, index: any ) =>
                        {
                            return (
                                <TouchableOpacity key={ item.id } onPress={ () => navigation.navigate( 'Detail', { item: item } ) } style={ { borderBottomColor: 'gray', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, height: 145 } }>
                                    <View style={ { flexDirection: 'column', } }>
                                        <Text numberOfLines={ 2 } style={ { color: '#00BFFF', fontSize: 18, paddingBottom: 10, width: 220 } }>{ item.name }</Text>
                                        <View style={ { flexDirection: 'row' } }>
                                            <Text>{ item.author }</Text>
                                        </View>
                                        <View style={ { paddingTop: 3 } }>
                                            <Text>89 Chương</Text>
                                        </View>
                                        <View style={ { paddingTop: 3, right: 7 } }>
                                            <Text>  { ( () =>
                                            {
                                                if ( ( item.status ) == false )
                                                {
                                                    return (
                                                        <Text style={ {} }>Đang ra</Text>
                                                    )
                                                } else
                                                {
                                                    return (
                                                        <Text style={ { color: '#32CD32', fontWeight: 'bold' } }>[Full]</Text>
                                                    )
                                                }

                                                return null;
                                            } )() }</Text>
                                        </View>

                                    </View>
                                    <View>
                                        <Image source={ { uri: item.image } } style={ styles.vImage } />
                                    </View>
                                    <TouchableOpacity onPress={ () => { onClickRemove( item ) } }>
                                        <Icons style={ { alignSelf: 'center', bottom: -40 } } name="trash-can-outline" color="red" size={ 27 } />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            )
                        } )
                    }


                </View>
            </ScrollView>
            <View>
                <TouchableOpacity style={ styles.pages }>
                    <Text style={ { color: 'white', fontSize: 15, fontWeight: 'bold' } }>1</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create( {
    container: {
        backgroundColor: 'white'
    },
    container1: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20
    },

    vImage: {
        width: 75,
        height: 110,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 0.1,
    },
    pages: {
        backgroundColor: '#00BFFF',
        height: 43,
        alignSelf: 'center',
        paddingVertical: 11,
        paddingHorizontal: 18,
        borderRadius: 23,
        bottom: 40,
        position: 'absolute',
        right: 20,

    }
} )
export default Viewmorefl;