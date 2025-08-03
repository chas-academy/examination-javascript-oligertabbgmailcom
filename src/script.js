
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");

const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const transactionList = document.getElementById("transactionList");
const balanceDisplay = document.getElementById("balance");

let incomes = [];
let expenses = [];

function addTransaction(type) {
  const description = descInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!description || isNaN(amount) || amount <= 0) {
    alert("Fyll i beskrivning och ett positivt belopp.");
    return;
  }

  const transaction = { description, amount, type };

  if (type === "income") {
    incomes.push(transaction);
    renderTransaction(incomeList, transaction);
  } else {
    expenses.push(transaction);
    renderTransaction(expenseList, transaction);
  }

  renderTransaction(transactionList, transaction);
  updateBalance();
  clearInputs();
}

function renderTransaction(list, transaction) {
  const li = document.createElement("li");
  li.textContent = `${transaction.description} - ${transaction.amount} kr`;
  list.appendChild(li);
}

function updateBalance() {
  const incomeTotal = incomes.reduce((sum, t) => sum + t.amount, 0);
  const expenseTotal = expenses.reduce((sum, t) => sum + t.amount, 0);
  const total = incomeTotal - expenseTotal;
  balanceDisplay.textContent = total ;
}

function clearInputs() {
  descInput.value = "";
  amountInput.value = "";
}

incomeBtn.addEventListener("click", () => addTransaction("income"));
expenseBtn.addEventListener("click", () => addTransaction("expense"))