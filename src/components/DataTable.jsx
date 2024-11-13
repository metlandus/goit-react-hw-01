import React from 'react';
import './datatable.css'


function DataTable({ transactions }) {
    return (
        <table className='w-3/4 mx-auto border-2 border-black/80 zebra'>
            <thead className='bg-black/85 text-white text-xl font-bold'>
                <tr>
                    <th className='py-2 border-2 border-black'>Type</th>
                    <th className='py-2 border-2 border-black'>Amount</th>
                    <th className='py-2 border-2 border-black'>Currency</th>
                </tr>
            </thead>
            <tbody className='text-center text-lg font-medium'>
                {transactions.map((transaction, id) => (
                    <tr key={id} className='border-2 border-black'>
                        <td className='py-2 border-2 border-black'>{transaction.type}</td>
                        <td className='py-2 border-2 border-black'>{transaction.amount}</td>
                        <td className='py-2 border-2 border-black'>{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;
