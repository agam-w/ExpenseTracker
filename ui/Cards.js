import React from 'react';
import { Image, Text, View } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { getMonthString } from '../utils/dateFormatter';

export const IncomingExpenseCard = ({ item, index, selectedCategory, styles }) => {
    const renderDate = () => {
        const [date, month, year] = item.date.split('/');
        const newDateString = [month, date, year].join('/');
        const monthString = getMonthString(new Date(newDateString))
        return `${date} ${monthString}, ${year}`
    }

    return (
        <View 
            key={`incoming-expense-${index}`} 
            style={{
                width: 300,
                marginRight: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...styles.shadow
            }}
        >
            {/* Title */}
            <View style={{ flexDirection: 'row', padding: SIZES.padding, alignItems: 'center' }}>
                <View
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.lightGray,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.base
                    }}
                >
                    <Image
                        source={selectedCategory.icon}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: selectedCategory.color
                        }}
                    />
                </View>
    
                <Text style={{ ...FONTS.h3, color: selectedCategory.color, }}>{selectedCategory.name}</Text>
            </View>
    
            {/* Expense Description */}
            <View style={{ paddingHorizontal: SIZES.padding }}>
                {/* Title and description */}
                <Text style={{ ...FONTS.h2, }}>{item.title}</Text>
                <Text style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray }}>
                    {item.description}
                </Text>
    
                {/* Scheduled expense date */}
                <Text style={{ marginTop: SIZES.padding, ...FONTS.h3, }}>Scheduled on {renderDate()}</Text>
    
                {/* Location */}
                <Text style={{ marginTop: SIZES.padding, ...FONTS.h4, }}>Location</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={icons.pin}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.darkgray,
                            marginRight: 5
                        }}
                    />
                    <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.body4 }}>{item.location}</Text>
                </View>
            </View>
    
            {/* Price */}
            <View
                style={{
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomStartRadius: SIZES.radius,
                    borderBottomEndRadius: SIZES.radius,
                    backgroundColor: selectedCategory.color,
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{item.total.toFixed(2)} USD</Text>
            </View>
        </View>
    )
}