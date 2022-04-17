/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { View, Text, Image, ScrollView, TextInput, StyleSheet, Button } from 'react-native';
 
 const App = () => {
   const [keyword, setKeyword] = React.useState("dog");
   const [url, setUrl] = React.useState("https://source.unsplash.com/random?" + keyword);

  function getRandomImage() {
    fetch("https://source.unsplash.com/random?" + keyword)
    .then((res) => {
      setUrl(res.url)
    });
  };
   
   return (
     <ScrollView style={styles.container}>
       <Text style={styles.title} >Générateur d'images fun</Text>
       <View>
         <Image
           source={{
             uri: url,
           }}
           style={styles.image}
         />
       </View>
       <Button title="Nouvelle image fun" onPress={getRandomImage} style={styles.button}/>
       <TextInput
         style={{
           height: 40,
           borderColor: 'gray',
           borderWidth: 1
         }}
         textAlign="center"
         onChangeText={setKeyword}
         value={keyword}
       />
     </ScrollView>
   );
 }

 const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "stretch"
  }
});
 
 export default App;