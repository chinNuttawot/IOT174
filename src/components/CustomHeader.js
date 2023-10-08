{/* 
    วิธีใช้
    import CustomHeader from '../components/CustomHeader';
     <CustomHeader
        background_Color={this.state.topPage}
        font_color={this.props.asset.colors.white}
        handleGoBack={this.back_setting}
        iconGoBack={'fas', 'arrow-left'}
        Open_Menu={this.save_classRoom}
        NameOpen_Menu={translate.t('Save')}
        title={translate.t('add_class_owner')}
    />
*/}
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
library.add(fab, faSquareCheck, faMugSaucer)
import {
    Platform,
    SafeAreaView,
    View,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { Component } from 'react';
import {
    Label,
    Card,
    CardItem,
    Textarea,
    Left,
    Right,
    Thumbnail,
    Body,
    Text,
} from 'native-base';

export default function CustomHeader(props) {
    return (
        <SafeAreaView style={{
            backgroundColor: props.mainColor != undefined ? props.mainColor.length > 2 ? props.mainColor[0] : props.mainColor[0] : '#4c669f',
        }}>
            <StatusBar
                backgroundColor={props.mainColor != undefined ? props.mainColor.length > 2 ? props.mainColor[0] : props.mainColor[0] : '#4c669f'}
                barStyle="light-content"
            />
            <LinearGradient colors={props.mainColor ? props.mainColor : ['#4c669f', '#3b5998', '#192f6a']}>
                    <Left>
                        {
                            props.goBack ?
                                <TouchableOpacity style={{ padding: 5 }} onPress={() => props.goBack()}>
                                    <AntDesign name={"left"} size={props.font_size} color={props.font_color} />
                                </TouchableOpacity> : null
                        }

                    </Left>
                    <View style={{ width: props.goBack ? "50%" : props.goto ? "80%" : "100%", alignItems: 'center', marginLeft: props.goBack && props.goto ? -25 : props.goBack ? -25 : 0 }}>
                        <Text style={{ fontSize: props.font_size, color: props.font_color }}>{props.title}</Text>
                    </View>
                    <Right>
                        {
                            props.goto ?
                                <TouchableOpacity style={{ padding: 5 }} onPress={() => props.goto()}>
                                    <AntDesign name={"plus"} size={props.font_size} color={props.font_color} />
                                </TouchableOpacity> : null
                        }
                    </Right>
            </LinearGradient>
        </SafeAreaView>
    );
}