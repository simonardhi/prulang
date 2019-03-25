'use-restrict';

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderMenu from '../../headers/imageAppBar';

class PruFrontMenu extends React.Component {
    render() {
        let { srcImage, title, children } = this.props;
        return (
            <View style={styles.lists}>
                <HeaderMenu title={title} image={srcImage}/>
                {
                    children.map((item) => {
                        return (
                            <TouchableOpacity
                                style={styles.list}
                                onPress={}
                            >
                                <Text style={styles.txtList}>{item.label}</Text>
                                <Ionicons
                                    name="md-arrow-dropright"
                                    size={26}
                                    color="grey"
                                    style={styles.iconList}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default PruFrontMenu;
