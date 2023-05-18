import './SuccessfulOrder.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export function SuccessfullOrder() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, [4000])
    }, [])
    return (
        <div className="background-container">
            <div className="succesful-container">

                <div className="successful-circle">
                    <FontAwesomeIcon className='check-icon' icon={faCheck} />
                </div>
                <p className="successful-check">Your order is aceppted. You will be redirected momentarily</p>
            </div>
        </div>

    )
}