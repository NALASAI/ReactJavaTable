import React, { useContext, useEffect, useState } from "react";

function Main(){
    return(
        <main>
            <section className = "MainContents" >
                <div id= "blog_Text" >
                    <ul id="t_list">
                        <li id="t_item">
                            <a href="/">
                                <div id="item_img">사진</div>
                                <div id="item_title">제목</div>
                                <div id="item_impo">
                                    <div>카테고리</div><br></br>
                                    <div>시간</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className = "login_sub_Mn" ></section>
        </main>
    );
}


export default Main;