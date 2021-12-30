import React, {useState, useContext, useEffect} from 'react';
import PreClicked from './component/PreClicked';
import Clicked from './component/Clicked';
import SearchBar from './component/SearchBar';
import {Context} from '../../context/Context';
import FirstPage from './component/FirstPage';
import { Dimensions,StyleSheet,View, Text, ScrollView, Button} from 'react-native';

export default function DealsContainer() {
  const [isClicked, setIsClicked] = useState(false);
  const [dataId, setDataId] = useState();
  const [NotFilteredData, setNotFilteredData] = useState();
  const [btnId, setBtnId] = useState(1);
  const {contextData, setContextData} = useContext(Context);
  const [frontPage, setFrontPage] = useState(true);

  
  const images = ["https://lh3.googleusercontent.com/ksVwUsOjldOIW1t88s_JPLyAzBaiv61e4pldYGdcyyt9aKzr9CPiW7TmaZT8chNBx25bKsChf5_weBIFkLEv8R2WH2jWfjFcaTaNWNHlJytyr5Sl73IPbOstq2xHvU6hYXCpKQYZ=w2400",
  livlenLogo,event,arts,food,drink].map(a=>({
    src: a
  }));
  useEffect(() => {
    fetch('/businessDirectory2')
      .then(res => res.json())
      .then(response => {
        console.log("response",response[0].buttonName)
        setContextData([response[0].data])
        setNotFilteredData(response[0].data)
      });
  }, []);
  
  const buttonNames = [
    {id: 1, name: 'All', tags:'all', img:all},
    {id:14,name:'Eat',tags:'eat', img:food},
    {id:13,name:'Drink',tags:'Drink', img:drink},
    {id:10,name:'Coffee and Tea',tags:'Coffee and Tea', img:coffee},
    {id:5,name:'Consumer Services',tags:'Consumer Services', img:cust},
    {id:12,name:'Shop',tags:'Shop', img: shop},
    {id:7,name:'Art and Culture',tags:'Art and Culture', img:arts},
    {id:8,name:'Entertainment',tags:'Entertainment', img:ent},
    {id:9,name:'Health and Wellness',tags:'Health and Wellness', img:health }, 
    // {id:11,name:'Event Venue',tags:'Event Venue', img: event},
    
    {id:6,name:'Non Profit',tags:'Non Profit', img:nonprofit},
    
  
  ];

  
  console.log(contextData);
  const onChange = id => {
    if (isClicked !== true && id !== '5') {
      setIsClicked(true);
      setDataId(id);
    } else if (id !== '5') {
      setIsClicked(false);
    } else {
      setIsClicked(false);
    }
  };
  const firstPageHandleClick = (id, tags) => {
    setBtnId(id);
    if (tags === 'all') {
      setContextData(NotFilteredData);
    } else {
      setContextData(NotFilteredData.filter(data => data.tags === tags));
      
    }
    if(frontPage === true){
      setFrontPage(false);
    }
  };
  //search bar with clicking function
  const SearchBarhandleClick = (id, tags) => {
    setBtnId(id);
    if (tags === 'all') {
      setContextData(NotFilteredData);
    } else {
      setContextData(NotFilteredData.filter(click => click.tags === tags));
    }
  };

  //search bar with typing function
  const handleSearchChange =(data)=>{
    
}
  const handleSearchSubmit =(data)=>{  
  for (let i = 0; i < NotFilteredData.length - 1; i++){
    let mainData = NotFilteredData[i];
    if (mainData.name.toLowerCase().includes(NotFilteredData.toLowerCase())){
      setContextData(mainData)
    }
  }
}
  return (
    <View className="main-View">
      {contextData===null?null:
      frontPage===true?
      <FirstPage 
      buttonNames={buttonNames} 
      firstPageHandleClick={firstPageHandleClick} 
      btnId={btnId} />
      :<View>
        <SearchBar 
        buttonNames={buttonNames} 
        SearchBarhandleClick={SearchBarhandleClick} 
        btnId={btnId}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        />
        <View>
          <View>
      {isClicked === false ? (
        contextData.map(a => {
          return (
              <View lg="4" 
                  key={a.id}
                  className="pre-click-View"
                  onClick={() => onChange(a.id)}>
                    <PreClicked data={a} onChange={onChange}/>
                    </View>
          )})
          ):
          contextData
           .filter(elem => elem.id === dataId)
           .map(b => {
             return (
               <View key={b.id} className="clicked-View">
                 <Clicked data={b} onChange={onChange} images={images} />
               </View>
             );
           })
          }
          </View>
        </View>
          </View>
          }
      </View>
      )
  }


