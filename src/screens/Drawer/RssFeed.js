import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview';
import colors from '../../constants/colors';


const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;

export default function RssFeed() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.PRIMARY_COLOR
        }}>
            <WebView
                originWhitelist={['*']}
                source={{
                    html: `
                    <html>
                        <head>
                            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"/>
                        </head>
                        <body style="background:#211134">
                            <div  >
                                <iframe width="100%" height=${DeviceHeight} src="https://rss.app/embed/v1/wall/tGTvTtKZhtlDFgnI" frameborder="0"></iframe>
                            </div>
                        </body>
                    </html>`
                }}
            />
        </View>
    )
}