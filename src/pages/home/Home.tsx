import { useState } from "react";
import Account from "../../components/account/Account";
import Kawaii from "../../components/kawaii/Kawaii";
import "./Home.css"

const Home = () => {
    const [accountValue, setAccountValue] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('');

    return (  
        <main>
            <Kawaii accountValue={accountValue} />
            <h1>SUPER BANK</h1>
            <Account accountValue={accountValue} setAccountValue={setAccountValue} inputValue={inputValue} setInputValue={setInputValue}/>
        </main>
    );
}

export default Home;