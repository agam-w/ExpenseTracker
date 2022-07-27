import React, { useRef } from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Animated,
} from 'react-native';

import { COLORS, FONTS, SIZES, icons } from '../constants';
import { expensesData, pendingStatus } from "../constants/dummyData";
import { InputDate } from "../ui/Inputs";
import { getMonthString } from "../utils/dateFormatter";
import { compareWithPrevioustMonth, expenseOnSelectedMonthDisplay } from "../utils/expenseCalc";
import { NavBar } from "../ui/Navbar";
import ScreenHeader from "../components/Header";
import SubScreenHeader from "../components/SubHeader";
import { CategoryButton, ExpenseSummaryButton, SubScreenHeaderButton } from "../ui/Buttons";
import { DoughnutChart } from "../ui/Charts";
import { IncomingExpenseCard } from "../ui/Cards";

const Home = () => {
    const categoryListHeightAnimationValue = useRef(new Animated.Value(115)).current;

    const [date, setDate] = React.useState(new Date());
    const [showDate, setShowDate] = React.useState(false);
    const [expenses, setExpenses] = React.useState(expensesData);
    const [viewMode, setViewMode] = React.useState("chart");
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [showMoreToggle, setShowMoreToggle] = React.useState(false);

    const headerLeft = () => {
        return (
            <InputDate 
                date={date} 
                setDate={setDate} 
                open={showDate} 
                setOpen={(e) => setShowDate(e)}
                button={() => <SubScreenHeaderButton 
                    icon={icons.calendar} 
                    onPress={() => setShowDate(true)}
                    style={{backgroundColor: COLORS.lightGray}} 
                    imageStyle={{tintColor: COLORS.lightBlue}}
                />}
                
            />
        )
    };

    const headerRight = () => {
        return (
            <View style={{ marginLeft: SIZES.padding }}>
                <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>{`${getMonthString(date, 'short')}, ${date.getFullYear()}`}</Text>
                <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>{compareWithPrevioustMonth(expenses, date)}</Text>
            </View>
        )
    };

    const subHeaderLeft = () => {
        return (
            <View>
                <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>{viewMode==="chart"?"COMPLETED":"INCOMING"}</Text>
                <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{viewMode==="chart"?
                    expensesOnSelectedMonth().length:
                    pendingOnSelectedMonth().length} Categories
                </Text>
            </View>
        );
    };

    const subHeaderRight = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <SubScreenHeaderButton 
                    name="chart" 
                    viewMode={viewMode} 
                    icon={icons.chart} 
                    onPress={() => setViewMode("chart")} 
                />
                <SubScreenHeaderButton 
                    name="list" 
                    viewMode={viewMode} 
                    icon={icons.menu} 
                    onPress={() => setViewMode("list")} 
                    style={{marginLeft: SIZES.base}}
                />
            </View>
        );
    };

    const renderCategoryList = () => {
        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{ height: categoryListHeightAnimationValue, flex: 1, overflow: 1 }}>
                    <View style={{flexDirection: "row", flexWrap: "wrap",}}>
                        {expenses.map((item, index)=> CategoryButton({item, index, onPress: setSelectedCategory, styles }))}
                    </View>
                </Animated.View>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginVertical: SIZES.base,
                        justifyContent: 'center'
                    }}
                    onPress={() => {
                        if (showMoreToggle) {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 115,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        } else {
                            Animated.timing(categoryListHeightAnimationValue, {
                                toValue: 172.5,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        }

                        setShowMoreToggle(!showMoreToggle)
                    }}
                >
                    <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? "LESS" : "MORE"}</Text>
                    <Image
                        source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
                        style={{ marginLeft: 5, width: 15, height: 15, alignSelf: 'center' }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const renderIncomingExpensesTitle = (total) => {
        return (
            <View style={{ height: 80, backgroundColor: COLORS.lightGray2, padding: SIZES.padding }}>
                {/* Title */}
                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>INCOMING EXPENSES</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>{total} Total</Text>
            </View>
        )
    }

    const renderIncomingExpenses = () => {
        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        let incomingExpenses = allExpenses.filter(a => a.status == "P")

        return (
            <View>
                {renderIncomingExpensesTitle(incomingExpenses.length)}

                {
                    incomingExpenses.length > 0 &&
                    <FlatList
                        data={incomingExpenses}
                        renderItem={({item, index}) => IncomingExpenseCard({item, index, selectedCategory, styles})}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                }

                {
                    incomingExpenses.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 300 }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>
                    </View>
                }

            </View>

        )
    }

    const setSelectCategoryByName = (name) => {
        const category = expenses.filter(a => a.name == name)
        setSelectedCategory(category[0])
    }

    const expensesOnSelectedMonth = () => {
        const { data } = expenseOnSelectedMonthDisplay(expenses, date);
        return data;
    }

    const pendingOnSelectedMonth = () => {
        const { data } = expenseOnSelectedMonthDisplay(expenses, new Date(), pendingStatus);
        return data;
    }

    const renderExpenseSummary = () => {
        return (
            <View style={{ padding: SIZES.padding }}>
                {expensesOnSelectedMonth().map((item, index)=> ExpenseSummaryButton({item, index, selectedCategory, onPress: setSelectCategoryByName}))}
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {/* Nav bar section */}
            <NavBar />

            {/* Header section */}
            <ScreenHeader 
                title="My Expense" 
                subTitle="Summary (monthly)" 
                renderLeft={headerLeft}
                renderRight={headerRight}
            />

            {/* Category Header Section */}
            <SubScreenHeader 
                renderLeft={subHeaderLeft}
                renderRight={subHeaderRight}
            />

            {/* Content Section */}
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {
                    viewMode == "chart" &&
                    <View>
                        <DoughnutChart 
                            chartData={expensesOnSelectedMonth()} 
                            styles={styles} 
                            selectedCategory={selectedCategory} 
                            setSelectCategoryByName={setSelectCategoryByName} 
                        />
                        {renderExpenseSummary()}
                    </View>
                }
                {
                    viewMode == "list" &&
                    <View>
                        {renderCategoryList()}
                        {renderIncomingExpenses()}
                    </View>
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})

export default Home;