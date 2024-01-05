import {Component} from "react";
import axios from "axios";

interface ContactProps {
    data: any;
}

interface ContactState {
    email: string;
    subject: string;
    message: string;
}

export class Contact extends Component<ContactProps, ContactState> {

    private api: any;


    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }


    render() {
        return (
            <div className={"flex"}>
                {/*<h1 className={"text-center  text-blue-950 font-bold"}>This is Contact Component</h1>*/}
                    <div className={"h-auto pl-10 mx-auto"}>
                        <div className={"p-2"}>
                            <h2 className={"text-3xl text-green-900 text-center underline decoration-2"}>Contact Us</h2>

                            <p className={"pb-3 text-12px pt-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, saepe!</p>
                        </div>

                        <form className={"h-auto p-2 justify-center"}>
                            <div className={"pb-2"}>
                                <label className={"text-12px pl-20"} htmlFor={""}>Your Email : </label>
                                <input className={"float-right border-[2px] border-green-700"}
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleMessageInputOnChange}/>
                            </div>

                            <div className={"pb-2"}>
                                <label className={"text-12px pl-20"} htmlFor={""}>Your Subject : </label>
                                <input className={"float-right border-[2px] border-green-700"}
                                type="text"
                                name="subject"
                                value={this.state.subject}
                                onChange={this.handleMessageInputOnChange}/>
                            </div>

                            <div className={"pb-2"}>
                                <label className={"text-12px pl-20"} htmlFor={""}>Your Message : </label>
                                <textarea className={"float-right border-[2px] border-green-700"}
                                name="message"
                                value={this.state.message}
                                onChange={this.handleMessageInputOnChange}/>
                            </div>

                            <div className={"mt-2 pl-20"}>
                                <button type="button"
                                    className={"p-5 bg-green-900 text-[14px] mt-5 rounded-3xl text-white font-bold hover:bg-black"}
                                        onClick={this.onSendBtnClick}>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

            </div>
        );
    }

    // data bind part
    handleMessageInputOnChange(event: { target: {value: any; name: any;}}) {
        const target = event.target;
        const name = target.name; //name={""} name ekt adala input eka
        const value = target.value; // value={""} denata thina value eka

        // @ts-ignore
        this.setState({ // ex: email ekata email eke value eka bind krnwa, subject ekt sub eke value eke bind krnawa
            [name]: value
        });
    }

    // button click ekt event ekk liynw
    private onSendBtnClick = () => {
        try {
            this.api.post('/contact/submit', {
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            }).then((res: { data: any}) => {
                const jsonData = res.data;
                alert(jsonData);
            }).catch((error: any)=> {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
}