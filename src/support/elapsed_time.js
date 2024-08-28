const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const calculateElapsedTime = (startMonthStr, startYear, endMonthStr, endYear) => {
    const startMonth = monthNames.indexOf(startMonthStr);
    const endMonth = monthNames.indexOf(endMonthStr);

    let years = endYear - startYear;
    let months = endMonth - startMonth;

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years: years, months: months };
};

export {monthNames, calculateElapsedTime}