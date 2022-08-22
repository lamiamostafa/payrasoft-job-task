import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import address from '../../../images/location-pin-solid.svg';
import footer from '../../../images/footer.png';

const Footer = () => {
    return (
        <div className="w-100 mt-5 ">
            <div className="row footer-content pb-5 ">
                <div className="col-md-3">
                    <h1 className="mt-5 footer-title ">অনার্স বিভাগ সমূহের লিংক <hr /></h1>

                    <div>
                        <p>Dept. of CSE</p>
                        <hr />
                        <p>Dept. of BBA</p>
                        <hr />
                        <p>Dept. of Accounting</p>
                        <hr />
                        <p>Dept. of English</p>
                        <hr />
                        <p>Dept. of Bangla</p>
                        <hr />
                        <p>Dept. of Management</p>
                        <hr />
                    </div>

                </div>
                <div className="col-md-3">
                    <h1 className="mt-5 footer-title">শিক্ষার্থী লগইন লিংক <hr /></h1>

                    <div>
                        <p>MBA/MSC in CSE Student Login</p>
                        <hr />
                        <p>All Masters Student Login</p>
                        <hr />
                        <p>All Honors Student Login</p>
                        <hr />
                        <p>XII Class Student Login 2019-20</p>
                        <hr />
                        <p>XI Class Student Login 2020-21</p>
                        <hr />
                        <p>Dept. of Marketing</p>
                        <hr />
                    </div>
                </div>
                <div className="col-md-3">
                    <h1 className="mt-5 footer-title">শিক্ষার্থী নিবন্ধন লিংক <hr /></h1>

                    <div>
                        <p>MBA/MSC in CSE Admission</p>
                        <hr />
                        <p>All Masters Admission</p>
                        <hr />
                        <p>All Honors Admission</p>
                        <hr />
                        <p>XI Class Admission 2019-20</p>
                        <hr />
                        <p>XII Class Admission 2018-19</p>
                        <hr />
                        <p>Dept. of Economics</p>
                        <hr />
                    </div>
                </div>
                <div className="col-md-2">
                    <h1 className="mt-5 footer-title">যোগাযোগের ঠিকানা <hr /></h1>

                    <div>
                        <p ><img src={address} alt="" className="img-fluid size-contain" />ঠিকানা: Road No. 02, Dhanmondi R/A, Dhaka: 1205, Bangladesh</p>

                        <p>ফোন: +88-02-58610294</p>
                        <p>ফ্যাক্স: +88-02-9675529</p>
                        <p>dhakacollege1250@gmail.com</p>
                        <p>EIIN- 107975, NU Code- 6408</p>
                        <p>College Code: 1250</p>

                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-end mt-3">
                <p><span className="footer-end-title">Developed By :</span> <img src={footer} alt="" className="img-fluid footer-end" /></p>

            </div>

        </div>
    );
};

export default Footer;