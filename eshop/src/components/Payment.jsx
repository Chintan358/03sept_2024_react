import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import axios from 'axios'
const Payment = ()=>{

    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    const { error, isLoading, Razorpay } = useRazorpay();

    const handlePayment = async () => {
       


        //creating a new order
        const result = await axios.get("http://localhost:3000/makepayment");

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
        // console.log(result.data.id);
        
        // Getting the order details back
        // const { amount, id: id, currency } = result.data;
       
        const options = {
            key: "rzp_test_pv6FbtEGoD0n4P", // Enter the Key ID generated from the Dashboard
            amount: 50000,
            currency: "INR",
            name: "Soumya Corp.",
            description: "Test Transaction",
            image: null ,
            order_id: result.data.id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                // const result = await axios.post("http://localhost:5000/payment/success", data);

                // alert(result.data.msg);
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    
    return (
        <div>
          <h1>Payment Page</h1>
          {isLoading && <p>Loading Razorpay...</p>}
          {error && <p>Error loading Razorpay: {error}</p>}
          <button onClick={handlePayment} disabled={isLoading}>
            Pay Now
          </button>
        </div>
      );
}


export default Payment