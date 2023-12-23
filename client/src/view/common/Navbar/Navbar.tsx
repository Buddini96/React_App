import {Component} from "react";
import logo from '../../../images/logo.png';
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
        <div className={"p-4 bg-[#14532d] flex "}> {/* apply to Gradiant color   */}
            <h1 className={"text-2xl text-[#F3F8FF] pl-2 "}>Organic Shop</h1>
            <img className={"h-7 w-7 m-1.5 pt-0.1 "} src={logo} alt={''}></img>

            <ul className={"list-none ml-[830px] pt-2"}>
                <li className={"inline-block mr-3 text-[18px] text-white"}>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className={"inline-block mr-3 text-[18px] text-white"}>
                    <Link to={'/about'}>About</Link>
                </li>
                <li className={"inline-block mr-3 text-[18px] text-white"}>
                    <Link to={'/images'}>Images</Link>
                </li>
                <li className={"inline-block mr-3 text-[18px] text-white"}>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li className={"inline-block mr-3 text-[18px] text-white"}>
                    <Link to={'/ShoppingCart'}>MyCart</Link>
                </li>
            </ul>


            <button className="ml-500 text-[18px] text-white
                                   bg-[#15803d] pl-5 pr-5
                                   hover:text-black font-bold" >

                <Link to={'/login'}>Sign In</Link>

            </button>
        </div>
        );
    }

    onBtnClick = () => {
        alert("Button Clicked")
    }


}