// src/App.js

import React, {Component} from 'react';

const config = require('./config.json');

class App extends Component {

   state = {

   }

    render () {
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Hello there</h5>
                    <h6 class="card-subtitle mb-2 text-muted">General Kenobi</h6>
                    <p class="card-text">this is your api key from config, {config.appid}</p>
                </div>
            </div>
        );
    }
}

export default App;