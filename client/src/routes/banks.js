import Popup from "./popup.js";
import React, {useState} from 'react';

var idi = 0;
var checkOf = false;
class Banks extends React.Component{
    banksArr = []
    constructor(props){
      super(props)
      this.state={posts:[]}
    }
    callApi() {
        fetch("http://localhost:9000/api/pool")
          .then(res => res.json())
          .then(posts => {this.setState({ posts })})
          .then(err => {
            console.log(err);
          });
    }
    deleteBank = (id) =>{
        fetch("http://localhost:9000/api/delete/"+id)
        setTimeout(function(){
            window.location.reload(false);
        },400)

        id = -1;
    }
    componentWillMount(){
        this.callApi()
    }
    state = {opened: false,};
    open = () => {this.setState({opened: true});};
    openForEdit = () =>{
        this.open()
        checkOf = false;
    }

    close = () => {this.setState({opened: false});};
    editBank = (idSet) =>{
        checkOf = true;
        this.open()
        idi = idSet
    }
    addBank = () =>{
        checkOf = false;
        this.open()
        
    }
    render(){
        return(
            <div>
                <div className="buttonAddDiv">
                    <button className='addButton' onClick={this.addBank}>Add bank</button>
                </div>
                {this.state.opened && <Popup close={this.close} idOfBank={idi} checkOf={checkOf} callApi={this.callApi}>hello, world!!</Popup>}
                {this.state.posts.map(post => (
                    <div className="bankInfo">
                        <div className="verticalBankView">
                            <div className="bankNameDiv">
                                <h3>{post.BankName}</h3>
                            </div>
                            <div class="detailsBank">
                                <div className="moreDetails">
                                    <p>InterestRate:  {post.InterestRate}</p>
                                    <p>MaximumLoan:  {post.MaximumLoan}</p>
                                </div>
                                <div className="moreDetails">
                                    <p>MinimumDownPayment:  {post.MinimumDownPayment}</p>
                                    <p>LoanTerms:  {post.LoanTerms}</p>
                                </div>
                            </div>
                        </div>
                        <div className="buttonsBankDiv">
                            <button  className="buttonBank" onClick={() => this.editBank(post.Id)}>edit</button>
                            <button onClick={() => this.deleteBank(post.Id)} className="buttonBank">delete</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}  
export default Banks;