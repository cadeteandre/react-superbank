import { CreditCard } from 'react-kawaii';
import "./Kawaii.css";

interface IKawaiiProps {
    accountValue: number
}

const Kawaii: React.FC<IKawaiiProps> = (props) => {
    const Example = () => <CreditCard size={300} mood={props.accountValue < 0 ? (
        'sad'
    ): props.accountValue > 2000 && props.accountValue < 100000 ? (
        'blissful'
    ) : props.accountValue >= 100000 ? 'shocked' : 'happy'} color="#ffdab9" />;
    return (  
        <div className='kawaii'>
            {Example()}
        </div>
    );
}

export default Kawaii;