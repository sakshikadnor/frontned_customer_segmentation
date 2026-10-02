console.log("JAVASCRIPT LOADED");
document.getElementById("customer_form").addEventListener("submit",async function(event){
  event.preventDefault();
  const annual_income=Number(document.getElementById("annual_income").value);
  const spending_score=Number(document.getElementById("spending_score").value);
  const response=await fetch("https://backend-customer-segmentation-1.onrender.com",
    {
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:
      JSON.stringify({
        annual_income:
        annual_income,

        spending_score:
        spending_score
      })
    }
  );

  const data=await response.json();
  document.getElementById("result").innerText=result.prediction;
});

