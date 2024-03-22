const listItems = document.querySelectorAll(".list-group-item");
const turkey = document.querySelectorAll(".turkey");
const Cyprus = document.querySelector(".Cyprus");
const dropdownDesktop = document.querySelector(".dropdownDesktop");
const dropdownDesktop2 = document.querySelector(".dropdownDesktop2");
const icontopCyprus = document.getElementById("cyprus");
const icontopTurkey = document.getElementById("turkey");
const dropProfile = document.querySelector(".dropdownprofile");

listItems.forEach((item) => {
  const iconBefore = item.querySelector(".before");
  const iconAfter = item.querySelector(".after");
  const dropdownItem = item.querySelector(".dropdown-item");

  item.addEventListener("mouseenter", () => {
    dropdownItem.style.color = "#ff8a4a";
    iconBefore.classList.add("d-none");
    iconAfter.classList.remove("d-none");
  });

  item.addEventListener("mouseleave", () => {
    dropdownItem.style.color = "";
    iconBefore.classList.remove("d-none");
    iconAfter.classList.add("d-none");
  });
});

const dropdownTurkey = () => {
  dropdownDesktop.classList.toggle("visually-hidden");
  icontopTurkey.classList.toggle("dropdownitem");
};
const dropdownCyprus = () => {
  dropdownDesktop2.classList.toggle("visually-hidden");
  icontopCyprus.classList.toggle("dropdownitem");
};
const dropdownProfile = () => {
  dropProfile.classList.toggle("d-none");
};
const handlerMenuCyprus = () => {
  if (icontopCyprus.style.transform === "rotate(180deg)") {
    icontopCyprus.style.transform = "rotate(0deg)";
  } else {
    icontopCyprus.style.transform = "rotate(180deg)";
    icontopTurkey.style.transform = "rotate(0deg)";
  }
};

const handlerMenuTurkey = () => {
  if (icontopTurkey.style.transform === "rotate(180deg)") {
    icontopTurkey.style.transform = "rotate(0deg)";
  } else {
    icontopTurkey.style.transform = "rotate(180deg)";
    icontopCyprus.style.transform = "rotate(0deg)";
  }
};

const itemMenu = document.querySelectorAll(".itemMenu");
itemMenu.forEach((i) =>{  
  i.addEventListener("click", () => {
    itemMenu.forEach((item) => {
      item.classList.remove("activeMenuItem");
    });
    i.classList.add("activeMenuItem");
  })

}
);
