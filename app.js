const DIRECTOR_APPROVAL_THRESHOLD = 5000;

function requiresDirectorApproval(amount) {
  return amount > DIRECTOR_APPROVAL_THRESHOLD;
}

const expenseAmount = document.querySelector("#amount");
const approvalMessage = document.querySelector("#approvalMessage");

expenseAmount.addEventListener("change", function () {
  if (expenseAmount.value === "") {
    approvalMessage.textContent = "";
    return;
  }

  const amount = Number(expenseAmount.value);

  if (requiresDirectorApproval(amount)) {
    approvalMessage.textContent = "Director approval will be required.";
  } else {
    approvalMessage.textContent = "Standard approval path.";
  }
});
