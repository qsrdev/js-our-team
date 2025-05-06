const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
    pizza: "ciaooo",
  },
];

// prendo il contenitore del team dove ci sono dentro le card
/// creo una funzione che crea le card e ogni volta che crea una card
/// le assegna il valore fatto da cardcreation

const teamMembersElement = document.querySelector(".team-container");

const formElement = document.getElementById("submitform");

const cardCreation = (member) => {
  const { name, role, email, img } = member;

  return `<div class="team-card">
  <img src="${img}" alt="Marta" />
  <div class="info">
  <h3>${name}</h3>
  <p>${role}</p>
  <a href="mailto:${email}">${email}</a>
  </div>
  </div>`;
};

const renderTeam = (arrayTeam) => {
  let cards = "";
  for (const member of arrayTeam) {
    // console.log(member);
    cards += cardCreation(member);
    // console.log(cards);
  }
  return cards;
};

teamMembersElement.innerHTML = renderTeam(teamMembers);

formElement.addEventListener("submit", (e) => {
  event.preventDefault();
  console.log("submit");
  const name = document.getElementById("exampleInputName").value;
  const role = document.getElementById("exampleInputRole").value;
  const email = document.getElementById("exampleInputMail").value;
  const img = document.getElementById("exampleInputImg").value;
  console.log(name, role, email, img);

  const newMember = {
    name,
    role,
    email,
    img,
  };
  console.log(newMember);
  teamMembers.push(newMember);
  teamMembersElement.innerHTML = renderTeam(teamMembers);
});
