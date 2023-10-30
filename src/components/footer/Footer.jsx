import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Seran</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">
                        About
                    </a>
                </li>

                <li>
                    <a href="#qualification" className="footer_link">
                        Qualification
                    </a>
                </li>

                <li>
                    <a href="#skills" className="footer_link">
                        Skills
                    </a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://space.bilibili.com/14797500?spm_id_from=333.1007.0.0" 
                className="footer_social-link" target='_blank'>
                    {/* 此处可改为 微博 */}
                    <i class="iconfont icon-bilibili-fill"></i>
                </a>

                {/* 此处可改为 bilibili */}
                <a href="" 
                className="footer_social-link" target='_blank'>
                    {/* 此处可改为bilibili */}
                    <i class="iconfont icon-Notion_w"></i>
                </a>
                
                <a href="https://github.com/V838-Mon" 
                className="footer_social-link" target='_blank'>
                    {/* 此处可改为 lofter */}
                    <i class="iconfont icon-github"></i>
                </a>
            </div>

            {/* 此处可以删除 */}
            {/* <span className='footer_copy'>
                &#169; Crypticalcoder. All rigths reserved
            </span> */}
        </div>
    </footer>
  )
}

export default Footer