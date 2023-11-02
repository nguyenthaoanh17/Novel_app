import firebase from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Entypo';

const Books_offline = ( { navigation }: any ) =>
{

    const [ favorites, setFavorites ] = useState<any>( [] );
    const [ follows, setFollows ] = useState<any>( [] );
    const [ viewMoreFavorite, setViewMoreFavorite ] = useState( false );
    const [ viewMoreFollow, setViewMoreFollow ] = useState( false );

    useEffect( () =>
    {
        firebase().collection( 'books' ).onSnapshot( querySnapshot =>
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
            if ( list.length > 7 )
            {
                let arrNew = []
                for ( let i = 0; i < 7; i++ )
                {
                    arrNew.push( list[ i ] )
                }
                setFollows( arrNew );
                setViewMoreFollow( true )
            } else
            {
                setFollows( list )
                setViewMoreFollow( false )
            }
        } );
        firebase().collection( 'books' ).onSnapshot( querySnapshot =>
        {
            const list: any = [];
            querySnapshot.forEach( ( doc ) =>
            {
                if ( doc.data().favorite )
                {
                    let element: any = doc.data()
                    element.id = doc.id
                    list.push( element )
                }
            } )
            if ( list.length > 7 )
            {
                let arrNew = []
                for ( let i = 0; i < 7; i++ )
                {
                    arrNew.push( list[ i ] )
                }
                setFavorites( arrNew )
                setViewMoreFavorite( true )
            } else
            {
                setFavorites( list )
                setViewMoreFavorite( false )
            }
        } );
    }, [] );
    return (
        <>
            <SafeAreaView style={ { backgroundColor: 'white', height: '100%' } }>
                <ScrollView showsVerticalScrollIndicator={ false }>
                    <View style={ { backgroundColor: 'white' } }>
                        <View>
                            <Text style={ { color: 'black', fontSize: 20, fontFamily: 'SFProText-Medium', paddingLeft: 57, paddingTop: 20 } }>Truyện Trên Thiết Bị - Offline</Text>
                        </View>
                        <View style={ { paddingTop: 50 } }>
                            <View style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 15, paddingRight: 10 } }>
                                <Text style={ { fontSize: 17, color: 'black', fontFamily: 'SFProText-UILight', } }>Theo dõi gần đây</Text>
                                <TouchableOpacity onPress={ () => navigation.navigate( 'Viewmorefl' ) }><Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 25 } /></TouchableOpacity>

                            </View>
                            <View style={ { flexDirection: 'row', flexWrap: 'wrap', width: '100%', paddingLeft: 10, paddingRight: 10, } }>

                                {
                                    follows.map( ( item: any, index: any ) =>
                                    {
                                        return (
                                            <TouchableOpacity key={ index } onPress={ () => navigation.navigate( 'Detail', { item: item } ) } style={ { width: '25%', height: 150, alignItems: 'center' } }  >
                                                <Image source={ { uri: item.image } } style={ { width: 80, height: 100, borderRadius: 5 } } />
                                                <Text numberOfLines={ 2 } style={ { width: 85, fontSize: 14, color: 'black', paddingTop: 5 } }>{ item.name }</Text>

                                            </TouchableOpacity>
                                        )
                                    } )
                                }

                                { viewMoreFollow ? <TouchableOpacity onPress={ () => navigation.navigate( 'Viewmorefl' ) } style={ { width: '25%', height: 170, alignItems: 'center' } }  >
                                    {/* <Image source={ require( '../assets/image/ni.jpg' ) } style={ { width: 80, height: 115, borderRadius: 5 } } /> */ }
                                    <View style={ { width: 80, height: 100, borderRadius: 5, backgroundColor: '#f5f5f5' } }></View>
                                    <View style={ { flexDirection: 'row' } }>
                                        <Text style={ { fontSize: 14, color: 'black', paddingTop: 5 } }>Xem Thêm </Text>
                                        <Icon style={ { paddingTop: 7 } } name="chevron-right" color="#c6c6c6" size={ 15 } />
                                    </View>


                                </TouchableOpacity> : null }


                            </View>

                        </View>
                        <View style={ { paddingTop: 50 } }>
                            <View style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 15, paddingRight: 10 } }>
                                <Text style={ { fontSize: 18, color: 'black' } }>Yêu Thích Gần Đây</Text>
                                <TouchableOpacity onPress={ () => navigation.navigate( 'Viewmore' ) } ><Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 25 } /></TouchableOpacity>

                            </View>
                            <View style={ { flexDirection: 'row', flexWrap: 'wrap', width: '100%', paddingLeft: 10, paddingRight: 10, } }>

                                {
                                    favorites.map( ( item: any, index: any ) =>
                                    {
                                        return (
                                            <TouchableOpacity key={ index } onPress={ () => navigation.navigate( 'Detail', { item: item } ) } style={ { width: '25%', height: 150, alignItems: 'center' } }  >
                                                <Image source={ { uri: item.image } } style={ { width: 80, height: 100, borderRadius: 5 } } />
                                                <Text numberOfLines={ 2 } style={ { width: 85, fontSize: 14, color: 'black', paddingTop: 5 } }>{ item.name }</Text>

                                            </TouchableOpacity>
                                        )
                                    } )
                                }

                                { viewMoreFavorite ? <TouchableOpacity onPress={ () => navigation.navigate( 'Viewmore' ) } style={ { width: '25%', height: 170, alignItems: 'center' } }  >
                                    {/* <Image source={ require( '../assets/image/ni.jpg' ) } style={ { width: 80, height: 115, borderRadius: 5 } } /> */ }
                                    <View style={ { width: 80, height: 100, borderRadius: 5, backgroundColor: '#f5f5f5' } }></View>
                                    <View style={ { flexDirection: 'row' } }>
                                        <Text style={ { fontSize: 14, color: 'black', paddingTop: 5 } }>Xem Thêm </Text>
                                        <Icon style={ { paddingTop: 7 } } name="chevron-right" color="#c6c6c6" size={ 15 } />
                                    </View>


                                </TouchableOpacity> : null }


                            </View>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </>

    )
}
export default Books_offline;