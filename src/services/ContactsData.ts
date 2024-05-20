import {mockDataContacts} from "../data/mockData.ts";

const ContactsData = () => {
    const transformedData = Object.keys(mockDataContacts[0]).map(key => ({
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim(),
        flex: key === 'id' || key === 'age' ? 0 : 1,
        headerClassName: 'super-header'
    }));

    return [transformedData]
}
export default ContactsData;