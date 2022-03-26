const tabs = document.getElementsByClassName("tab");
const tabContents = document.getElementsByClassName("tab-content");

for (let index = 0; index < tabs.length; index++) {
  tabs[index].addEventListener("click", () => {
    for (let content of tabContents) {
      content.style.display = "none";
    }
    tabContents[index].style.display = "block";
  });
}
