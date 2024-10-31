import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useDispatch} from "react-redux";
import {addJobRequest} from "../utils/saga/actions";
import {addJob} from "../utils/reduxtoolkit/jobSlice";

const AddJobScreen = ({navigation}) => {
    const [job, setJob] = useState('');
    //SAGA RUDUX
    /*const dispatch = useDispatch();

    const handleFinish = () => {
        dispatch(addJobRequest({ title: job }));
        navigation.goBack();
    };*/

    //REDUX TOOLKIT
    const dispatch = useDispatch();

    const handleFinish = () => {
        dispatch(addJob({ title: job }));
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{uri: 'https://picsum.photos/200'}} // Replace with actual image URL
                    style={styles.profileImage}
                />
                <View style={styles.greeting}>
                    <Text style={styles.greetingText}>Hi Twinkle</Text>
                    <Text style={styles.subText}>Have a great day ahead</Text>
                </View>
            </View>

            <Text style={styles.title}>ADD YOUR JOB</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Input your job"
                    value={job}
                    onChangeText={setJob}
                />
            </View>

            <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
                <Text style={styles.finishButtonText}>FINISH →</Text>
            </TouchableOpacity>

            <Image
                source={require('../assets/Image_95.png')}
                style={styles.noteImage}
            />
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    finishButton: {
        backgroundColor: '#17a2b8',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    finishButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    noteImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 30,
    },
});

export default AddJobScreen;
