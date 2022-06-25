import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Dimensions, TouchableOpacity, AsyncStorage, FlatList, Button, ActivityIndicator } from 'react-native'
import Icon_AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios';
import Modal from 'react-native-modal';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;


export default class PosterScreenView extends Component {

    // static navigationOptions = ({ navigation }) => ({
    //     title: "Posts",
    //     headerStyle: {
    //         backgroundColor: '#003967'
    //     },
    //     headerTintColor: '#fff',
    //     // headerBackground: '',
    //     headerTitleStyle: {
    //         fontSize: 20
    //     },

    // })



    constructor() {
        super();
        this.state = {
            myList: [],
            isAddPostModalVisible: false,
            title: '',
            bodyInfo: '',
            spinnerStatus: false,
            buttonSpinner: false
        }
    }

    async componentDidMount() {
        
        await this.getData()

    }

    getData = async () => {
        this.setState({
            spinnerStatus: true
        })
        let url = `https://jsonplaceholder.typicode.com/comments`
        axios.get(url)
            .then(response => {
                if (response.status == 200) {
                    this.setState({
                        myList: response.data,
                        spinnerStatus: false
                    })
                }


            })
            .catch(function (error) {
                alert(error)
            });
    }

    renderMyList = (item, index) => {
        return (
            <View>
                <View style={styles.renderListContainer}>
                    <View style={{}}>
                        <View style={{ flexDirection: 'row', }}>

                            <View style={{ justifyContent: 'center' }} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('postDetailsScreen', { 'data': item })} >
                                    {/* <View style={{ flexDirection: 'row', }}>
                                        <View>
                                            <Text style={{ fontSize: 14 }}>
                                                {item.name}
                                            </Text>
                                        </View>
                                    </View> */}
                                    <View style={styles.card}>
                                    <View style={{width:'100%'}}>
                                        <View>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                                {item.name}
                                            </Text>
                                        </View>
                                        <View>
                                        <Text style={{ fontSize: 14 }}>
                                                {item.email}
                                            </Text>
                                        </View>
                                    </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        )
    }



    render() {
        return (
            <View style={styles.backgroundContainer}>

                <KeyboardAvoidingView>
                    <View>
                        {this.state.spinnerStatus ?
                            <View style={{ justifyContent: 'center' }}>
                                <ActivityIndicator size="small" color={'#003967'} />
                            </View>
                            :
                            <View >
                                {this.state.myList.length > 0 ?
                                    <View >
                                        <FlatList
                                            data={this.state.myList}
                                            renderItem={({ item, index }) => this.renderMyList(item, index)}
                                            onEndReachedThreshold={0.7}
                                        />
                                    </View>
                                    :
                                    <View>
                                        <Text>Loading ...</Text>
                                    </View>
                                }
                            </View>
                        }

                    </View>
                </KeyboardAvoidingView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
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
        fontSize: 12,
        paddingTop: 7,
        paddingBottom: 7,
        textAlign: 'center',
    },
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
      }

});