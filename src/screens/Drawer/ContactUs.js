import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { View, Text, Image, TextInput, ScrollView, StyleSheet, Dimensions, Alert, ImageBackground } from "react-native";
import { Formik } from "formik";
import axios from "axios";
import { BASE_URL } from "../../extras/constants";
import { showToast } from "../../extras/utils";
import { GlobalButton, GlobalButtonInactive, TextWhite } from "../../components/reusables";
import { icons } from "../../utills/Icons";
import ContactIcons from "../../components/ContactIcons";

import * as Yup from "yup";
import styled from "styled-components";


const Input = styled(TextInput)`
background: #1C1C1E80;
color: white;
padding: 12px;
border-radius: 4px;
margin-bottom: 5px;
font-family:"Inter-Medium";
font-size:14px;
`

const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;

const ContactUs = () => {
  const navigation = useNavigation();
  const toEmail = useRef();
  const toMessage = useRef();

  const [loading, setLoading] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const showSnackBar = () => {
    setSnackbarVisible(true)

    setTimeout(() => {
      setSnackbarVisible(false)
    }, 2000);
  }

  const handleSubmit = ({ name, email, message }, { resetForm }) => {
    setIsSubmitting(true);
    setLoading(true)

    if(name && email && message){
      
    axios
      .post(`${BASE_URL}/contactUs`, { name, email, message })
      .then((res) => {
        setLoading(false)

        setIsSubmitting(false);

        Alert.alert("Message Sent", "We will get back in touch with you shortly");

        resetForm();
      })
      .catch((err) => {
        setIsSubmitting(false);
        showToast({
          type: "Error",
          text2: "Oops! Something went wrong.Please Try again later",
        });
      });
      
    }else{
      // // console.log("ERROR ");
    }
  };
  return (
    <ImageBackground source={icons.background_img} style={{height: '100%', }} >
    <ScrollView>
    <View
          style={{flex: 1,
            justifyContent: 'space-between'
          }}
        >
          <View style={[styles.opacityCardContainer, {margin: 20, marginBottom: 0, padding: 15, flex: 1,}]}  >
            
            <View style={{backgroundColor: 'rgba(28, 28, 30, 0.43)', marginBottom: 20, flex: 1, borderRadius: 10, alignItems: 'center', justifyContent:'center'}} >
              <Image source={icons.email_icon} style={{height: DeviceWidth*0.4, width: DeviceWidth*0.4,  margin: 20}} />
            </View>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              isSubmitting={true}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
              }) => (
                <View
                  style={{
                  }}
                >

                        <View >
                            <Input
                              style={[styles.inputText, touched.name && errors.name ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                                  placeholder="Name"
                                  value={values.name}
                                  onChangeText={handleChange("name")}
                                  placeholderTextColor="#7F7D82"
                                  returnKeyType="next"
                                  onSubmitEditing={() => {
                                    toEmail.current.focus();
                                  }}
                            />
                              {touched.name && errors.name ? (
                                  <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.name}</Text>
                                )
                              :
                              <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,fontFamily:"Inter-Medium"}} >Enter your name here</TextWhite>
                              }
                            
                          </View>

                          <View >
                            <Input
                              style={[styles.inputText, touched.email && errors.email ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                                  placeholder="Email"
                                  onChangeText={handleChange("email")}
                                  placeholderTextColor="#7F7D82"
                                  returnKeyType="next"
                                  onSubmitEditing={() => {
                                    toEmail.current.focus();
                                  }}
                                  value={values.email}
                                  autoCapitalize="none"
                                  ref={toEmail}
                            />
                              {touched.email && errors.email ? (
                                  <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.email}</Text>
                                )
                              :
                              <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,fontFamily:"Inter-Medium"}} >Enter your email here</TextWhite>
                              }
                            
                          </View>

                          <View >
                            <Input
                              style={[styles.inputText, {height: 150, paddingTop: 15}, touched.message && errors.message ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                                  placeholder="Send a message"
                                  onChangeText={handleChange("message")}
                                  placeholderTextColor="#7F7D82"
                                  returnKeyType="next"
                                  onSubmitEditing={() => {
                                    toEmail.current.focus();
                                  }}
                                  multiline={true}
                                  value={values.message}
                                  ref={toMessage}
                            />
                              {touched.message && errors.message ? (
                                  <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.message}</Text>
                                )
                              :
                              <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,fontFamily:"Inter-Medium"}} >Enter your message here</TextWhite>
                              }
                            
                          </View>

                  <View style={{}} >
                      {loading
                         ?
                         <GlobalButtonInactive
                            disabled={true}
                          ><TextWhite style={{fontFamily:"Inter-Bold",fontSize:16}} >LOADING. . .</TextWhite>
                          </GlobalButtonInactive>
                         :
                        <GlobalButton
                          onPress={handleSubmit}
                        ><TextWhite>SEND MESSAGE</TextWhite>
                      </GlobalButton>
                    }
                  </View> 

                  
                </View>
              )}
            </Formik>
            
          </View>

          <View>
            <ContactIcons iconStyle={{height: 30, width: 30, marginRight: 10}}  />
          </View>
        </View>

        
      </ScrollView>
    </ImageBackground>
  );
};

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter valid Email"),
    message:  Yup.string()
  .required("Message is Required")
});



const styles = StyleSheet.create({
  newsContainer: {
    backgroundColor: '#ffffff30',
    height: DeviceHeight-100,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between', 
    flex: 1,
  },

  inputbox: {
    padding: 15,
    marginBottom: 20,
    color: "white",
    backgroundColor: '#1C1C1E80',
    borderRadius: 5,
  },
  opacityCardContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    marginTop: 28,
  },
  opacityCard: {
      backgroundColor:"rgba(0, 1, 27, 0.2)",
      borderBottomEndRadius:8,
      borderBottomStartRadius:8,
      padding: 15,
  },
})

export default ContactUs;
