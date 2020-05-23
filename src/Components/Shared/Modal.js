import React from 'react';
import ActionButton from "./ActionButton";
import {connect} from 'react-redux';
import {buyPremiumPlan} from "../../actions/userAction";

const Modal = (props) => {
    const {handleClose, show, children, buyPremiumPlan, user} = props;
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const subscriptionHandler = () => {
        buyPremiumPlan(user.user.id);
        handleClose();
    };

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-main__image">
                    <p>Purchase premium subscription for 4.99e per month and get full access to our wide-variety of
                        shows</p>
                </div>
                <div className="modal-main__form">
                    <h3>Billing Info</h3>
                    <form className="form__card" onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" name="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Card Number</label>
                            <input type="text" name="email"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="">Expiration</label>
                                <input type="text" name="password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">CVV</label>
                                <input type="text" name="password"/>
                            </div>
                        </div>
                        <div className="form-footer">
                            <div className="register-page__button">
                                <ActionButton text='Buy' onclick={subscriptionHandler}/>
                            </div>
                            <div className="register-page__button">
                                <ActionButton text='Cancel' onclick={handleClose}/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default connect(null, {buyPremiumPlan})(Modal);