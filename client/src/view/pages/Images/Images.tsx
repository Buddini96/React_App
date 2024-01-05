import {Component} from "react";
import {Product} from "../../common/Product/Product";

export class Images extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            data:[],
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch('./product-data.json');
            const jsonData = await response.json();
            this.setState({data: jsonData})

        }catch (error){
            console.log("Error fetching data" , error)
        }
    }
    render() {
        // @ts-ignore

        return (
            <>
                <h1 className={"text-center text-green-900 font-bold"}>This is Image Component</h1>

            </>


        );
    }
}