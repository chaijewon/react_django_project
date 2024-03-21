import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
/*
             "food_list":fl,
             "curpage":int(curpage),
             "totalpage":int(totalpage),
             "startPage":int(startPage),
             "endPage":int(endPage),
             "range":range(int(startPage),int(endPage))
 */
function FoodList(){
    const [foodList,setFoodList]=useState([])
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)
    const [count,setCount]=useState(0)
    // curpage변경되면 다시 reload => return을 다시 수행
    // mounted =>
    useEffect(()=>{
        axios.get('http://localhost:8000/web/food/list/',{
            params:{
                page:curpage
            }
        }).then(res=>{
            console.log(res.data)
            setFoodList(res.data.food_list)
            setTotalpage(res.data.totalpage)
            setCurpage(res.data.curpage)
            setStartPage(res.data.startPage)
            setEndPage(res.data.endPage)
            setCount(res.data.count)
        })
    },[curpage]) //[]한번 수행 => 변수가 변경시만다 호출
    /*let row=[]
    if(startPage>1)
    {
        row.push(<li><a href="#">&laquo; Previous</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(curpage===i)
        {
            row.push(<li className="current"><a href="#">{i}</a></li>)
        } else {
            row.push(<li><a href="#">{i}</a></li>)
        }
    }
    if (endPage < totalpage) {
        row.push(<li><a href="#">Next &raquo;</a></li>)
    }*/
    const pageChange=(page)=>{
        setCurpage(page)
    }
    return (
        <div className="wrapper row3">
            <main className="container clear">
               <div className="content">
                  <div id="gallery">
                        <figure>
                            <header className="heading">맛집 목록</header>
                            <ul className="nospace clear">
                                {
                                    foodList && foodList.map((food, key) =>
                                        <li className={key%4===0?"one_quarter first":"one_quarter"} key={key}><a href="#"><img
                                            src={"http://www.menupan.com"+food.poster} title={food.name}/></a></li>
                                    )
                                }
                            </ul>
                            <figcaption></figcaption>
                        </figure>
                    </div>
                    <div style={{"height":"20px"}}></div>
                    <div className={"text-center"}>
                        <Pagination
                          itemsCountPerPage={20}
                          totalItemsCount={count}
                          pageRangeDisplayed={10}
                          prevPageText={"<"}
                          nextPageText={">"}
                          style={{"width":"100%"}}
                          onChange={pageChange}
                        />
                    </div>
                    </div>
                <div className="clear"></div>
            </main>
        </div>
    )
}
export default FoodList