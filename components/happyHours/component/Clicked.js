import React from 'react';
import {ScrollView, Text, Image, View, Button} from 'react-native';

export default function Clicked({data}) {
  return (
    <ScrollView className="clicked-main-div">
      <View className="clicked-img-div">
        <Text href={data.link} target="_blank">
          <Image className="business-clicked-img"  />
        </Text>
      </View>
      <View className="clicked-desc-div">
        <Text>{data.name}</Text>
        <View className="clicked-desc">
          <Text>{data.discountDesc}</Text>
          <Text>{data.address}</Text>
          <Text>
            Promo Code:{' '}
            <Text className="promo-code">
              <Text>{data.desc}</Text>
            </Text>{' '}
            {/* <Text style={{fontSize: '10px', marginLeft: '10px'}}> */}
            <Text >
              *Mention at checkout!
            </Text>
          </Text>

          <Button className="website-btn" title="Visit Website &#8594">
            <Text
              href={data.link}
              target="_blank"
              rel="noreferrer"
              >

              
              Visit Website <Text>&#8594;</Text>
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
