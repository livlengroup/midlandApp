import React, { useState, useContext } from 'react';
import { Dimensions,StyleSheet,View, Text, ScrollView, Button, Image} from 'react-native';

export default function FirstPage({ buttonNames, btnId, firstPageHandleClick }) {

  return (
    <View>
      <View className="firstPage-main-View">
          {buttonNames.map(key => {
            return (
              <View>
              <Button
                title={key.name}
                key={key.id}
                onPress={() => firstPageHandleClick(key.id, key.tags)}>
                  <View className="item">
                    <View className="firstPageImgName">
                      
                    </View>
                    <Image
                      className="firstPageImg"
                      src={key.img} 
                    />       
                </View>
              </Button>
              </View>
            );
          })}
      </View>
    </View>
  );
}


