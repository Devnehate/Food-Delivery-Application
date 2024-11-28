/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import { useContext } from 'react';
import axios from 'axios';

const Verify = () => {
    const [serchParams, setserchParams] = useSearchParams();
    const success = serchParams.get("success");
    const orderId = serchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        const responce = await axios.post(url + "/api/order/verify", { success, orderId })
        if (responce.data.success) {
            navigate("/myorders");
        }
        else {
            navigate("/")
        }
    }

    useEffect(() => {
        verifyPayment();
    },[])


    return (
        <div className='verify'>
            <div className="spinner">

            </div>
        </div>
    )
}

export default Verify