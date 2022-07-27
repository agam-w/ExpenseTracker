import { confirmStatus } from "../constants/dummyData";
import { getDateToStringFormat, getFirstDayPreviousMonth } from "./dateFormatter";

export const expenseOnSelectedMonthDisplay = (expenses=[], date=new Date(), status=confirmStatus) => {
    const dateString = getDateToStringFormat(date);
    const [selectedDay, selectedMonth, selectedYear] = dateString.split('/');

    let chartData = expenses.map((item) => {
        const confirmExpenses = item.expenses.filter(a => a.status == status
            && a.date.split('/')[1]===selectedMonth 
            && a.date.split('/')[2]===selectedYear)
        const total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)

        return {
            name: item.name,
            y: total,
            expenseCount: confirmExpenses.length,
            icon: item.icon,
            color: item.color,
            id: item.id
        }
    })

    // filter out categories with no data/expenses
    let filterChartData = chartData.filter(a => a.y > 0)

    // Calculate the total expenses
    const totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

    // Calculate percentage and repopulate chart data
    const data =  filterChartData.map((item) => {
        const percentage = (item.y / totalExpense * 100).toFixed(0)
        return {
            label: `${percentage}%`,
            y: Number(item.y),
            expenseCount: item.expenseCount,
            icon: item.icon,
            color: item.color,
            name: item.name,
            id: item.id
        }
    })

    return {
        data,
        totalExpense
    }
}

export const compareWithPrevioustMonth = (expenses=[], date=new Date()) => {
    const datePreviousMonth = getFirstDayPreviousMonth(date);
    
    const { totalExpense: currentTotal  } = expenseOnSelectedMonthDisplay(expenses, date);
    const { totalExpense: previousTotal } = expenseOnSelectedMonthDisplay(expenses, datePreviousMonth);

    // Return no expense if total not available
    if (!currentTotal) return 'no expense for this month';
    if (!previousTotal) return 'no expense for last month';

    // Generate message to render
    let message = 'same with last month';
    const divider = currentTotal>previousTotal ? currentTotal : previousTotal;
    const percentage = Math.round(Math.abs(currentTotal-previousTotal)/divider*100);

    if (currentTotal>previousTotal) {
        message = `${percentage}% more than last month`
    } else if ((currentTotal<previousTotal)) {
        message = `${percentage}% less than last month`
    }
    
    return message;
}