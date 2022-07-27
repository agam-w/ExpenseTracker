const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
}

export const getMonthString = (date=new Date(), type='short') => {
    return date.toLocaleString('en-US', {
        month: type,
    });
}

export const getDateToStringFormat = (date=new Date(), format='ddmmyy', separator='/') => {
    let result = '';
    const year = date.getFullYear();
    const month = padTo2Digits(date.getMonth() + 1);
    const day = padTo2Digits(date.getDate());

    if (format.toLowerCase()==='yymmdd') {
        result = [year, month, day].join(separator);
    } else if (format.toLowerCase()==='mmddyy') {
        result = [month, day, year].join(separator);
    } else {
        result = [day, month, year].join(separator);
    }

    return result;
}

export const getFirstDayPreviousMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}