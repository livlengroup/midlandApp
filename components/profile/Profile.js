import React, {useState,useEffect} from 'react';
import { Dimensions,StyleSheet,View, Text, ScrollView, Button} from 'react-native';

export default function Profile() {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch('/profile')
          .then(res => res.json())
          .then(response => {
            setUserInfo([response[0].data])
          });
      }, []);
        
    return (
        <View>
            {userInfo.map(info => {
                return(
                <View>
                    <Text>{info.name}</Text>
                    <Text>{info.email}</Text>
                    <Text>{info.desc}</Text>

                    {/* saved info */}
                    <View>
                    <View className="savedInfoMainView" key={info.id}>

                        <Image className="business-savedInfo-img" 
                            src=
                            {info.image} 
                            />
                    <View className="savedInfoDetailMain">
                        <Text className="savedInfo-detail-name">{info.name}</Text>
                    <View className="savedInfoSubDetail">
                        <Text className="savedInfo-desc">{info.tags}</Text>
                        <Button
                            className="pre-click-btn"
                            title="See More"
                            
                        > See More</Button>
                    </View>
                </View>
            </View>
    
                    </View>
                </View>
                )
                
            })}
        </View>
    )
}
