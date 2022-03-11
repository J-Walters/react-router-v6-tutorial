import { useParams } from 'react-router-dom'
import { getInvoice } from '../data';

export default function Invoice() {
    //the key of the param on the params object is the same as the dynamic segment in the route path
    // :invoiceId -> params.invoiceId
    let params = useParams()
    //parseInt to change param to a string
    let invoice = getInvoice(parseInt(params.invoiceId, 10))
    return (<main style={{ padding: '1rem' }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
            {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
    </main>)
}