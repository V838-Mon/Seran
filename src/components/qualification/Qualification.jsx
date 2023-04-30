import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personel journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? "qualification_button qualification_active button-flex" : "qualification_button button-flex"}
                onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification_icon"></i>{''} 
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification_button qualification_active button-flex" : "qualification_button button-flex"}
                onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification_icon"></i>{''} 
                    Experience
                </div>
            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div className='qualification_title-l'>
                            <h3 className="qualification_title">Master of Arts</h3>
                            <span className="qualification_subtitle">
                                Arts & Cultural Management
                            </span>
                            <span className="qualification_subtitle">
                                King's College London - London
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i> 2020/9 - 2021/12
                            </div> 
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Bachelor of Science</h3>
                            <span className="qualification_subtitle">
                                Economics
                            </span>
                            <p></p>
                            <span className="qualification_subtitle">
                                University of Liverpool - Liverpool
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i> 2018/9 - 2020/7
                            </div> 
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div className='qualification_title-l'>
                            <h3 className="qualification_title">Bachelor of Science</h3>
                            <span className="qualification_subtitle">
                                Economics & Finance
                            </span>
                            <span className="qualification_subtitle">
                                Xi'an Jiaotong-Liverpool University - Suzhou
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i> 2016/9 - 2018/7
                            </div> 
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div className='qualification_title-l'>
                            <h3 className="qualification_title">Freelancer</h3>
                            <span className="qualification_subtitle">
                                Explore World
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i> 2022/1 - Present
                            </div> 
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Researcher</h3>
                            <span className="qualification_subtitle">
                                Tate Modern - London
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i> 2021/1 - 2021/5
                            </div> 
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div className='qualification_title-l'>
                            <h3 className="qualification_title">Project Management</h3>
                            <span className="qualification_subtitle">
                                OnemoreClass Network Technology Co.  - Suzhou
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i> 2016/12 - 2018/7
                            </div> 
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Freelence</h3>
                            <span className="qualification_subtitle">
                                Explore World
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calender-alt"></i> 2022/1 - Present
                            </div> 
                        </div>   
                    </div>                    */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification