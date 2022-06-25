import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Dimensions, TouchableOpacity, AsyncStorage, FlatList, Button, ActivityIndicator } from 'react-native'
import Icon_AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios';
import Modal from 'react-native-modal';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;


export default class HomeScreenView extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    
    render() {
        return (
            <View style={styles.backgroundContainer}>

                <KeyboardAvoidingView>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('postScreen')}>
                            <Text style={styles.text}>
                                Click here for Post List
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.addPost}>

                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('profileScreen')}>
                            <Text style={styles.text}>
                                Profile
                        </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        height:'100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
    },

    renderListContainer: {
        backgroundColor: 'white',
        paddingLeft: '0.5%',
        paddingRight: '0.5%',
        paddingVertical: '1.5%'
    },
    bottomStyleContainer: {
        width: '100%',
        borderBottomWidth: 0.5,
        marginBottom: 10
    },
    button: {
        width: deviceWidth - 155,
        fontSize: 12,
        backgroundColor: '#003967',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 17,
        paddingTop: 7,
        paddingBottom: 7,
        textAlign: 'center',
    },
    addPost: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },

});