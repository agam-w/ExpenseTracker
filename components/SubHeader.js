import React from "react";
import { View } from "react-native";
import { SIZES } from "../constants";

const SubScreenHeader = ({ renderLeft, renderRight }) => {
    return (
        <View style={{ flexDirection: 'row', padding: SIZES.padding, justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Title */}
            {renderLeft()}

            {/* Sub Menu */}
            {renderRight()}
        </View>
    )
}

export default SubScreenHeader;