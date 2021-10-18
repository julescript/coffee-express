import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { store } from '../../redux/store';
import { updateUserProfile } from '../../redux/slices/userSlice';
import EmptyState from '../../components/EmptyState';

const RegisterScreen = () => {
    const navigation = useNavigation()
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <EmptyState
                // loading={true}
                icon={"coffee"}
                title={"Register Screen"}
                description={"here you will have your login screen"}
                actionButton={{
                    title: "Register",
                    callback: () => {
                        store.dispatch(updateUserProfile({ userProfile: {
                            uid: '123',
                            timestamp: '',
                            email: '123@123.com',
                            firstName: '123',
                            lastName: '123',
                            dateOfBirt: '',
                            profileImage: '',
                            gender: '',
                            country: '',
                        }}));
                    }
                }}
            />
        </View>
    );
};

export default RegisterScreen;
