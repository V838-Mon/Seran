import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
        <i class='iconfont icon-message-multi-language about_icon'></i>

            <h3 className="about_title_1">
                {/* 此处可改为 个人经历 */}
                Working Language
            </h3>
            <span className="about_subtitle">
                {/* 此处可改为 个人经历副标题 */}
                CN/EN
            </span>
        </div>

        <div className="about_box">
        <i class='bx bx-briefcase-alt about_icon' ></i>

            <h3 className="about_title">
                {/* 此处可改为 个人经历 */}
                Main fields
            </h3>
            <span className="about_subtitle">
                {/* 此处可改为 个人经历副标题 */}
                Creative Industry
            </span>
        </div>

        <div className="about_box">
        <i class='bx bx-award about_icon' ></i>

            <h3 className="about_title">
                {/* 此处可改为 个人经历 */}
                Scrum
            </h3>
            <span className="about_subtitle">
                {/* 此处可改为 个人经历副标题 */}
                PSM I
            </span>
            <p className="about_subtitle">
                {/* 此处可改为 个人经历副标题 */}
                PSM II
            </p>
        </div>
    </div>
  )
}

export default Info