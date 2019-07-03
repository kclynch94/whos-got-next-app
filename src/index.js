import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const ORGANIZATIONS = [
    {
        "id": 123,
        "name": "Phoenixville YMCA",
        "facilities":[
            {
                "name": "Gym 1",
                "courts": [
                    {
                        "id": "1a2a",
                        "name": "Court 1",
                        "activeGame": true,
                        "teams": [
                            {
                                "name": "Team 1",
                                "players": ["Mark","Tom"]
                            },
                            {
                                "name": "Team 2",
                                "players": ["Kevin","John","Tyler"]   
                            }
                        ]
                    }, 
                    {
                        "id": "1a2a",
                        "name": "Court 2",
                        "activeGame": true,
                        "teams": [
                            {
                                "name": "Team 1",
                                "players": ["Steve","Tom"]
                            },
                            {
                                "name": "Team 2",
                                "players": ["Eric","John","Tyler"]   
                            }
                        ]
                    }               
                ]
            },
            {
                "name": "Gym 2",
                "courts": [
                    {
                        "id": "1a2a",
                        "name": "Court 1",
                        "activeGame": true,
                        "teams": [
                            {
                                "name": "Team 1",
                                "players": ["Todd","Tom"]
                            },
                            {
                                "name": "Team 2",
                                "players": ["Matt","John","Tyler"]   
                            }
                        ]
                    }, 
                    {
                        "id": "1a2a",
                        "name": "Court 2",
                        "activeGame": true,
                        "teams": [
                            {
                                "name": "Team 1",
                                "players": ["Joe","Tom"]
                            },
                            {
                                "name": "Team 2",
                                "players": ["Sam","John","Tyler"]   
                            }
                        ]
                    }               
                ]
            }
        ]        
    }
]

ReactDOM.render(
    <BrowserRouter>
      <App organizations={ORGANIZATIONS}/>
    </BrowserRouter>, 
    document.getElementById('root')
 );