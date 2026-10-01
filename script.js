
document.getElementById("predictionform").addEventListener("submit",async function(event){
  event.preventDefault();
  const annual_income=Number(document.getElementById("annual_income").value);
  const spending_score=Number(document.getElementById("spending_score").value);
  const response=await fetch("",
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
  document.getElementById("result").innerText=data.prediction;
});

