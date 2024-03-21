import {Fragment} from "react";

function Header(){
    return (
        <Fragment>
            <div className="wrapper row1">
                <header id="header" className="clear">
                    <div id="logo" className="fl_left">
                        <h1><a href="/">Food And Recipe</a></h1>
                    </div>
                </header>
            </div>
            <div className="wrapper row2">
                <nav id="mainav" className="clear">
                    <ul className="clear">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a className="drop" href="#">맛집</a>
                            <ul>
                                <li><a href="/food/list">맛집 목록</a></li>
                                <li><a href="pages/full-width.html">맛집 검색</a></li>
                            </ul>
                        </li>
                        <li><a className="drop" href="#">레시피</a>
                            <ul>
                                <li><a href="pages/gallery.html">레시피</a></li>
                                <li><a href="pages/full-width.html">쉐프</a></li>
                                <li><a href="pages/full-width.html">레시피 검색</a></li>
                            </ul>
                        </li>
                        <li><a className="drop" href="#">스토어</a>
                            <ul>
                                <li><a href="pages/gallery.html">전체 상품</a></li>
                                <li><a href="pages/full-width.html">베스트 상품</a></li>
                                <li><a href="pages/full-width.html">신상품</a></li>
                                <li><a href="pages/full-width.html">특가 상품</a></li>
                            </ul>
                        </li>
                        <li><a href="#">범죄 예측(Pandas)</a></li>
                        <li><a href="#">추천(KNN)</a></li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}

export default Header