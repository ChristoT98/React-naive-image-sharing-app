import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker'

export default function App() {
    const [selectedImage, setSelectedImage] =React.useState(null);

    /*Request permission to access gallery*/
    let openImagePickerAsync = async ()=>{
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(permissionResult.granted === false){
            alert("Permission to access gallery is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true){
            return;
        }
        setSelectedImage({localUri: pickerResult.uri});
    };

    if(selectedImage !== null){
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri:selectedImage.localUri }}
                    style={styles.thumbnail}
                />
            </View>
        )
    }

  return (
    <View style={styles.container}>

        {/*Displaying the image in the app*/}
        {/*<Image source={logo} style={{ width: 305, height: 159 }} />*/}

        {/*Loading images by URL*/}
        {/*<Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} />*/}

        {/*Add inline styles to text tag*/}
        {/*<Text style={{color: '#888', fontSize: 18}}>
            To share a photo from your phone with a friend, just press the button below!
        </Text>*/}

        {/*Add internal styles to text tag*/}
        <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={ styles.logo } />

        {/*Add internal styles to text tag*/}
        <Text style={ styles.instructions }>
            To share a photo, just press the button below!
        </Text>

        {/*Add a simple button & basic inline styles*/}
        {/*<TouchableOpacity
            onPress={()=>alert('Hello World!')}
            style={{backgroundColor: 'blue'}}>
            <Text style={{ fontSize: 20, color: '#fff' }}>Choose a Photo</Text>
        </TouchableOpacity>*/}

        {/*Add a simple button & internal styles*/}
        {/*<TouchableOpacity
            onPress={()=>alert('Hello World!')}
            style={styles.button}>
            <Text style={styles.buttonText}>Choose a Photo</Text>
        </TouchableOpacity>*/}

        {/*Call image picker function when press button */}
        <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.button}>
            <Text style={styles.buttonText}>Choose a Photo</Text>
        </TouchableOpacity>

      {/*<StatusBar style="auto" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(44, 110, 160, 0.95)',
    alignItems: 'center',
    justifyContent: 'center',
  },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 15,
    },
    instructions:{
        color: '#222',
        fontSize: 18,
        marginHorizontal: 15,
        textAlign: 'center',
        marginBottom: 25,
    },
    button: {
        backgroundColor: 'rgba(0, 206, 209, 0.94)',
        padding: 15,
        borderRadius: 5,

    },
    buttonText : {
      fontSize: 20,
        color: '#4c4c4f',
    },
    thumbnail: {
      width: 300,
        height: 300,
        resizeMode: "contain",
    },
});
