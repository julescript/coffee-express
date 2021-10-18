import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {colors} from '../../constants/palette';
import Icon from 'react-native-vector-icons/Feather';
import IconF from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { deleteUser } from '../../redux/slices/userSlice';
import { store } from '../../redux/store';

const TopSection = () => {
	// const insets = useSafeAreaInsets();
	return (
		<View style={styles.topSection}>
            <Image source={{uri: "https://cdn.dribbble.com/users/2386687/avatars/normal/0cd83cf1ffbcc2294f65bd02d1b59cf9.jpg"}} style={styles.imageProfile}/>
			<View style={styles.nameContainer}>
				<Text numberOfLines={1} style={styles.title}>Julien Hosri</Text>
				<Text numberOfLines={1} style={styles.caption}><IconF
                    name={"coffee"}
                    color={colors.primary_dark}
                    size={15}
                />  coffee lover</Text>
			</View>
		</View>
	)
}

const CustomDrawer = (props: any) => {
    // const dispatch = useDispatch()
    return (
        <ScrollView bounces={false}>
			<TopSection />
            <View style={styles.container}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon name="home" color={colors.primary} size={24} />
                    )}
                    label="Home sweet home"
                    labelStyle={{
                        color: colors.text_dark,
                    }}
                    onPress={() => {
                        props.navigation.navigate('Home');
                    }}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="user"
                            color={colors.primary}
                            size={24}
                        />
                    )}
                    label="My Profile"
                    labelStyle={{
                        color: colors.text_dark,
                    }}
                    onPress={() => {
                        props.navigation.navigate('My Profile');
                    }}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon name="settings" color={colors.primary} size={24} />
                    )}
                    label="Settings"
                    labelStyle={{
                        color: colors.text_dark,
                    }}
                    onPress={() => {
                        props.navigation.navigate('Settings');
                    }}
                />
                <View style={styles.divider} />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="info"
                            color={colors.primary}
                            size={24}
                        />
                    )}
                    label="About"
                    labelStyle={{
                        color: colors.text_dark,
                    }}
                    onPress={() => {
                        props.navigation.navigate('About');
                    }}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon name="book-open" color={colors.primary} size={24} />
                    )}
                    label="Terms & Conditions"
                    labelStyle={{
                        color: colors.text_dark,
                    }}
                    onPress={() => {
                        props.navigation.navigate('Terms & Conditions');
                    }}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="shield"
                            color={colors.primary}
                            size={24}
                        />
                    )}
                    label="Privacy Policy"
                    labelStyle={{
                        color: colors.text_dark,
                    }}
                    onPress={() => {
                        props.navigation.navigate('Privacy Policy');
                    }}
                />
                <View style={styles.divider} />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon name="log-out" color={colors.red} size={24} />
                    )}
                    label="Logout"
                    labelStyle={{
                        color: colors.red,
                    }}
                    onPress={() => {
                        store.dispatch(deleteUser())
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default CustomDrawer;
