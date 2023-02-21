import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

export const Colors = {
    themeColor: colorScheme == "light" ? "#262626" : "#F2F2F2",
    grey: "grey",
    blue: "#3797EF",
    royalBlue: '#4169e1',
    borderActive:  colorScheme == "light" ?'rgba(0,0,0,1)' : 'rgba(255,255,255,1)',
    borderInActive: colorScheme == "light" ?'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)',
    white: "white",
    themeGradientColor: colorScheme == "dark" ? ['#262626', '#262626'] : ['#F2F2F2', '#F2F2F2'],
    backgroundColor: colorScheme == "dark" ? "#262626" : '#F2F2F2',
    black: "black",
    
}
