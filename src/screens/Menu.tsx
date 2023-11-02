import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/MaterialIcons';
import Iconsss from 'react-native-vector-icons/Octicons';
import auth from '@react-native-firebase/auth';
const Menu = ( { navigation }: any ) =>
{
    const [ initializing, setInitializing ] = useState( true );
    const [ user, setUser ] = useState<any>( '' );

    // Handle user state changes
    const onAuthStateChanged = () =>
    {
        setUser( user );
        if ( initializing ) setInitializing( false );
    }

    useEffect( () =>
    {
        const subscriber = auth().onAuthStateChanged( onAuthStateChanged );
        return subscriber; // unsubscribe on unmount
    }, [] );
    return (
        <>
            <View>
                <Text style={ styles.textMenu }>Menu</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={ false }>
                <View style={ { backgroundColor: 'white' } }>

                    <View style={ { paddingTop: 30 } } >
                        { !user ? <TouchableOpacity onPress={ () => navigation.navigate( 'Signin' ) } style={ styles.vIn4 }>
                            <TouchableOpacity style={ {
                                width: 70,
                                height: 70,
                                borderRadius: 50,
                                backgroundColor: '#f5f5f5'
                            } }>
                                <Icon style={ { alignSelf: 'center', top: '30%' } } name="heart" color="#00BFFF" size={ 33 } />
                            </TouchableOpacity>
                            {/* <Image source={ require( '../assets/image/gi.jpg' ) } style={ styles.vImage } /> */ }
                            <View style={ { paddingVertical: 20, paddingRight: 20 } }>
                                <Text style={ { fontWeight: 'bold', color: 'gray' } }>Chào mừng bạn đến với TYT</Text>
                                <Text style={ { color: 'gray' } }>Đăng nhập / Đăng ký</Text>
                            </View>
                            <Icon style={ { paddingLeft: 60, paddingTop: 30 } } name="chevron-right" color="#c6c6c6" size={ 25 } />
                        </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={ () => navigation.navigate( '' ) } style={ styles.vIn4 }>
                                <TouchableOpacity style={ {
                                    width: 70,
                                    height: 70,
                                    borderRadius: 50,
                                    backgroundColor: '#f5f5f5'
                                } }>
                                    <Icon style={ { alignSelf: 'center', top: '30%' } } name="heart" color="#00BFFF" size={ 33 } />
                                </TouchableOpacity>
                                <Image source={ require( '../assets/image/gi.jpg' ) } style={ styles.vImage } />
                                <View style={ { paddingVertical: 20, paddingRight: 20 } }>
                                    <Text style={ { fontWeight: 'bold', color: 'gray' } }>Chào mừng bạn đến với TYT</Text>
                                    <Text style={ { color: 'gray' } }>Đăng nhập / Đăng ký</Text>
                                </View>
                                <Icon style={ { paddingLeft: 60, paddingTop: 30 } } name="chevron-right" color="#c6c6c6" size={ 25 } />
                            </TouchableOpacity> }

                    </View>
                    <View style={ { paddingVertical: 30 } }>
                        <View>
                            <Text style={ { paddingLeft: 15, color: 'gray' } }>LỊCH SỬ TRÊN TÀI KHOẢN</Text>
                        </View>
                        <View style={ { paddingTop: 20 } } >
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="history" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Truyện đã xem</Text>
                                </View>

                                <Icon name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="heart" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Truyện đã thích</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Icons style={ { color: '#00BFFF', left: -4 } } name="download" color="#c6c6c6" size={ 30 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 5, color: 'gray' } }>Truyện đã tải</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Icons style={ { color: '#00BFFF', left: -3 } } name="bell-badge-outline" color="#c6c6c6" size={ 30 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 5, color: 'gray' } }>Truyện đã theo dõi</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ { paddingVertical: 10 } }>
                        <View>
                            <Text style={ { paddingLeft: 15, color: 'gray' } }>THÔNG BÁO</Text>
                        </View>
                        <View style={ { paddingTop: 20 } } >
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="bell" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Thông báo của tôi</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>



                        </View>
                    </View>
                    <View style={ { paddingVertical: 10 } }>
                        <View>
                            <Text style={ { paddingLeft: 15, color: 'gray' } }>DANH SÁCH TRUYỆN</Text>
                        </View>
                        <View style={ { paddingTop: 20 } } >
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconss style={ styles.color_icon } name="library-add-check" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Bộ sưu tập của tôi</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconss style={ styles.color_icon } name="library-add-check" color="#c6c6c6" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Bộ sưu tập yêu thích</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconss style={ styles.color_icon } name="library-books" color="#c6c6c6" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Bộ sưu tập cộng đồng TYT</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={ { paddingVertical: 10 } }>
                        <View>
                            <Text style={ { paddingLeft: 15, color: 'gray' } }>ĐÁNH GIÁ TRUYỆN</Text>
                        </View>
                        <View style={ { paddingTop: 20 } } >
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="star" color="#c6c6c6" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Nhận xét của tôi</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="code-review" color="#c6c6c6" size={ 22 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Cộng đồng truyện</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ { paddingVertical: 10 } }>
                        <View>
                            <Text style={ { paddingLeft: 15, color: 'gray' } }>GÓI DỊCH VỤ</Text>
                        </View>
                        <View style={ { paddingTop: 20 } } >
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="device-desktop" color="#c6c6c6" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>TYT Pro</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={ { paddingVertical: 10 } }>
                        <View>
                            <Text style={ { paddingLeft: 15, color: 'gray' } }>CÀI ĐẶT</Text>
                        </View>
                        <View style={ { paddingTop: 20 } } >
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="typography" color="#c6c6c6" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Cài đặt giao diện đọc truyện</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="paintbrush" color="#c6c6c6" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Chọn màu yêu thích</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="video" color="#c6c6c6" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Cài đặt quảng cáo</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={ { paddingVertical: 10 } }>
                        <View>
                            <Text style={ { paddingLeft: 15, color: 'gray' } }>THÔNG TIN</Text>
                        </View>
                        <View style={ { paddingTop: 20 } } >
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="star-fill" color="#c6c6c6" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Góp ý - Đánh giá ứng dụng</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="paper-airplane" color="#c6c6c6" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Gửi mail cho TYT</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="share-android" color="#c6c6c6" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Chia sẻ ứng dụng</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>
                            <TouchableOpacity style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30, paddingLeft: 20, paddingRight: 10 } }>
                                <View style={ { flexDirection: 'row' } }>
                                    <Iconsss style={ styles.color_icon } name="shield-check" color="#c6c6c6" size={ 23 } />
                                    <Text style={ { fontSize: 17, paddingLeft: 10, color: 'gray' } }>Chính sách bảo mật</Text>
                                </View>

                                <Icon style={ {} } name="chevron-right" color="#c6c6c6" size={ 23 } />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create( {
    color_icon: {
        color: '#00BFFF'
    },
    textMenu: {
        color: 'black',
        fontSize: 20,
        paddingHorizontal: 160,
        paddingTop: 20,
        fontFamily: 'SFProText-Medium',
        backgroundColor: 'white'
    },
    vIn4: {
        flexDirection: 'row',
        paddingLeft: 15,
        justifyContent: 'space-around'
    },
    vImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
    }
} )
export default Menu;