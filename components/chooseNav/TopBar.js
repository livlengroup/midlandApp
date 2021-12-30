import React from 'react'
import Button from './../login3/components/Button'
import {StyleSheet, Text, View} from 'react-native';
import { logoutUser } from './../login3/api/auth-api'
export default function TopBar() {
    return (
        <View>
            <Button onPress={logoutUser}/>
            <Text>Midland AF</Text>
        </View>
    )
}
