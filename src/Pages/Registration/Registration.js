import React from 'react';
import './Registration.css'

const Registration = () => {
    return (
        <div>
            <h1 className="title">Online Registration form</h1>
            <div className="content">
                <p>Already Signed up? Click <span className="login-title">Login </span> to login your account.</p>
                <p className="title-body">SSC and HSC Information</p>
                <form action="">
                    <div className="row">
                        <div className="col-md-2 " >
                            <select placeholder="Select SSC Group" name="ssc-group" id="ssc-group" className="input-field my-2 col-md-12">
                                <option value="">Select SSC Group</option>
                                <option value="">Science</option>
                                <option value="">Business Studies</option>
                                <option value="">Huminities</option>
                            </select>

                            <select placeholder="Select SSC Board" name="ssc-board" id="ssc-board" className="input-field my-2 col-md-12">
                                <option value="">Select SSC Board</option>
                                <option value="">Chittagong</option>
                                <option value="">Comilla</option>
                                <option value="">Dhaka</option>
                                <option value="">Dinajpur</option>
                                <option value="">Jessore</option>
                                <option value="">Mymensingh</option>
                                <option value="">Rajshahi</option>
                                <option value="">Sylhet</option>
                                <option value="">Madrashah</option>
                                <option value="">Technical</option>
                                <option value="">DIBS(Dhaka)</option>
                                <option value="">BOU(Bangladesh Open University)</option>
                            </select>
                            <select placeholder="Select HSC Board" name="Hsc-board" id="hsc-board" className="input-field my-2 col-md-12">
                                <option value="">Select HSC Board</option>
                                <option value="">Barisal</option>
                                <option value="">Chittagong</option>
                                <option value="">Comilla</option>
                                <option value="">Dhaka</option>
                                <option value="">Dinajpur</option>
                                <option value="">Jessore</option>
                                <option value="">Rajshahi</option>
                                <option value="">Sylhet</option>
                                <option value="">Mymensingh</option>
                                <option value="">Madrashah</option>
                                <option value="">Technical</option>
                                <option value="">DIBS(Dhaka)</option>

                            </select>

                            <select name=" religion" id="religion" placeholder="Religion" className="input-field col-md-12 my-2">
                                <option value="">Religion</option>
                                <option value="">ISLAM</option>
                                <option value="">BUDDHISM</option>
                                <option value="">CHRISTIANITY</option>
                                <option value="">HINDUISM</option>
                                <option value="">JAINISM</option>
                                <option value="">Jessore</option>
                                <option value="">JUDAISM</option>
                                <option value="">OTHERS</option>
                                <option value="">SHIKHISM</option>
                            </select>

                        </div>
                        <div className="col-md-3 ms-5">
                            <input className="input-field col-md-12 my-2" type="text" name="text" id="" placeholder="Educational Institute Name" />

                            <select name="ssc-year" id="ssc-year" className="input-field col-md-12 my-2" placeholder="Select SSC Year">
                                <option value="">Select SSC Year</option>
                                <option value="">2022</option>
                                <option value="">2021</option>
                                <option value="">2020</option>
                                <option value="">2019</option>
                                <option value="">2018</option>
                                <option value="">2017</option>
                                <option value="">2016</option>
                                <option value="">2015</option>
                                <option value="">2014</option>
                                <option value="">2013</option>
                                <option value="">2012</option>
                                <option value="">2011</option>
                                <option value="">2010</option>
                                <option value="">2009</option>
                                <option value="">2008</option>
                                <option value="">2007</option>
                                <option value="">2006</option>
                                <option value="">2005</option>
                                <option value="">2004</option>
                                <option value="">2003</option>
                                <option value="">2002</option>
                                <option value="">2001</option>
                                <option value="">2000</option>


                            </select>
                            <select name="hsc-year" id="hsc-year" className="input-field col-md-12 my-2" placeholder="HSC Passing Year">
                                <option value="">HSC Passing Year</option>
                                <option value="">2022</option>
                                <option value="">2021</option>
                                <option value="">2020</option>
                                <option value="">2019</option>
                                <option value="">2018</option>
                                <option value="">2017</option>
                                <option value="">2016</option>
                                <option value="">2015</option>
                                <option value="">2014</option>
                                <option value="">2013</option>
                                <option value="">2012</option>
                                <option value="">2011</option>
                                <option value="">2010</option>
                                <option value="">2009</option>
                                <option value="">2008</option>
                                <option value="">2007</option>
                                <option value="">2006</option>
                                <option value="">2005</option>
                                <option value="">2004</option>
                                <option value="">2003</option>
                                <option value="">2002</option>
                                <option value="">2001</option>
                                <option value="">2000</option>


                            </select>
                            <select placeholder="Home District" name="home-district" id="home-district" className="input-field my-2 col-md-12">
                                <option value="">Home District</option>
                                <option value="">BAGERHAT</option>
                                <option value="">BANDARBAN</option>
                                <option value="">BARGUNA</option>
                                <option value="">BARISAL</option>
                                <option value="">BHOLA</option>
                                <option value="">BOGRA</option>
                                <option value="">BRAHMANBARIA</option>
                                <option value="">CHANDPUR</option>
                                <option value="">CHAPAINAWABGANJ</option>
                                <option value="">CHITTAGONG</option>
                                <option value="">CHUADANGA</option>
                                <option value="">COMILLA</option>
                                <option value="">COXS BAZAR</option>
                                <option value="">DHAKA</option>
                                <option value="">DINAJPUR</option>
                                <option value="">FARIDPUR</option>
                                <option value="">FENI</option>
                                <option value="">GAIBANDHA</option>
                                <option value="">GAZIPUR</option>
                                <option value="">GOPLAGANJ</option>
                                <option value="">HOBIGANJ</option>
                                <option value="">JAMALPUR</option>
                                <option value="">JESSORE</option>
                                <option value="">JHALAKATI</option>
                                <option value="">JHENAIDAH</option>
                                <option value="">JOYPURHAT</option>
                                <option value="">KHAGRACHARI</option>
                                <option value="">KHULNA</option>
                                <option value="">JHALAKATI</option>
                                <option value="">JHENAIDAH</option>
                                <option value="">JOYPURHAT</option>
                                <option value="">KHAGRACHURI</option>
                                <option value="">KHULNA</option>
                                <option value="">KISHOREGANJ</option>
                                <option value="">KURIGRAM</option>
                                <option value="">KUSHTIA</option>
                                <option value="">LAKHSMIPUT</option>
                                <option value="">LALMONIRHAT</option>
                                <option value="">MADARIPUR</option>
                                <option value="">MARGURA</option>
                                <option value="">MANIKGANJ</option>
                                <option value="">MOULVIBAZAR</option>
                                <option value="">MUNSHIGANJ</option>
                                <option value="">MYMENSINGH</option>
                                <option value="">NAOGAON</option>
                                <option value="">NARAIL</option>
                                <option value="">NARSINGDI</option>
                                <option value="">NATORE</option>
                                <option value="">NATROKONA</option>
                                <option value="">NILPHAMARI</option>
                                <option value="">NOAKHALI</option>
                                <option value="">PABNA</option>
                                <option value="">PANCHAGARH</option>
                                <option value="">PIROJPUR</option>
                                <option value="">RAJBARI</option>
                                <option value="">RAJSHAHI</option>
                                <option value="">RANGAMATI</option>
                                <option value="">RANGPUR</option>
                                <option value="">SATKHIRA</option>
                                <option value="">SHARIATPUR</option>
                                <option value="">SHERPUR</option>
                                <option value="">SIRAJGONJ</option>
                                <option value="">SONAMGONJ</option>
                                <option value="">TANGAIL</option>
                                <option value="">THAKURGAON</option>
                            </select>
                        </div>
                        <div className="col-md-3 me-5">
                            <input name="" id="" placeholder="SSC GPA (চতুর্থ বিষয় ছাড়া)" className="input-field my-2 col-md-12" />
                            <input type="text" name="" id="" placeholder="SSC GPA (চতুর্থ বিষয়সহ)" className="input-field my-2 col-md-12" />
                            <input type="text" name="" id="" placeholder="HSC GPA " className="input-field my-2 col-md-12" />
                            <select placeholder="HSC Group" name="hsc-group" id="hsc-group" className="input-field my-2 col-md-12">
                                <option value="">HSC Group</option>
                                <option value="">Science</option>
                                <option value="">Business Studies</option>
                                <option value="">Huminities</option>
                                <option value="">None</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <input type="text" name="" id="" placeholder="SSC Roll No" className="input-field my-2 col-md-12" />
                            <input type="text" name="" id="" placeholder="SSC Registration No" className="input-field my-2 col-md-12" />
                            <input type="text" name="" id="" placeholder="HSC Roll No" className="input-field my-2 col-md-12" />
                        </div>
                    </div>
                    <h1 class="student-title">Student Information</h1>
                </form>
            </div >

        </div >
    );
};

export default Registration;