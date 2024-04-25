import { useState } from 'react';


function GetIn() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        if(e.target.type === 'email') {
            setEmail(value);
        }
        else if(e.target.type === 'text') {
            setName(value);
        }
        else{
            return;
        }
    }

    return(
        <div className="getIn">
            <h1>We'll wait for you, {name}</h1>
            <form>
            <input type="text" placeholder="Name" onChange={handleChange} value={name}/>
            <input type="email" placeholder="Email Address" onChange={handleChange} value={email}/>
            <input type="submit" value="Subscribe"/>
            </form>
        </div>
    )
}

export default GetIn;