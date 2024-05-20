import {useQuery} from "@tanstack/react-query";
import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

interface Transaction {
    userId: number;
    id: number;
    title: string;
}

interface Props {
    limit: number
}

const UseTransactions = ({limit}: Props) => {
return useQuery<Transaction[]>({
    queryKey: ['transactions'],
    queryFn: () => apiClient.get(`/albums/?_start=0&_limit=${limit}`).then(res => res.data).catch(err => err)
})
}

export default UseTransactions;