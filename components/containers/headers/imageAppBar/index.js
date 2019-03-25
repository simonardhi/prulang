import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Dimensions} from 'react-native';

export default class ImageAppBar extends React.Component {
    render() {
        let { image, imgStyle, txtStyle, title} = this.props;
        return (
            <ImageBackground
                source={image}
                imageStyle={{borderTopLeftRadius: 5, borderTopRightRadius: 5, height: '100%', width: '100%'}}
                style={styles.bgImage}>
                <Text style={styles.txtLink}>{title}</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    navContainer: {},
    bgImage: {
        height: 70,
        width: Dimensions.get('window').width - 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderColor: '#999',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 10
    },
    txtLink: {
        fontSize: 19,
        color: '#000',
        fontWeight: 'bold',
        marginRight: 10
    },
});
