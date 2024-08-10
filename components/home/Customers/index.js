"use client";
import { useState,useEffect } from "react";

const Customers = ({ alerts }) => {
    const [customers,setCustomers]=useState([])
        async function fetchCustomerData() {
            try {
              const response = await fetch('http://3.126.15.66:5000/customers/get');
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              console.log(data)
              return data;
            } catch (error) {
              console.error('Error fetching data:', error);
              return null;
            }
          }


      useEffect(() => {
        async function fetchData() {
          const data = await fetchCustomerData();
          if (data) {
            setCustomers(data.data);
          }
        }
        fetchData();
      }, []);
      

    return (
      <div className="flex justify-center items-center bg-gradient-to-b from-gray-200 to-gray-300 min-h-screen">
        <div className="stock-alert-table border border-gray-300 rounded-lg p-4 shadow-md bg-white w-70 h-30 mt-30">
            <h2 className="font-bold w-25 mt-3 ml-3 mb-3 pb-6 pt-4 flex justify-center text-blue-600">Customers</h2>
            <hr className="ml-0.1 mr-0.1 border-10 border-black"></hr>
            <ul>
            <table>
              <tbody>
                <tr>
                  <td className="font-bold w-25 pl-6 pr-10 pb-5 pt-3">Order ID</td>
                  <td className="font-bold w-25 pl-6 pr-10 pb-5 pt-3">Name</td>
                  <td className="font-bold w-25 pl-6 pr-10 pb-5 pt-3">Number</td>
                  <td className="font-bold w-25 pl-6 pr-10 pb-5 pt-3">State</td>
                  <td className="font-bold w-25 pl-6 pr-10 pb-5 pt-3">City</td>
                  <td className="font-bold w-25 pl-6 pr-10 pb-5 pt-3">TC</td>
                  <td className="font-bold w-25 pl-6 pr-10 pb-5 pt-3">Shop_id</td>
                </tr>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="w-40 pl-10 pr-10 pb-2">{customer.id}</td>
                <td className="w-40 pl-6 pr-10 pb-2">{customer.name}</td>
                <td className="w-40 pl-6 pr-10 pb-2">{customer.number}</td>
                <td className="w-40 pl-6 pr-10 pb-2">{customer.State}</td>
                <td className="w-40 pl-6 pr-10 pb-2">{customer.City}</td>
                <td className="w-40 pl-6 pr-10 pb-2">{customer.TC}</td>
                <td className="w-40 pl-10 pr-10 pb-2">{customer.Shop_id}</td>
              </tr>
              ))}
              </tbody>
            </table>
            </ul>


        </div>
        </div>
    );
};

export default Customers;