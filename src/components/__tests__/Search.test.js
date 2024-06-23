import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store"
import Body from "../Body"
import { json } from "react-router-dom"
import {RESTAURANT_DATA} from "../../mocks/RestaurantFetchData";
import "@testing-library/jest-dom";
import Shimmer from "../Shimmer"
// create global fetch to resolve fetch error
global.fetch = jest.fn(()=>{
    Promise.resolve({
        json: Promise.resolve(RESTAURANT_DATA)
    })
})

test("Search  Results on Homepage", ()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    console.log(body);
})

// test("Shimmer", ()=>{
//     const body = render(
//         <StaticRouter>
//             <Provider store={store}>
//                 <Body/>
//             </Provider>
//         </StaticRouter>
//     )

//     const shimmer = body.getByTestId("shimmer-ui"); // if we get error shimmer-ui not found so got to the body page and change the tirnary operator condition because all card length is not 0 because we send a rList not fetch
//     expect(shimmer.children.length).toBe(10);
//     expect(shimmer).toBeInTheDocument();
//     console.log(shimmer);
// })

test("Search items", async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
//    await.waitFor(()=> expect(body.getByTestId("search-btn")));
    const searchBtn = body.getByTestId("search-btn");
    const search = body.getByTestId("search");  // if we get error shimmer-ui not found so got to the body page and change the tirnary operator condition because all card length is not 0 because we send a rList not fetch
    const resList = body.getByTestId("res-list");
    fireEvent.change(search,{
        target:{
            value:"Pizza",
        }
    });
    fireEvent.click(searchBtn)
    expect(resList.children.length).toBe(2);
    // expect(shimmer).toBeInTheDocument();
    // console.log(shimmer);
})