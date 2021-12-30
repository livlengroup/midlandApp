import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link, useLocation} from 'react-router-native';

export default function Nav() {
  let locationObj = useLocation();
  return (
    <View style={styles.containerss}>
        <View >
          <Link to={'/'}><Text>Home</Text></Link>
          <Link to={'/deals'}><Text>Business Directory</Text></Link>
          <Link to={'/profile'}><Text>Profile</Text></Link>
          <Link to={'/eventCalender'}><Text>Event Calender</Text></Link>
          <Link to={'/happyHours'}><Text>Happy Hours</Text></Link>
          <Link to={'/nearMe'}><Text>Near Me</Text></Link>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerss: {
    // display: 'flex',
    // backgroundColor: '#fff',
  },
});