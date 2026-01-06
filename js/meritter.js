const meritterBtn = document.getElementById("meritterBtn");
const meritterList = document.getElementById("meritterList");

function toggleMeritter() {
  const listIsOpen = meritterList.classList.contains("is-open");

  if (listIsOpen) {
    meritterList.classList.remove("is-open");
    meritterBtn.textContent = "Meritter";
  } else {
    meritterList.classList.add("is-open");
    meritterBtn.textContent = "Luk meritter";
  }
}

meritterBtn.addEventListener("click", toggleMeritter);