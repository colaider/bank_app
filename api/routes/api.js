var express = require("express")
var router = express.Router()
var pool = require("./pool")

router.get("/",(req,res, next) => {
    res.send("Tetetete");
})

router.get("/pool", (req,res) =>{
    pool.query('SELECT * FROM BanksTable',(error,result) =>{
        if(error){
            res.send(error);
        }else{
            res.send(result)
        }
    })
})


router.get("/set/:interestRate/:maximumLoan/:minimumDownPayment/:loanTerms/:bankName", (req,res) =>{
    pool.query(`INSERT INTO BanksTable(InterestRate,MaximumLoan,MinimumDownPayment,LoanTerms,BankName)
    VALUES(${req.params.interestRate}, ${req.params.maximumLoan},${req.params.minimumDownPayment}, ${req.params.loanTerms}, "${req.params.bankName}")`,(error,result) =>{
             if(error){
                 res.send(error)
             }
    })
})


router.get("/delete/:id", (req,res) =>{
    pool.query(`DELETE FROM BanksTable WHERE Id = ${req.params.id}`,(error,result) =>{
        if(error){
            res.send(error);
        }else{
            res.send(result)
        }
    })
})
router.get("/edit/:Id/:interestRate/:maximumLoan/:minimumDownPayment/:loanTerms/:bankName", (req,res) =>{
    pool.query(`UPDATE BanksTable SET InterestRate=${req.params.interestRate}, MaximumLoan=${req.params.maximumLoan},  MinimumDownPayment=${req.params.minimumDownPayment}, LoanTerms=${req.params.loanTerms}, BankName="${req.params.bankName}"  WHERE id = ${req.params.Id}`,(error,result) =>{
        if(error){
            res.send(error);
        }else{
            res.send(result)
        }
    })
})
router.get("/select/:name/:minimumPAyment/:loan", (req,res) =>{
    pool.query(`SELECT * FROM BanksTable WHERE BankName = "${req.params.name}" AND MinimumDownPayment <= ${req.params.minimumPAyment} AND  MaximumLoan >= ${req.params.loan} `,(error,result) =>{
        if(error){
            res.send(error);
        }else{
            res.send(result)
        }
    })
})




module.exports = router;