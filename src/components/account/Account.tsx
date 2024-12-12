import "./Account.css";

interface IAccountProps {
    accountValue: number,
    setAccountValue: React.Dispatch<React.SetStateAction<number>>
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const Account: React.FC<IAccountProps> = (props) => {

    const addValue = () => {
        props.setAccountValue(props.accountValue + Number(props.inputValue));
        props.setInputValue('');
    }
    const subValue = () => {
        props.setAccountValue(props.accountValue - Number(props.inputValue));
        props.setInputValue('');
    }
    return (  
        <section className="account">
            <h4>Dein Girokonto</h4>
            <h2>{props.accountValue} €</h2>
            <input value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)} type="number" placeholder="Gib einen Geldbetrag ein"/>
            <div className="account__buttons">
                <button onClick={addValue}>Einzahlen</button>
                <button onClick={subValue}>Auszahlen</button>
            </div>
        </section>
    );
}

export default Account;