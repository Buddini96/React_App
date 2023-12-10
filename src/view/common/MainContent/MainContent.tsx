import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {About} from "../../pages/about/About";
import {Home} from "../../pages/home/Home";
import {Contact} from "../../pages/contact/Contact";
import {Images} from "../../pages/images/Images";

export class MainContent extends Component {
    render() {
        return (
            <div className={"pt-72 pb-72 text-center text-4xl text-amber-600 bg-amber-100 mx-auto"}>
                {/*<h1 className={"text-center"}>This is Main Content</h1>*/}

                {/*<div className={"h-10 w-10 text-center text-2xl mx-auto p-10 bg-yellow-300 min-h-scree mx-auto mx-auto"}>*/}
                {/*/!*<div className={"h-20 w-10  text-center text-2xl pt-50 pb-50 bg-yellow-300 rotate-12 min-h-screen shadow-xl hover:shadow-red-600 !cursor-pointer mx-auto "}>*!/*/}
                {/*/!*<div className={"h-screen w-1/3 text-center text-2xl p-8 bg-yellow-600"}>*!/  /!*screen size height*!/*/}

                {/*    Width*/}
                {/*    /!*Height <br/>& <br/>Width*!/*/}
                {/*</div>*/}

                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/images" Component={Images}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>

            </div>

        );
    }
}