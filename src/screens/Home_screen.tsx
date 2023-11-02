import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import Iconsss from 'react-native-vector-icons/Foundation';
import Iconssss from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
const Home_screen = ( { navigation }: any ) =>
{
    const bk = firebase().collection( 'books' );
    const bks = firebase().collection( 'bookup' );
    useEffect( () =>
    {
        bk.onSnapshot( querySnapshot =>
        {
            const list: any = [];
            querySnapshot.forEach( ( doc ) =>
            {
                let element: any = doc.data()
                element.id = doc.id
                list.push( element )
            } )
            setBooks( list )
        } );

        bks.onSnapshot( querySnapshot =>
        {
            const list: any = [];
            querySnapshot.forEach( ( doc ) =>
            {
                let element: any = doc.data()
                element.id = doc.id
                list.push( element )
            } )
            setBookup( list )
        } );
        firebase().collection( 'category' )
            .onSnapshot( querySnapshot =>
            {
                const listca: any = [];
                querySnapshot.forEach( ( doc ) =>
                {
                    let element: any = doc.data()
                    element.id = doc.id
                    listca.push( element )
                } )
                let arrNew = []
                for ( let i = 0; i < 6; i++ )
                {
                    arrNew.push( listca[ i ] )
                }
                setCates( arrNew );

            } );
    }, [] );
    const [ books, setBooks ] = useState( [] );
    const [ bookup, setBookup ] = useState( [] );
    const [ cates, setCates ] = useState<any>( [] );
    const listBook = [
        {
            "name": "Anh duong ban mai mai mai",
            "image": require( '../assets/image/k.jpg' )
        },
        {
            "name": "Anh duong ban mai mai",
            "image": require( '../assets/image/k.jpg' )
        },
        {
            "name": "Anh duong ban mai mai",
            "image": require( '../assets/image/k.jpg' )
        },
        {
            "name": "Anh duong ban mai mai",
            "image": require( '../assets/image/k.jpg' )
        }
    ];
    // const listCate = [
    //     {
    //         "name": "Ngôn Tình",

    //     },
    //     {
    //         "name": "Cổ Đại",

    //     },
    //     {
    //         "name": "Xuyên Không",

    //     },
    //     {
    //         "name": "Nữ Phụ",

    //     },
    //     {
    //         "name": "Điền Văn",

    //     },
    //     {
    //         "name": "Sủng",

    //     }
    // ];
    return (
        <>
            <View>
                <Text style={ styles.textTitleapp }>TYT</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={ false }>
                <View style={ styles.container }>


                    <View style={ styles.vHeader } >
                        <TouchableOpacity style={ styles.outstanding }>
                            <Icons style={ styles.btnIconhd } name="star" color="#00BFFF" size={ 30 } />
                            <Text style={ styles.btnTexticonhd }>Đánh Giá</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.outstanding }>
                            <Iconsss style={ styles.btnIconhd } name="heart" color="#00BFFF" size={ 30 } />
                            <Text style={ styles.btnTexticonhd }>Yêu Thích</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.outstanding }>
                            <Icons style={ styles.btnIconhd } name="bar-chart" color="#00BFFF" size={ 30 } />
                            <Text style={ styles.btnTexticonhd }>Xem Nhiều</Text>
                        </TouchableOpacity>


                    </View>
                    <View style={ { paddingTop: 30 } }>
                        <View style={ styles.vTitleLeft }>
                            <Text style={ styles.vText }>Mới đăng</Text>

                            <TouchableOpacity onPress={ () => navigation.navigate( 'Newbook' ) } style={ { flexDirection: 'row' } }>
                                <Text style={ { color: '#00BFFF', fontSize: 17 } }>Xem Thêm</Text>
                                <Icon style={ { color: '#00BFFF' } } name="chevron-small-right" color="gray" size={ 25 } />
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={ false } >
                            <View style={ { flexDirection: 'row' } }>
                                {
                                    books.map( ( item: any, index: any ) =>
                                    {
                                        return (
                                            <TouchableOpacity key={ index } onPress={ () => navigation.navigate( 'Detail', { item: item } ) } style={ { width: 100, height: 150, paddingLeft: 15 } }  >
                                                <Image source={ { uri: item.image } } style={ { width: 80, height: 100, borderRadius: 5 } } />
                                                <Text numberOfLines={ 2 } style={ { width: 85, color: 'black', alignItems: 'center' } }>{ item.name } </Text>
                                            </TouchableOpacity>
                                        )
                                    } )
                                }
                            </View>
                        </ScrollView>
                    </View>
                    <View style={ { paddingTop: 30 } }>
                        <View style={ styles.vTitleLeft }>
                            <Text style={ styles.vText }>Mới cập nhật</Text>
                            <TouchableOpacity style={ { flexDirection: 'row' } }>
                                <Text onPress={ () => navigation.navigate( 'Newbookup' ) } style={ { color: '#00BFFF', fontSize: 17 } }>Xem Thêm</Text>
                                <Icon style={ { color: '#00BFFF' } } name="chevron-small-right" color="gray" size={ 25 } />
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={ false } >
                            <View style={ { flexDirection: 'row' } }>
                                {
                                    bookup.map( ( item: any, index: any ) =>
                                    {
                                        return (
                                            <TouchableOpacity key={ index } onPress={ () => navigation.navigate( 'Detail', { item: item } ) } style={ { width: 100, height: 150, paddingLeft: 15 } }  >
                                                <Image source={ { uri: item.image } } style={ { width: 80, height: 100, borderRadius: 5 } } />
                                                <Text numberOfLines={ 2 } style={ { width: 85, color: 'black', alignItems: 'center' } }>{ item.name } </Text>
                                            </TouchableOpacity>
                                        )
                                    } )
                                }
                            </View>
                        </ScrollView>

                    </View>
                    <View style={ { paddingTop: 30 } }>
                        <View style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, paddingLeft: 15, paddingRight: 10 } }>
                            <Text style={ styles.vText }>Truyện Full - Hoàn</Text>
                            {/* <TouchableOpacity><Text style={ { color: 'blue', fontSize: 18 } }>Xem Thêm</Text></TouchableOpacity> */ }
                        </View>


                        <View style={ { flexDirection: 'row', justifyContent: "space-around", paddingBottom: 10, paddingTop: 20 } }>
                            <TouchableOpacity style={ { paddingVertical: 10, backgroundColor: '#f5f5f5', width: 170, alignItems: 'center', borderRadius: 4 } }>
                                <Text style={ styles.vText }  >Full - Mới cập nhật</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={ { paddingVertical: 10, backgroundColor: '#f5f5f5', width: 170, alignItems: 'center', borderRadius: 4 } }>
                                <Text style={ styles.vText }  >Full - Đánh giá cao</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={ { flexDirection: 'row', justifyContent: "space-around" } }>
                            <TouchableOpacity style={ { paddingVertical: 10, backgroundColor: '#f5f5f5', width: 170, borderRadius: 4, paddingLeft: 10 } }>
                                <Text style={ styles.vText }  >Full - Yêu thích</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={ { paddingVertical: 10, backgroundColor: '#f5f5f5', width: 170, paddingLeft: 10, borderRadius: 4 } }>
                                <Text style={ styles.vText }  >Full - Xem nhiều</Text>
                            </TouchableOpacity>
                        </View>




                    </View>
                    <View style={ { paddingTop: 30 } }>
                        <View style={ styles.vTitleLeft }>
                            <Text style={ styles.vText }>Truyện Đọc Gần Đây</Text>
                            <TouchableOpacity><Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 25 } /></TouchableOpacity>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={ false } >
                            <View style={ { flexDirection: 'row' } }>
                                {
                                    listBook.map( ( item, index ) =>
                                    {
                                        return (
                                            <TouchableOpacity key={ index } onPress={ () => navigation.navigate( 'Book' ) } style={ { width: 100, height: 150, paddingLeft: 15 } }  >
                                                <Image source={ item.image } style={ { width: 80, height: 100, borderRadius: 5 } } />
                                                <Text numberOfLines={ 2 } style={ { width: 85, color: 'black', alignItems: 'center' } }>{ item.name } </Text>
                                            </TouchableOpacity>
                                        )
                                    } )
                                }
                            </View>
                        </ScrollView>

                    </View>
                    <View style={ { paddingTop: 30 } }>
                        <View style={ styles.vTitleLeft }>
                            <Text style={ styles.vText }>Hãy thử khám phá</Text>
                            {/* <TouchableOpacity><Text style={ { color: 'blue', fontSize: 18 } }>Xem Thêm</Text></TouchableOpacity> */ }
                        </View>

                        <View style={ { flexDirection: 'column', paddingHorizontal: 15 } }>
                            <View >
                                <TouchableOpacity style={ { paddingVertical: 15, backgroundColor: '#f5f5f5', width: '100%', alignItems: 'center', borderRadius: 4, flexDirection: 'row' } }>
                                    <Iconss style={ { paddingLeft: 20 } } name="ios-filter" color="#00BFFF" size={ 25 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'black' } }  >Bộ lọc truyện nâng cao</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={ { paddingVertical: 20 } }>
                                <TouchableOpacity style={ { paddingVertical: 15, backgroundColor: '#f5f5f5', width: '100%', alignItems: 'center', borderRadius: 4, flexDirection: 'row' } }>
                                    <Iconssss style={ { paddingLeft: 20 } } name="comment-edit-outline" color="#00BFFF" size={ 25 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'black' } }  >Đánh giá truyện bởi bạn đọc TYT</Text></TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity style={ { paddingVertical: 15, backgroundColor: '#f5f5f5', width: '100%', alignItems: 'center', borderRadius: 4, flexDirection: 'row' } }>
                                    <Iconssss style={ { paddingLeft: 20 } } name="collapse-all-outline" color="#00BFFF" size={ 25 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'black', } }  >Bộ sưu tập truyện hay mới chia sẻ</Text></TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={ { paddingTop: 30 } }>
                        <View style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, paddingLeft: 15, paddingRight: 10 } }>
                            <Text style={ styles.vText }>Thể Loại</Text>
                            <TouchableOpacity onPress={ () => navigation.navigate( 'Category' ) }><Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 25 } /></TouchableOpacity>
                        </View>



                        <View style={ { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, justifyContent: 'space-around' } }>

                            {
                                cates.map( ( item: any, index: any ) =>
                                {
                                    return (

                                        <View key={ index } style={ { paddingBottom: 15 } }>
                                            <TouchableOpacity onPress={ () => navigation.navigate( 'Listcate', { item: item } ) } style={ { paddingVertical: 10, backgroundColor: '#f5f5f5', width: 170, borderRadius: 4, paddingLeft: 10 } }>
                                                <Text style={ styles.vText } >{ item.name } </Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                } )
                            }

                        </View>





                    </View>
                    <View style={ { paddingTop: 30 } }>
                        <View style={ styles.vTitleLeft }>
                            <Text style={ styles.vText }>Danh Sách Khác</Text>
                            {/* <TouchableOpacity><Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 25 } /></TouchableOpacity> */ }
                        </View>
                        <View style={ { paddingLeft: 15 } }>
                            <View style={ { paddingBottom: 15 } }>
                                <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, paddingRight: 10, borderBottomWidth: 1, borderBottomColor: '#f5f5f5' } }>
                                    <Text style={ { fontSize: 16, color: 'black' } }>Ngôn Tình Cố Mạn Full</Text>
                                    <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 25 } />
                                </TouchableOpacity>
                            </View>
                            <View style={ { paddingBottom: 10 } }>
                                <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, paddingRight: 10, borderBottomWidth: 1, borderBottomColor: '#f5f5f5' } }>
                                    <Text style={ { fontSize: 16, color: 'black' } }>Ngôn Tình Tân Di Ổ</Text>
                                    <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 25 } />
                                </TouchableOpacity>
                            </View>
                            <View style={ { paddingBottom: 10 } }>
                                <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, paddingRight: 10, borderBottomWidth: 1, borderBottomColor: '#f5f5f5' } }>
                                    <Text style={ { fontSize: 16, color: 'black', width: '90%' } }>Top 50 tiểu thuyết ảnh hưởng lớn nhất trên Internet(Phần 1)</Text>
                                    <Icon style={ { paddingTop: 5 } } name="chevron-right" color="#c6c6c6" size={ 25 } />
                                </TouchableOpacity>
                            </View>
                            <View style={ { paddingBottom: 10 } }>
                                <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, paddingRight: 10, borderBottomWidth: 1, borderBottomColor: '#f5f5f5' } }>
                                    <Text style={ { fontSize: 16, color: 'black', width: '90%' } }>Top 50 tiểu thuyết ảnh hưởng lớn nhất trên Internet(Phần 2)</Text>
                                    <Icon style={ { paddingTop: 5 } } name="chevron-right" color="#c6c6c6" size={ 25 } />
                                </TouchableOpacity>
                            </View>
                            <View style={ { paddingBottom: 10 } }>
                                <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, paddingRight: 10, borderBottomWidth: 1, borderBottomColor: '#f5f5f5' } }>
                                    <Text style={ { fontSize: 16, color: 'black', width: '90%' } }>Đam mỹ Full - Hoàn hợp tác bởi TYT và các team dịch</Text>
                                    <Icon style={ { paddingTop: 5 } } name="chevron-right" color="#c6c6c6" size={ 25 } />
                                </TouchableOpacity>
                            </View>
                            <View >
                                <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5, paddingRight: 10, borderBottomWidth: 1, borderBottomColor: '#f5f5f5' } }>
                                    <Text style={ { fontSize: 16, color: 'black', width: '90%' } }>Ngôn tình Full - Hoàn hay bởi các team dịch hợp tác trên TYT</Text>
                                    <Icon style={ { paddingTop: 5 } } name="chevron-right" color="#c6c6c6" size={ 25 } />
                                </TouchableOpacity>
                            </View>

                        </View>






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
    outstanding: {
        backgroundColor: '#f5f5f5',
        width: 110,
        height: 75,
        borderRadius: 4,
        flexDirection: 'column',
        justifyContent: 'center',

        paddingTop: 10

    },
    outstanding_full: {
        backgroundColor: '#f5f5f5',
        width: 150,
        height: 50,
        // borderRadius: 5,
        // marginBottom: 15,
        // marginLeft: 15,
        // alignItems: 'center'
        paddingLeft: 20


    },

    itembook: {
        backgroundColor: '#f5f5f5',
        width: 100,
        height: 80,
    },
    textTitleapp: {
        fontSize: 20,
        paddingLeft: '45%',
        color: 'black',
        paddingTop: 20,
        fontFamily: 'SFProText-Medium',
        backgroundColor: 'white',


    },
    vHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20
    },
    btnIconhd: {
        paddingLeft: 40,
        paddingBottom: 3
    },
    btnTexticonhd: {
        fontSize: 16,
        paddingLeft: 20,
        color: 'black',
        fontFamily: 'SFProText-UILight',
    },
    vTitleLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 30,
        paddingLeft: 15,
        paddingRight: 10
    },
    vText: {
        fontSize: 17,
        color: 'black',
        fontFamily: 'SFProText-UILight',
    }
} )

export default Home_screen;
