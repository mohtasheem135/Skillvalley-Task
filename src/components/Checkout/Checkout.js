import React from 'react';
import "./checkout.css";
import img from "../images/bag_1.png";
import img1 from "../images/ticket_1.png";

const Checkout = () => {
    return (
        <div>
            <div className="main-container">
                <div className="tabs">
                    <p className="tabs-text-bold">Delivery Address<i class="fas fa-chevron-right"></i></p>
                    <p className="tabs-text">Please Choose destination address</p>
                </div>
                <div className="tabs">
                    <p className="tabs-text-bold">Dropship
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </p>
                </div>
                <div className="tabs">
                    <p className="tabs-text-bold">Shipping Option<i class="fas fa-chevron-right"></i></p>
                    <p className="tabs-text">Please Choose your shipping method.</p>
                </div>
                <div className="tabs">
                    <p className="tabs-text-bold">Payment Option<i class="fas fa-chevron-right"></i></p>
                    <p className="tabs-text">Please Choose your payment method.</p>
                </div>
                <div className="tabs">
                    <p className="tabs-text-bold">Order Detail</p>
                    <img src={img} className="img" /> <p className="tabs-bag-text-1">ORIGNAL XYZONE BRAND TR1255</p>
                    <p className="tabs-bag-text-2">Variant : RED, 40</p>
                    <p className="tabs-bag-text-3">1 PCS (1.00gr) @ <p className="tabs-bag-text-4">Rp. 100.000</p></p>
                    <div className="input-container-1">
                        <input className="input-1" placeholder="Optional message here" type="text" />
                    </div>

                    <img src={img} className="img" /> <p className="tabs-bag-text-1">ORIGNAL XYZONE BRAND TR1255</p>
                    <p className="tabs-bag-text-2">Variant : RED, 40</p>
                    <p className="tabs-bag-text-3">1 PCS (1.00gr) @ <p className="tabs-bag-text-4">Rp. 100.000</p></p>
                    <div className="input-container-1">
                        <input className="input-1" placeholder="Optional message here" type="text" />
                    </div>
                </div>
                <div className="tabs">
                    <div className="input-container-2">
                        <img src={img1} className="img-1" /><input className="input-2" placeholder="Voucher Code" type="text" />
                        <button className="apply-btn">Apply</button>
                    </div>
                    <hr className="line" />
                </div>

                <div className="tabs">
                    <table className="table">
                        <tr className="item-list">
                            <td>Total items</td>
                            <td>Total Weight</td>
                            <td>Total Order</td>
                            <td>Voucher</td>
                            <td>Shipping Cost</td>
                            <td>Grand Total</td>
                        </tr>
                        <tr className="item-list">
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 Item</td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.2000 Gram</td>
                            <td>Rp.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;360.000</td>
                            <td>Rp.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className="tabs-bag-text-5">0</p></td>
                            <td>Rp.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</td>
                            <td><p className="tabs-bag-text-6">Rp.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;360.000</p></td>
                        </tr>
                    </table>
                </div>

                <h3 className="payment-confirm">With Payment, I agree with terms and conditions</h3>
                <div className="pay-btn-container">
                <button className="pay-btn">FINISH</button>
                </div>


            </div>
        </div>
    )
}

export default Checkout
