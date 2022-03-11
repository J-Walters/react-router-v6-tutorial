import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
    let navigate = useNavigate();
    let location = useLocation();
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
        <button
            onClick={() => {
                deleteInvoice(invoice.number);
                navigate("/invoices" + location.search);
            }}
        >
            Delete
        </button>
    </main>)
}

