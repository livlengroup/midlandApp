import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link} from 'react-router-native';
export default function Home() {
  return (
    <View>
          <Link to={'/deals'}><Text>Business Directory</Text></Link>
          <Link to={'/eventCalender'}><Text>Event Calender</Text></Link>
          <Link to={'/happyHours'}><Text>Happy Hours</Text></Link>
          <Link to={'/nearMe'}><Text>Near Me</Text></Link>
    </View>
  );
}
