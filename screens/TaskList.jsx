import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {useDispatch, useSelector} from "react-redux";
import {getJobsRequest} from "../utils/actions";


const TaskList = ({navigation}) => {
    const dispatch = useDispatch();
    const jobs = useSelector((state)=>state.jobs)

    useEffect(() => {
        dispatch(getJobsRequest())
    }, [dispatch]);


    const renderTask = ({item}) => (
        <View style={styles.taskContainer}>
            <Icon name="check-square" size={20} color="green" style={styles.icon}/>
            <Text style={styles.taskText}>{item.title}</Text>
            <TouchableOpacity>
                <Icon name="edit" size={20} color="red" style={styles.icon}/>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{uri: 'https://picsum.photos/200'}} //
                    style={styles.profileImage}
                />
                <View style={styles.greeting}>
                    <Text style={styles.greetingText}>Hi Twinkle</Text>
                    <Text style={styles.subText}>Have a great day ahead</Text>
                </View>
            </View>
            <TextInput style={styles.searchBar} placeholder="Search"/>
            <ScrollView>
                <FlatList
                    data={jobs}
                    renderItem={renderTask}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    scrollEnabled={true}
                />
            </ScrollView>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddJobScreen')}
            >
                <Icon name="plus" size={30} color="white"/>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    greeting: {
        marginLeft: 10,
    },
    greetingText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 14,
        color: '#888',
    },
    searchBar: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e9ecef',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    taskText: {
        flex: 1,
        fontSize: 16,
    },
    listContent: {
        padding: 20,
    },
    icon: {
        marginHorizontal: 10,
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        backgroundColor: '#17a2b8',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TaskList;