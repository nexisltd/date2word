import { toWords, toWordsOrdinal } from "number-to-words";
export const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
const dateConverter = (
    dateObject: Date | null,
    {
        isCapitalized = true,
        isDateFirst = true,
    }: { isCapitalized?: boolean; isDateFirst?: boolean }
) => {
    if (!dateObject) {
        dateObject = new Date();
    }
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
    const yearToString = (year: number) => {
        const leftHalf = Math.floor(year / 100);
        const rightHalf = year % 100;
        if (rightHalf < 10) {
            if (leftHalf % 10 === 0 && rightHalf === 0) {
                return toWords(leftHalf / 10) + " thousand";
            } else {
                return (
                    toWords(leftHalf / 10) + " thousand " + toWords(rightHalf)
                );
            }
        } else if (rightHalf === 0) {
            return toWords(leftHalf) + " hundred";
        } else {
            return (
                toWords(leftHalf) +
                " hundred " +
                toWords(rightHalf).replaceAll("-", " ")
            );
        }
    };
    const a = dateObject.getMonth()
    const month = monthNames[dateObject.getMonth()]?.toLowerCase();
    const date = toWordsOrdinal(dateObject.getDate());
    const year = yearToString(dateObject.getFullYear());
    let translatedDate = `${date} ${month}, ${year}`;
    if (!isDateFirst) {
        translatedDate = `${month} ${date}, ${year}`;
    }
    if (!isCapitalized) {
        return translatedDate;
    }
    const dateParts = translatedDate.split(" ");
    let fullDate = "";
    for (const key of dateParts) {
        fullDate = fullDate + capitalizeFirstLetter(key) + " ";
    }
    return fullDate;
};
export default dateConverter;
