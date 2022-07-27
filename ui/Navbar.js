import React from "react"
import { View } from "react-native"
import { COLORS, SIZES } from "../constants"

export const NavBar = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 40,
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white,
            }}
        >
        </View>
    )
}