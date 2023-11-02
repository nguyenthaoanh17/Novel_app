import React, { useEffect, useState } from "react";
import { FlatList, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import firebase from "@react-native-firebase/firestore";
const Search_book = ( { route, navigation }: any ) =>
{
    const [ showCancel, setShowCancel ] = useState( false );
    const [ showDelete, setShowDelete ] = useState( false );
    const [ value, onChangeText ] = useState( '' );
    const [ isSubmit, setIsSubmit ] = useState<boolean>( false );

    const [ books, setBooks ] = useState<any>( [] );


    function onSubmitEditing ()
    {
        setIsSubmit( true )

        firebase()
            .collection( 'books' ).onSnapshot( querySnapshot =>
            {
                const list: any = [];
                querySnapshot.forEach( ( doc ) =>
                {
                    let element: any = doc.data()
                    element.id = doc.id
                    list.push( element )

                } )
                setBooks( filterItems( list, value ) )
            } );
        firebase()
            .collection( 'bookup' ).onSnapshot( querySnapshot =>
            {
                const list: any = [];
                querySnapshot.forEach( ( doc ) =>
                {
                    let element: any = doc.data()
                    element.id = doc.id
                    list.push( element )

                } )
                if ( filterItems( list, value ).length > 0 )
                {
                    filterItems( list, value ).forEach( ( element: any ) =>
                    {
                        setBooks( ( current: any ) => [ ...current, element ] );

                    } );
                }

            } );


    }

    const xoa_dau = ( str: any ) =>
    {
        str = str.replace( /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a" );
        str = str.replace( /è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e" );
        str = str.replace( /ì|í|ị|ỉ|ĩ/g, "i" );
        str = str.replace( /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o" );
        str = str.replace( /ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u" );
        str = str.replace( /ỳ|ý|ỵ|ỷ|ỹ/g, "y" );
        str = str.replace( /đ/g, "d" );
        str = str.replace( /À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A" );
        str = str.replace( /È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E" );
        str = str.replace( /Ì|Í|Ị|Ỉ|Ĩ/g, "I" );
        str = str.replace( /Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O" );
        str = str.replace( /Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U" );
        str = str.replace( /Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y" );
        str = str.replace( /Đ/g, "D" );
        return str;
    }
    const handleCancel = () =>
    {
        setShowCancel( false ),
            Keyboard.dismiss(),
            setBooks( [] ),
            setIsSubmit( false )
    }
    const filterItems = ( arr: any, query: any ) =>
    {
        return arr.filter( ( el: any ) => xoa_dau( el.name ).toLowerCase().includes( query.toLowerCase() ) );
    }



    const renderItem = ( { item, index }: { item: any, index: any } ) =>
    {
        return (
            <View key={ index } style={ { paddingHorizontal: 20, } }>
                <TouchableOpacity onPress={ () => navigation.navigate( 'Detail', { item: item } ) } style={ { borderBottomColor: 'gray', borderBottomWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, } }>
                    <View style={ { flexDirection: 'column' } }>
                        <Text numberOfLines={ 2 } style={ { color: '#00BFFF', fontSize: 18, paddingBottom: 20, width: 220 } }>{ item.name }</Text>
                        <View style={ { flexDirection: 'row' } }>
                            <Text>{ item.author }</Text>
                        </View>
                        <View style={ { flexDirection: 'row', paddingTop: 5 } }>
                            <Text>89 Chương</Text>
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
                </TouchableOpacity>

            </View>
        );
    };
    return (
        <>
            <View style={ styles.container }>
                <View style={ { flexDirection: 'row', justifyContent: 'center' } }>
                    <Text style={ styles.tTitle }>Tìm Truyện</Text>
                    <TouchableOpacity>
                        <Icons style={ { color: '#00BFFF', right: -110, bottom: -25 } }
                            name="filter"
                            color="gray"
                            size={ 25 } />
                    </TouchableOpacity>

                </View>
                <View style={ { paddingHorizontal: 4, flexDirection: "row", alignContent: "center" } }>
                    <View style={ showCancel ? styles.Input1 : styles.Input2 }>
                        <Icon style={ { color: '#A0A0A0', bottom: -10, left: 5 } } name="search1" color="gray" size={ 25 } />
                        <TextInput
                            placeholderTextColor={ '#A0A0A0' }
                            placeholder="Nhập tên truyện"
                            onChangeText={ text => onChangeText( text ) }
                            value={ value }
                            style={ styles.tInput }
                            onPressOut={ () => setShowCancel( true ) }
                            onKeyPress={ () => setShowDelete( true ) }
                            onSubmitEditing={ () => onSubmitEditing() } />
                        {
                            showDelete ?
                                <TouchableOpacity onPress={ () => { setShowDelete( false ), onChangeText( "" ) } }>
                                    <Icon style={ { color: '#A0A0A0', bottom: -12, right: 10 } } name="closecircle" color="gray" size={ 23 } />
                                </TouchableOpacity>
                                : null
                        }
                    </View>

                    {
                        showCancel ?
                            <TouchableOpacity onPress={ () =>
                            { handleCancel() } }>
                                <Text style={ styles.txtCancel }>Cancel</Text>
                            </TouchableOpacity> : null
                    }

                </View>

                {

                    ( books.length == 0 && isSubmit ) ? <Text style={ { fontSize: 18, color: 'gray', alignSelf: 'center', bottom: -100 } }>Không tìm thấy truyện</Text>
                        :
                        <FlatList

                            data={ books }
                            renderItem={ renderItem }
                        />
                }



            </View>
        </>
    )
}
const styles = StyleSheet.create( {
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    tTitle: {
        fontSize: 20,
        // paddingHorizontal: 140,
        color: 'black',
        paddingTop: 20,
        fontFamily: 'SFProText-Medium',
        paddingBottom: 10,
        left: 10
    },
    tInput: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        borderRadius: 15,
        color: 'black',
        fontSize: 17,
        marginLeft: 15
    },
    Input1: {
        backgroundColor: '#F0F0F0',
        borderRadius: 15,
        color: 'black',
        flexDirection: 'row',
        fontSize: 17,
        width: "80%"
    },
    Input2: {
        backgroundColor: '#F0F0F0',
        borderRadius: 15,
        color: 'black',
        flexDirection: 'row',
        fontSize: 17,
        width: "100%"
    },
    txtCancel: {
        fontSize: 18,
        color: '#00BFFF',
        left: 10,
        top: 10
    },
    vImage: {
        width: 75,
        height: 110,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 0.1,
    }

} )
export default Search_book;