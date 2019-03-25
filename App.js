'use-restrict';

import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class App extends React.Component {
    state = { showScanner: false, hasCameraPermission: false };
    componentDidMount() {
        this._requestCameraPermission();
    }
    _requestCameraPermission = async () => {
        let { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };
    _onBarCodeRead = (data) => {
        this.setState({ showScanner: false }, () => {
            Alert.alert('Scan successful!', JSON.stringify(data));
        });
    };
    _renderHome() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>Click to open the barcode scanner.</Text>
                <Button
                    onPress={() => this.setState({ showScanner: true })}
                    title='Scan a QR Code.'
                />
            </View>
        );
    }
    _renderScanner() {
        return (
            <View style={styles.container}>
                <BarCodeScanner
                    onBarCodeRead={this._onBarCodeRead}
                    style={[StyleSheet.absoluteFill, styles.scannerContainer]}
                >
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Pindai Kode QR</Text>
                        <Text style={styles.headerDescription}>Pindai kode QR yang disediakan oleh rumah sakit dimana Anda berada</Text>
                    </View>
                    <View style={styles.layerTop} />
                    <View style={styles.layerCenter}>
                        <View style={styles.layerLeft} />
                        <View style={styles.focused} />
                        <View style={styles.layerRight} />
                    </View>
                    <View style={styles.layerBottom} />
                </BarCodeScanner>
            </View>
        );
    }
    render() {
        if (!this.state.hasCameraPermission) {
            return <Text>Requesting camera permission...</Text>;
        } else if (this.state.showScanner) {
            return this._renderScanner();
        } else {
            return this._renderHome();
        }
    }
}
const opacity = 'rgba(50, 50, 50, .9)';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    scanner: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scannerContainer: {
        flex: 1
    },
    header: {
        flex: 2,
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight + 30,
        paddingLeft: 20
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 27
    },
    headerDescription: {
        fontSize: 16,
        marginTop: 10
    },
    layerTop: {
        flex: 1,
        backgroundColor: opacity
    },
    layerCenter: {
        flex: 2,
        flexDirection: 'row'
    },
    layerLeft: {
        flex: 1,
        backgroundColor: opacity
    },
    focused: {
        flex: 10,
        borderWidth: 1,
        borderColor: 'grey'
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity
    },
    layerBottom: {
        flex: 1,
        backgroundColor: opacity
    },
});
