import express from 'express'
const app = express()
const PORT = 3000
import cors from 'cors'
// const Razorpay = require('razorpay');
import Razorpay from 'razorpay'
app.use(cors())
app.get("/makepayment",(req,resp)=>{

    var instance = new Razorpay({ key_id: 'rzp_test_pv6FbtEGoD0n4P', key_secret: 'iladq0iIJ4h3mt2LyxAalTuK' })

    var options = {
      amount: 50000,  // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function(err, order) {
      resp.send(order)
    });

})

app.listen(PORT,()=>{
    console.log("Server running on port"+PORT);
    
})
