import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import { Avatar } from "react-native-elements";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
import axios from 'axios';
import ViewMoreText from 'react-native-view-more-text';
console.disableYellowBox = true;

export default class PostDetailsScreenView extends Component {

    // static navigationOptions = ({ navigation }) => ({
    //     title: "Post Details",
    //     headerStyle: {
    //         backgroundColor: '#003967'
    //     },
    //     headerTintColor: '#fff',

    //     headerTitleStyle: {
    //         fontSize: 20
    //     }
    // })

    constructor() {
        super();
        this.state = {
            value: '',
            postDetails: {},
            userId: '',
            allComments: [],
        }
    }





    render() {

        const { navigation } = this.props;
        this.state.value = this.props.route.params.data

        return (
            <View style={styles.backgroundContainer}>

                <KeyboardAvoidingView>
                    <View style={{ backgroundColor: 'white', paddingLeft: '2.5%', paddingRight: '2.5%', paddingVertical: '1.5%' }}>
                        {/* <ScrollView style={{}} > */}

                        <View style={{ justifyContent: 'center', }}>
                            <View style={{ flexDirection: 'row' }}>
                                
                                <View>
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                            {this.state.value.name}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', paddingTop: '2%', paddingBottom: '2%' }}>
                                        <Text style={{ fontSize: 14, }}>
                                            {this.state.value.body}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text>{this.state.value.email}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: 'white',
        // alignItems: 'center',
        flex: 1,
    },

});