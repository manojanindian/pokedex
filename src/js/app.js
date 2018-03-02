import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store.js"

const root = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
    <h1>Pokemon</h1>
</Provider>, root);

