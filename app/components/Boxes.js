import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Dimensions} from 'react-native';

let colors = ['#ffeaa7', '#00cec9', '#ff7675', '#6c5ce7', '#6c5ce7', '#00cec9']
const courses= [{name: 'Matemática'}, {name: 'Física'}, {name: 'Química'},{name: 'C.Computación'}, {name: 'Humanidades'}, {name: 'Inglés'}]
const numColumns = 2
//const WIDTH = Dimensions.get('windows').width



export default class Boxes extends React.Component {

    _renderItem = ({item, index}) =>{
        let {boxStyle, inner} = styles
        return (
            <View style={[boxStyle, {backgroundColor: colors[index % colors.length]}]}>
                <Text style={inner}>{item.name}</Text>
            </View>
        )
    }
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={courses}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 12,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
    },
    boxStyle: {
        width: 160,
        height: 180,
        padding: 5,
        marginRight: 12,
        marginLeft: 5,
        marginBottom: 15,
        //backgroundColor: '#6c5ce7',
        justifyContent: 'space-between',
    },
    inner: {
        flex: 1,
        //backgroundColor: '#e84393',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    }
});