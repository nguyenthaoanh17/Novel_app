import { Alert, ScrollView, TouchableOpacity } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

import Icons from 'react-native-vector-icons/Ionicons';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconsss from 'react-native-vector-icons/SimpleLineIcons';
import Iconssss from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from "react";
import firebase from "@react-native-firebase/firestore";

const Detail = ( { route, navigation }: any ) =>
{

    const { item } = route.params;
    const [ isFavorite, setIsFavorite ] = useState<any>( false );
    const [ isFollow, setIsFollow ] = useState<any>( false );



    const [ category, setCategory ] = useState<any>( [] );
    useEffect( () =>
    {
        item.category_id.forEach( ( item: any ) =>
        {
            firebase().collection( 'category' ).doc( item ).onSnapshot( ( dc: any ) =>
            {
                let datas: any = { id: item, name: dc.data().name }
                setCategory( ( current: any ) => [ ...current, datas ] );
            } )

        } )
        setIsFavorite( item.favorite )
        setIsFollow( item.follow )
    }, [] );



    const onClickFavorite = () =>
    {
        firebase()
            .collection( 'books' )
            .doc( item.id )
            .update( {
                favorite: !isFavorite,
            } )
            .then( () =>
            {
                console.log( 'Favorite updated!' );
            } );
        setIsFavorite( !isFavorite )
    }
    const onClickFollow = () =>
    {
        firebase()
            .collection( 'books' )
            .doc( item.id )
            .update( {
                follow: !isFollow,

            } )
            .then( () =>
            {
                console.log( 'Follow updated!' );

            } );
        !isFollow ? Alert.alert(
            'Đăng ký nhận thông báo'
        ) : Alert.alert(
            'Hủy theo dõi'
        )
        setIsFollow( !isFollow )

    }


    return (
        <>
            <View style={ styles.container1 }>
                <View >
                    <TouchableOpacity onPress={ () => navigation.goBack() }>
                        <Iconssss style={ {} } name="left" color="#00BFFF" size={ 28 } />
                    </TouchableOpacity>
                </View>
                <View style={ { flexDirection: 'row' } }>
                    <TouchableOpacity style={ styles.itmright }>
                        <Iconss style={ {} } name="flag-outline" color="#00BFFF" size={ 28 } />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Iconsss style={ { bottom: -5 } } name="share" color="#00BFFF" size={ 20 } />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={ styles.container }>
                    <View style={ styles.vTitle }>
                        <Text style={ styles.textTitle }>{ item.name }</Text>
                    </View>
                    <View style={ styles.vLright }>
                        <View style={ styles.vRightcl }>
                            <View style={ styles.vRitem }>
                                <Iconss style={ { color: 'gray', paddingTop: 5, marginLeft: -5 } } name="draw-pen" color="#c6c6c6" size={ 20 } />
                                <TouchableOpacity style={ styles.vIcon } >
                                    <Text numberOfLines={ 1 } style={ styles.textrIcon }>{ item.author }</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={ styles.vRitem }>
                                <Iconss style={ { color: 'gray', paddingTop: 5, marginLeft: -2 } } name="cloud-upload-outline" color="#c6c6c6" size={ 17 } />
                                <TouchableOpacity style={ styles.vIcon } >
                                    <Text style={ styles.textrIcon }>
                                        { ( () =>
                                        {
                                            if ( ( item.status ) == false )
                                            {
                                                return (
                                                    <Text style={ { color: 'orange' } }>Đang ra</Text>
                                                )
                                            } else
                                            {
                                                return (
                                                    <Text style={ { color: '#32CD32', fontWeight: 'bold' } }>[Full]</Text>
                                                )
                                            }


                                            return null;
                                        } )() }
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={ styles.vRitem }>
                                <Icons style={ { color: 'gray', marginLeft: -3 } } name="reorder-three-sharp" color="#c6c6c6" size={ 19 } />
                                <TouchableOpacity style={ styles.vIcon } >
                                    <Text style={ styles.textrIcon }>40</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={ styles.vRitem }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Icons style={ { color: 'gray', marginLeft: -1 } } name="heart-circle-outline" color="#c6c6c6" size={ 19 } />
                                    <Text style={ styles.textvrItem }>169</Text>
                                </View>
                                <View style={ { flexDirection: 'row', paddingLeft: 15 } }>
                                    <Iconss style={ { color: 'gray', marginLeft: -1 } } name="circle-slice-8" color="#c6c6c6" size={ 17 } />
                                    <Text style={ styles.textvrItem }>380</Text>
                                </View>
                            </View>
                        </View>
                        <View >
                            <Image source={ { uri: item.image } } style={ styles.vImage } />
                        </View>
                    </View>
                    <View style={ styles.vListCate }>

                        {
                            category.map( ( item: any, index: any ) =>
                            {
                                return (
                                    <View style={ styles.vCate } key={ index } >
                                        <TouchableOpacity onPress={ () => navigation.navigate( 'Listcate', { item: item } ) } style={ styles.btnCate }>
                                            <Text style={ styles.textcate }  >{ item.name }</Text>
                                        </TouchableOpacity>
                                    </View>
                                )

                            } ) }
                    </View>
                    <View style={ styles.vListIcon }>
                        <View style={ styles.vIcon }>
                            <TouchableOpacity style={ styles.btnIcon } onPress={ () => { onClickFavorite() } }>
                                <Iconss style={ { padding: 7 } } name={ isFavorite ? "heart" : "heart-outline" } color="#00BFFF" size={ 25 } />
                            </TouchableOpacity >
                        </View>
                        <View style={ styles.vIcon }>
                            <TouchableOpacity style={ styles.btnIcon }>
                                <Iconss style={ { padding: 7 } } name="message-plus-outline" color="#00BFFF" size={ 25 } />
                            </TouchableOpacity>
                        </View>
                        <View style={ styles.vIcon }>
                            <TouchableOpacity style={ styles.btnIcon }>
                                <Iconss style={ { padding: 7 } } name="plus-box-multiple-outline" color="#00BFFF" size={ 25 } />
                            </TouchableOpacity>
                        </View>
                        <View style={ styles.vIcon }>
                            <TouchableOpacity style={ styles.btnIcon } onPress={ () => { onClickFollow() } } >
                                <Iconss style={ { padding: 7 } } name={ isFollow ? 'bell-plus' : 'bell-plus-outline' } color="#00BFFF" size={ 25 } />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ { paddingTop: 20, paddingLeft: 10 } }>
                        <Text style={ { fontSize: 16, paddingLeft: 10, paddingBottom: 10, color: 'black' } }>Các số gần nhất</Text>
                        <View style={ { flexDirection: 'row' } }>
                            <View style={ styles.vCate }>
                                <TouchableOpacity style={ styles.btnCate }>
                                    <Text style={ styles.textcate }  >4</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={ styles.vCate }>
                                <TouchableOpacity style={ styles.btnCate }>
                                    <Text style={ styles.textcate }  >3</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={ styles.vCate }>
                                <TouchableOpacity style={ styles.btnCate }>
                                    <Text style={ styles.textcate }  >2</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={ styles.vCate }>
                                <TouchableOpacity style={ styles.btnCate }>
                                    <Text style={ styles.textcate }  >1</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View>
                        <Text style={ { fontSize: 18, paddingLeft: 20, color: 'black', paddingHorizontal: 20, lineHeight: 35, fontFamily: 'SFProText-Semibold' } }>{ item.describe }</Text>
                    </View>
                </View>
            </ScrollView >
            <View style={ styles.footer }>
                <TouchableOpacity style={ styles.btnDownload }>
                    <Iconss name="download" color="#00BFFF" size={ 20 } style={ { textAlign: 'center' } } />
                    <Text style={ styles.btntIcon }>Tải về</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.btnWrite }>
                    <Text style={ styles.textWrite }>Đọc Truyện</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.btnDownload }>
                    <Iconss name="menu" color="#00BFFF" size={ 20 } style={ { textAlign: 'center' } } />
                    <Text style={ styles.btntIcon }>Mục Lục</Text>
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
        paddingTop: 20
    },
    itmright: {
        marginRight: 30
    },
    footer: {
        backgroundColor: 'white',
        height: 60,
        width: '100%',
        flexDirection: 'row',
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 1,
        justifyContent: "space-between",
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 5
    },
    btnDownload: {
        justifyContent: "center",
        flexDirection: 'column',
    },
    btnWrite: {
        borderWidth: 1,
        borderColor: '#00BFFF',
        borderRadius: 20,
    },
    textWrite: {
        marginHorizontal: 30,
        marginVertical: 3,
        color: '#00BFFF',
        fontSize: 16,
        fontFamily: 'SFProText-Semibold'
    },
    btnCate: {
        backgroundColor: '#f5f5f5',
        borderRadius: 25,
        alignSelf: 'center',
        height: 37,
        paddingVertical: 7,
        paddingHorizontal: 13
    },
    textcate: {
        fontSize: 15,
        fontFamily: 'SFProText-UItralight',
        color: 'gray'
    },
    btnIcon: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#00BFFF'
    },
    vIcon: {

        paddingLeft: 10

    },
    vListIcon: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 5
    },
    vListCate: {
        paddingHorizontal: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20
    },
    vCate: {
        paddingLeft: 10,
        paddingBottom: 10
    },
    vTitle: {
        alignSelf: 'center'
    },
    textTitle: {
        fontSize: 20,
        color: 'black',
        paddingTop: 30,
        paddingHorizontal: 10,
        fontFamily: 'SFProText-Semibold',
        alignSelf: 'center',
        textAlign: 'center',

    },
    vLright: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 50,
    },
    vRightcl: {
        flexDirection: 'column'
    },
    vRitem: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    textrIcon: {
        fontSize: 16,
        width: 200,
        fontFamily: 'SFProText-UItralight',
        color: '#00CED1'
    },
    textvrItem: {
        fontSize: 15,
        color: 'gray',
        marginLeft: 5,
        backgroundColor: 'white'
    },
    vImage: {
        width: 90,
        height: 125,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
    },
    btntIcon: {
        color: '#00BFFF',
        fontFamily: 'SFProText-Semibold',
        top: -5,
        fontSize: 16
    }
} )
export default Detail;