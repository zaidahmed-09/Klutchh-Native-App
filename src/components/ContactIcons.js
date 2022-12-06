import React from 'react'
import { icons } from '../utills/Icons';
import {Text, View, Image,  TouchableOpacity, Linking,} from 'react-native'

const ContactIcons = ({iconStyle}) => {
    return (
        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center'}} >
          <View
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  paddingBottom: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL("https://www.facebook.com/klutchh.in");
                  }}
                  style={{
                    marginRight: 3,
                  }}
                >
                  <Image source={icons.Facebook} style={iconStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL("https://www.instagram.com/klutchh.in");
                  }}
                  style={{
                    marginRight: 3,
                  }}
                >
                  <Image source={icons.Instagram} style={iconStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL("https://twitter.com/Klutchhesports");
                  }}
                  style={{
                    marginRight: 3,
                  }}
                >
                  <Image source={icons.Twitter} style={iconStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL("https://www.linkedin.com/company/78692832/admin/");
                  }}
                  style={{
                    marginRight: 3,
                  }}
                >
                  <Image source={icons.Linkedin} style={iconStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL("https://discord.gg/8a9TtG6p");
                  }}
                  style={{
                    marginRight: 3,
                  }}
                >
                  <Image source={icons.Discord} style={iconStyle} />
                </TouchableOpacity>
          </View>
      </View>
    )
}

export default ContactIcons