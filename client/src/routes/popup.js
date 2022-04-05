import React, {useState} from "react";
import Banks from "./banks" 


const Popup = (props) => {
    const submitVal = () => {
        const bankD = {
            'BankName' : bankName,
            'InterestRate':interestRate,
            'MaximumLoan':maximumLoan,
            'MinimumDownPayment':minimumDownPayment,
            'LoanTerms':loanTerms
        }
        if(props.checkOf == false){
            addBAnk(bankD)
        }else{
            editBank(bankD, props.idOfBank)
        }
    }
    const addBAnk = (bankD) =>{
        fetch("http://localhost:9000/api/set/" + bankD["InterestRate"] + "/" +  bankD["MaximumLoan"] + "/"  + bankD["MinimumDownPayment"] + "/"  + bankD["LoanTerms"] + "/"  + bankD["BankName"])
        setTimeout(function(){
            window.location.reload(false);
        },400)
    }
    const editBank = (bankD, id) =>{
        fetch("http://localhost:9000/api/edit/"+ id +"/" + bankD["InterestRate"] + "/" +  bankD["MaximumLoan"] + "/"  + bankD["MinimumDownPayment"] + "/"  + bankD["LoanTerms"] + "/"  + bankD["BankName"])
        setTimeout(function(){
            window.location.reload(false);
        },400)
    }


    const [bankName, setBankName] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [maximumLoan, setmMximumLoan] = useState('');
    const [minimumDownPayment, setMinimumDownPayment] = useState('');
    const [loanTerms, setLoanTerms] = useState('');
    return (
        <div className="popup-box">
        <div className="box">
            
            <button onClick={props.close}>X</button>
            <div className="form">
                <input type="text" placeholder="Bank name" onChange={e => setBankName(e.target.value)} />
                <input type="text" placeholder="Interest Rate in %" onChange={e => setInterestRate(e.target.value)} />
                <input type="text" placeholder="Maximum loan" onChange={e => setmMximumLoan(e.target.value)} />
                <input type="text" placeholder="minimum down payment in %" onChange={e => setMinimumDownPayment(e.target.value)} />
                <input type="text" placeholder="Loan terms" onChange={e => setLoanTerms(e.target.value)} />
                <button onClick={submitVal}>Submit</button>
            </div>
        </div>
        </div>
    );
};
export default Popup;