import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import DealsContainer from './components/localDeals/DealsContainer';

import Context from './context/Context';
import EventCalender from './components/eventsCalender/EventCalender';
import {NativeRouter, Route, Switch} from 'react-router-native';

import Home from './components/chooseNav/Home';
import Nav from './components/chooseNav/Nav';
import HappyHours from './components/happyHours/HappyHours';
import Profile from './components/profile/Profile';
import NearMe from './components/nearMe/NearMe';
import TopBar from './components/chooseNav/TopBar';
export default function Dashboard() {
    return (
        <NativeRouter>
          <TopBar/>
      <Context>
        <ScrollView style={styles.container}>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/deals" component={DealsContainer} />
            <Route exact path="/eventCalender" component={EventCalender} />
            <Route exact path="/happyHours" component={HappyHours} />
            <Route
              exact
              path="/nearMe"
              component={NearMe}
            />
            <Route
              exact
              path="/profile"
              component={Profile}
            />
          </Switch>
        </ScrollView>
        <Nav style={styles.containers} />
      </Context>
    </NativeRouter>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    containers: {
      backgroundColor: '#fff',
    },
  });