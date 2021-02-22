import axios from 'axios'
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [data,setData]= useState();
  const axios = require('axios');
  // axios.get('https://pokeapi.co/api/v2/pokemon/')
  // .then(function (response){
  //   setData(response.data);
  //   console.log(data.results);
  // })
  async function getPokemon(){
    try{
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setData(response.data);
      console.log(data.results);
    }catch (error){
      console.log(error);
    }
  }
  useEffect(() => {
    getPokemon();
  }, [])
  return (
    <View style={styles.container}> 
      {/* {data.map((el)=>{
        return( 
          <View>
            <Text>
                {el.name}
            </Text>
            <Text>
              {el.url}
            </Text>
          </View>)
      })} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    paddingTop: 60,
    marginRight:30,
    backgroundColor: '#fff',
  },
});

