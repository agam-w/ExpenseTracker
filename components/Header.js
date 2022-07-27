import React from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const ScreenHeader = ({ title, subTitle, renderLeft, renderRight }) => {
    return (
        <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor: COLORS.white }}>
            <View>
                <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>{title}</Text>
                <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>{subTitle}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
                {renderLeft()}
                {renderRight()}
            </View>
        </View>
    )
};

export default ScreenHeader;