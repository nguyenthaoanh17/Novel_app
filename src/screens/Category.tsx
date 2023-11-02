import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import firebase from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
const Category = ( { route, navigation }: any ) =>
{
    const fb = firebase().collection( 'category' );
    useEffect( () =>
    {

        fb.onSnapshot( querySnapshot =>
        {
            const list: any = [];
            querySnapshot.forEach( ( doc ) =>
            {
                list.push( {
                    id: doc.id,
                    name: doc.data().name,


                } )
            } )
            setCates( list )
        } );

    }, [] );
    const [ cates, setCates ] = useState( [] );



    return (
        <>
            <View>
                <Text style={ styles.textTitle }>Thể Loại</Text>
            </View>
            <ScrollView>
                <View style={ styles.container } >

                    <View style={ { paddingHorizontal: 15, paddingTop: 30 } }>
                        <View style={ { paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' } }>
                            {
                                cates.map( ( item: any ) =>
                                {
                                    return (
                                        <View key={ item.id } style={ styles.v_cate }>
                                            <TouchableOpacity onPress={ () => navigation.navigate( 'Listcate', { item: item } ) } style={ styles.cate }>
                                                <Text style={ styles.cate_text }>{ item.name }</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                } )
                            }
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
    v_cate: {
        paddingBottom: 15
    },
    cate: {
        alignItems: 'center', borderRadius: 6, borderWidth: 1, width: 175, height: 55, borderColor: 'gainsboro'
    },
    cate_text: {
        fontSize: 18, color: 'black', paddingTop: 13
    },
    textTitle: {
        fontSize: 20,
        paddingHorizontal: 155,
        color: 'black',
        paddingTop: 20,
        fontFamily: 'SFProText-Medium',
        backgroundColor: 'white'
    }
} )
export default Category;