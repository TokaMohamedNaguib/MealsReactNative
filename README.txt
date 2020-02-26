# to use custom fonts make react-native.config.js in the root folder then put this code in the file
module.exports={

project:{
  ios:{},
  android:{},
},
  assets:['./src/assets/fonts/']
}

 then make a fonts folder in your project and write its path in the previous file.
 then run react-native link




# to install react native vector icons
make react-native.config.js in the root folder then put this code in the file

module.exports = {
    assets: ['react-native-vector-icons']
};
And finally run;

yarn react-native link
