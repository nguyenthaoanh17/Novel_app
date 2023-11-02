import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconssss from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from "react";
import firebase from "@react-native-firebase/firestore";
const List_book = ( { route, navigation }: any ) =>
{
    const { item } = route.params;
    const [ data, setData ] = useState<any>( [] );
    const [ dataAll, setDataAll ] = useState<any>( [] );
    const [ loading, setLoading ] = useState( false );

    useEffect( () =>
    {
        // firebase()
        //     .collection( 'books' )
        //     .where( 'category_id', '==', item.id )
        //     .get()
        //     .then( querySnapshot =>
        //     {
        //         // console.log( querySnapshot )
        //         querySnapshot.forEach( documentSnapshot =>
        //         {
        //             // console.log( 'User ID: ', documentSnapshot.id, documentSnapshot.data() );
        //             setBooks( ( current: any ) => [ ...current, documentSnapshot.data() ] );

        //         } );
        //     } );
        // firebase()
        //     .collection( 'bookup' )
        //     .where( 'category_id', '==', item.id )
        //     .get()
        //     .then( querySnapshot =>
        //     {
        //         // console.log( querySnapshot )
        //         querySnapshot.forEach( documentSnapshot =>
        //         {
        //             // console.log( 'User ID: ', documentSnapshot.id, documentSnapshot.data() );
        //             setBooks( ( current: any ) => [ ...current, documentSnapshot.data() ] );

        //         } );
        //     } );

        firebase()
            .collection( 'books' ).onSnapshot( querySnapshot =>
            {
                querySnapshot.forEach( ( doc ) =>
                {

                    if ( doc.data().category_id.includes( item.id ) )
                    {
                        let element: any = doc.data()
                        element.id = doc.id
                        setDataAll( ( current: any ) => [ ...current, element ] );

                    }

                } )
            } );

        firebase()
            .collection( 'bookup' ).onSnapshot( querySnapshot =>
            {
                querySnapshot.forEach( ( doc ) =>
                {
                    if ( doc.data().category_id.includes( item.id ) )
                    {
                        let element: any = doc.data()
                        element.id = doc.id
                        setDataAll( ( current: any ) => [ ...current, element ] );

                    }
                } )
            } );

        setLoading( true )

    }, [] );

    useEffect( () =>
    {
        filterData();

    }, [ loading ] );

    const filterData = () =>
    {

        dataAll.forEach( ( book: any ) =>
        {


            book?.category_id.forEach( ( cate: any ) =>
            {
                if ( cate == item.id )
                {


                    setData( ( current: any ) => [ ...current, book ] );
                }
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
                    <Text style={ { fontSize: 18, bottom: -5, fontFamily: 'SFProText-Semibold', color: 'gray' } }>{ item.name }</Text>
                </View>
                <View style={ { flexDirection: 'row' } }>

                    <TouchableOpacity>
                        <Icons style={ { bottom: -5 } } name="format-align-left" color="#00BFFF" size={ 20 } />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={ styles.container }>
                    <View style={ { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, justifyContent: 'flex-start', paddingTop: 25 } }>
                        {
                            dataAll.map( ( item: any, index: any ) =>
                            {
                                return (
                                    <TouchableOpacity key={ index } onPress={ () => navigation.navigate( 'Detail', { item: item } ) } style={ { width: '33%', height: 180, alignItems: 'center', marginBottom: 15 } }  >
                                        <Image source={ { uri: item.image } } style={ { width: 100, height: 110, borderRadius: 5 } } />
                                        <Text numberOfLines={ 2 } style={ { width: 95, fontSize: 14, color: 'black', paddingTop: 5, fontFamily: 'SFProText-Light' } }>{ item.name }</Text>
                                        <View style={ { flexDirection: 'row', justifyContent: 'space-around', width: 100, } }>
                                            <View style={ { flexDirection: 'row', paddingRight: 10 } }>
                                                <Icons style={ { bottom: -2, color: '#33FF99' } } name="alpha-c-circle-outline" color="gray" size={ 15 } />
                                                <Text style={ { fontSize: 14, right: -5, color: 'gray' } }>20</Text>
                                            </View>
                                            <View style={ { flexDirection: 'row', paddingRight: 10, } }>
                                                <Icon style={ { bottom: -2, color: 'orange' } } name="star" color="gray" size={ 15 } />
                                                <Text style={ { fontSize: 14, right: -5, color: 'gray' } }>4.8</Text>
                                            </View>


                                        </View>
                                    </TouchableOpacity>
                                )
                            } )
                        }
                    </View>

                </View>
            </ScrollView>
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
        paddingTop: 20
    },
    itmright: {
        marginRight: 30
    }
} )
export default List_book;