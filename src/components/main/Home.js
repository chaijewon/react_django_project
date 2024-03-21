import {Fragment,useState,useEffect} from "react";
import axios from "axios";
function Home(){
    const [fd,setFd]=useState([])
    const [rd,setRd]=useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/web/')
            .then(response=>{
                console.log(response.data)
                setFd(response.data.fd)
                setRd(response.data.rd)
            })
    }, []);
    return (
        <Fragment>
            <div className="wrapper row3">
                <div id="slider" className="clear">
                    <div className="flexslider basicslider">
                        <ul className="slides">
                            <li><a href="#"><img className="radius-10" src="/images/demo/slides/back1.jpg"
                                                 style={{"width": "978px", "height": "400px"}}/></a></li>
                            <li><a href="#"><img className="radius-10" src="/images/demo/slides/back2.jpg"
                                                 style={{"width": "978px", "height": "400px"}}/></a></li>
                            <li><a href="#"><img className="radius-10" src="/images/demo/slides/back3.jpg"
                                                 style={{"width": "978px", "height": "400px"}}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="wrapper row3">
                <main className="container clear">
                   <ul className="nospace group btmspace-80">
                        <li className="one_third first">
                            <article className="service"><i className="icon fa fa-ambulance"></i>
                                <h6 className="heading"><a href="#">날씨정보</a></h6>
                                <p></p>
                                <footer><a href="#">Read More &raquo;</a></footer>
                            </article>
                        </li>
                        <li className="one_third">
                            <article className="service"><i className="icon fa fa-h-square"></i>
                                <h6 className="heading"><a href="#">추천정보</a></h6>
                                <p></p>
                                <footer><a href="#">Read More &raquo;</a></footer>
                            </article>
                        </li>
                        <li className="one_third">
                            <article className="service"><i className="icon fa fa-hospital-o"></i>
                                <h6 className="heading"><a href="#">오늘의 뉴스</a></h6>
                                <p></p>
                                <footer><a href="#">Read More &raquo;</a></footer>
                            </article>
                        </li>
                    </ul>
                    <h2 className="sectiontitle">인기 레시피 Top12</h2>
                    <div className="flexslider carousel basiccarousel btmspace-80">
                        <ul className="slides">
                            {
                                rd && rd.map((r,key) =>
                                    <li key={key}>
                                        <figure><img className="radius-10 btmspace-10" src={r.poster}
                                                     title={r.title}/>
                                            <figcaption><a href="#">{r.chef}</a></figcaption>
                                        </figure>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <h2 className="sectiontitle">인기 맛집 Top12</h2>
                    <div className="flexslider carousel basiccarousel btmspace-80">
                        <ul className="slides">
                            {
                                fd && fd.map((f, key) =>
                                    <li key={key}>
                                        <figure><img className="radius-10 btmspace-10"
                                                     src={"http://www.menupan.com"+f.poster} />
                                            <figcaption><a href="#">{f.name}</a></figcaption>
                                        </figure>
                                    </li>
                                )
                            }


                        </ul>
                    </div>
                    <h2 className="sectiontitle">최신 방문 레시피/맛집</h2>
                    <ul className="nospace group">
                        <li className="one_half first">
                        <article><img className="imgl radius-10" src="/images/demo/100x100.gif" alt=""/>
                                <h6 className="heading"><a href="#">Lorem Ipsum Dolor</a></h6>
                                <p>Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet.</p>
                            </article>
                        </li>
                        <li className="one_half">
                            <article><img className="imgl radius-10" src="/images/demo/100x100.gif" alt=""/>
                                <h6 className="heading"><a href="#">Lorem Ipsum Dolor</a></h6>
                                <p>Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet.</p>
                            </article>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </main>
            </div>
        </Fragment>
    )
}

export default Home