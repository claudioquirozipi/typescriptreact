import * as React from 'react';
import axios from 'axios';

const App = () => {

    axios.post('/api/resgister_user', {
        "name": "rafael",
        "email": "ts@ts.ts",
        "phone": "999998419",
        "company": "rafa sac",
        "password": "1234"
    })
        .then(({data}) => {
            console.log(data)
        });

    return (
        <div>
            <h1>Hola mundo 2</h1>
        </div>
    );
}

export default App;
