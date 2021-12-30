import React, {useState, useContext} from 'react';
import { Dimensions,StyleSheet,View, Text, ScrollView, Button} from 'react-native';

export default function SearchBar({buttonNames,btnId,SearchBarhandleClick}) {
  
  return (
    <View className="searchbar-main-View">
      <View className="searchbar-btn-group">
        {buttonNames.map(key => {
          return (
            <Button
            key={key.id}
              className={
                key.id === btnId ? 'searchbar-btn' : 'searchbar-btn active'
              }
              title={key.name}
              onClick={() => SearchBarhandleClick(key.id, key.tags)}>
              
            </Button>
          );
        })}
      </View>
    </View>
  );
}
