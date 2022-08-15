import React, {Component} from "react";
import Helmet from "react-helmet";
import Navbar from "./Navbar";

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{padding: "20px", minHeight: "calc(100vh - 156px)"}}>
                    <Helmet>
                        <title>Not Found - 404</title>
                        <script type="text/javascript"
                                src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                                async></script>
                    </Helmet>
                    <div className={"hero con-mid"}>
                        <div className={"main-card ethpay-card con-mid"} style={{padding: "40px"}}>
                            <h2>404</h2>
                            <p>The page not found.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
