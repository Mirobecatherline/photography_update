// import './index.css';

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
<Router>
    <React.StrictMode>
		<App />
	</React.StrictMode>
</Router>
,document.querySelector("#root"))

