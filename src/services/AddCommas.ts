export default function AddCommas(number: number) {
    // Convert number to string
    let strNumber = number.toString();

    // Use regular expression to add commas
    strNumber = strNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return strNumber;
}
