
import React, { useState, useEffect } from "react";


class Calc extends React.Component{
    banksArr = []
    constructor(props){
      super(props)
      this.state={
          posts:[],
          inputValue1: '',
          inputValue2: '',
          inputValue3: '',
          inputValue4: ''
        };
        
    }
    openByNAme = (name , minimumPayment, loan) => {
        fetch("http://localhost:9000/api/select/"+ name + "/" + minimumPayment + "/" + loan)
          .then(res => res.json())
          .then(posts => {this.setState({ posts })})
          .then(err => {
            console.log(err);
          });
          
    }
    Pow = (a, n) =>{
        for(var i=0;i++;i<=n){
            a *= a
        }
        return a
    }
    formulaCalc = (amountBorrowed, interestRate, monthCount) => {
        var m = (amountBorrowed*(interestRate/12)*(this.Pow((1+(interestRate/12), monthCount))))/((this.Pow((1+(interestRate/12), monthCount))) - 1)  
        return m;
    }

        
    render(){
        return(
            <div>
                 <div className="form">
                    <input placeholder="bank name" value={this.state.inputValue1} onChange={(e) => this.setState({ inputValue1: e.target.value })}></input>
                    <input placeholder="payment must be mor then minimum" value={this.state.inputValue2} onChange={(b) => this.setState({ inputValue2: b.target.value })}></input>
                    <input placeholder="loan must be less then maximum" value={this.state.inputValue3} onChange={(c) => this.setState({ inputValue3: c.target.value })}></input>
                    <button onClick={() => this.openByNAme(this.state.inputValue1, this.state.inputValue2, this.state.inputValue3)}>dddddd</button>
                 </div>
               {this.state.posts.map(post => (
                    <div className="Calculator">
                       <p>{this.formulaCalc(this.state.inputValue3, post.InterestRate, post.LoanTerms)}</p>
                    </div>
                ))}
            </div>
        )
    }
}  
export default Calc;