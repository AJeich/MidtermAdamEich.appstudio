
btnSubmit.onclick=function(){
  let income = Number(inptIncome.value)
  if (income < 30000) {
    lblAnswer.text = (`With your income of $${income}, you are in a tax bracket of 8%`)
  } else if (income > 30000 && income < 99999) {
    lblAnswer.text = (`With your income of $${income}, you are in a tax bracket of 15%`)
  } else {
    lblAnswer.text = (`With your income of $${income}, you are in a tax bracket of 25%`)
  }
  

