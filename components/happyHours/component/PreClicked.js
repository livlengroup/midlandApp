import React from 'react';
import { Dimensions,StyleSheet,View, Text, ScrollView, Button, Image} from 'react-native';

export default function PreClicked({data,onChange}) {
  return (
    <View className="preClickMainView" key={data.id}>
      {/* <h5 className="preClickImgName">{data.name}</h5 > */}
      <Image className="business-preclick-img" 
       src=
       {data.image} 
       />
      <View className="preClickDetailMain">
        <Text className="preclick-detail-name">{data.name}</Text>
        <View className="preClickSubDetail">
          <Text className="preclick-desc">{data.tags}</Text>
          <Button
          className="pre-click-btn"
          title="See More"
          onPress={() => onChange(data.id)}
          > See More</Button>
        </View>
      </View>
    </View>
    
  );
}
