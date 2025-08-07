
const incomes = []; //inkomster: {description, amount}
const expenses = []; //utgifter :{description amount}

// Hämta HTML - element 
const descInput  = document.getElementById("desc");
  const amountInput= document.getElementById("amount");
  const incomeBtn  = document.getElementById("incomeBtn");
  const expenseBtn = document.getElementById("expenseBtn");
  const incomeList = document.getElementById("incomeList");
  const expenseList= document.getElementById("expenseList");
  const balanceEl  = document.getElementById("balance");

if (!descInput || !amountInput ||!incomeBtn || !expenseBtn ||
    !incomeList || !expenseList || !balanceE1) return;

  function addTransaction(type) {
    const description = descInput.value.trim();
    const amount      = Number(amountInput.value);

     if (!description || isNaN(amount) || amount <= 0) return;

     const obj = { description, amount };
      (type === "income" ? incomes : expenses).push(obj);

      renderLists();
      updateBalance();

       descInput.value = "";
    amountInput.value = "";
  }

   function renderLists() {
    incomeList.innerHTML  = "";
    expenseList.innerHTML = "";

     incomes.forEach(t => {
      const li = document.createElement("li");
      li.textContent = `${t.description} - ${t.amount} kr (Inkomst)`;
      incomeList.appendChild(li);
    });

expenses. orEach(t => {
      const li = document.createElement("li");
      li.textContent = `${t.description} - ${t.amount} kr (Utgift)`;
      expenseList.appendChild(li);
    });
  }

function unction updateBalance() {
    const total =
      incomes .reduce((s, t) => s + t.amount, 0) -
      expenses.reduce((s, t) => s + t.amount, 0);npm 

    balanceEl.textContent = total;
  }

 incomeBtn .addEventListener("click", () => addTransaction("income"));
  expenseBtn.addEventListener("click", () => addTransaction("expense"));
}

if (document.readystate === "loading"){
    document.addEventListener ("DOMContentLoaded", init);
} else {
  init();          
}