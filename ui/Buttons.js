import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

export const SubScreenHeaderButton = ({ name, viewMode, icon, onPress, style, imageStyle }) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: viewMode == name ? COLORS.secondary : null,
                height: 50,
                width: 50,
                borderRadius: 25,
                ...style
            }}
            onPress={() => onPress()}
        >
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 20,
                    height: 20,
                    tintColor: viewMode == name ? COLORS.white : COLORS.darkgray,
                    ...imageStyle
                }}
            />
        </TouchableOpacity>
    );
};

export const ExpenseSummaryButton = ({ item, index, selectedCategory, onPress }) => (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            height: 40,
            paddingHorizontal: SIZES.radius,
            borderRadius: 10,
            backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? item.color : COLORS.white
        }}
        onPress={() => {
            let categoryName = item.name
            onPress(categoryName)
        }}
        key={`expense-summary-${index}`}
    >
        {/* Name/Category */}
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View
                style={{
                    width: 20,
                    height: 20,
                    backgroundColor: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : item.color,
                    borderRadius: 5
                }}
            />

            <Text style={{ marginLeft: SIZES.base, color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.name}</Text>
        </View>

        {/* Expenses */}
        <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: (selectedCategory && selectedCategory.name == item.name) ? COLORS.white : COLORS.primary, ...FONTS.h3 }}>{item.y} USD - {item.label}</Text>
        </View>
    </TouchableOpacity>
);

export const CategoryButton = ({ item, index, onPress, styles }) => (
    <TouchableOpacity
        key={`category-${index}`}
        onPress={() => onPress(item)}
        style={{
            flexDirection: 'row',
            margin: '1%',
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderRadius: 5,
            backgroundColor: COLORS.white,
            minWidth: "48%",
            ...styles.shadow
        }}
    >
        <Image
            source={item.icon}
            style={{
                width: 20,
                height: 20,
                tintColor: item.color
            }}
        />
        <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
    </TouchableOpacity>
)