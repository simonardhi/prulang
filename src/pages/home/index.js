'use-restrict';

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import * as AppConst  from '../../../src/Const';
import HeaderMenu from '../../../components/containers/headers/imageAppBar';

class HomePage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navContainer}>
                    <View style={styles.lists}>
                        <HeaderMenu title={'Menu Category 1'} image={AppConst.headerImg01}/>
                        <TouchableOpacity
                            style={styles.list}
                        >
                            <Text style={styles.txtList}>Menu 1</Text>
                            <Ionicons
                                name="md-arrow-dropright"
                                size={26}
                                color="grey"
                                style={styles.iconList}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navContainer: {},
    lists: {
        marginBottom: 10,
        backgroundColor: 'white'
    },
    list: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    txtList: {
        fontSize: 12,
        color: 'grey',
        marginLeft: 5
    },
    iconList: {
        marginRight:5
    }
});

export default HomePage;
