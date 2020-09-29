import React from "react";
import { Text } from "react-native";

import { FONT_FAMILIES } from "../styles/fonts";


export const CustomText = ({children,style,weight, ...rest}) => {
return (
<Text {...rest} style={[{fontFamily:FONT_FAMILIES[weight] || FONT_FAMILIES.regular},style]}>
    {children}
</Text>
)
};