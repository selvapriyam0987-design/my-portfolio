 /*Theme*/
function toggleTheme(){
  document.body.classList.toggle("dark");
}

 /*Typing Effect*/
const roles=["Full Stack Engineer","Frontend Specialist","Web Development Enthusiast"];
let i=0,j=0,current="",isDeleting=false;
function type(){
  current=roles[i];
  if(!isDeleting){
    document.getElementById("typing").textContent=current.substring(0,j++);
    if(j>current.length){isDeleting=true;setTimeout(type,1000);return;}
  }else{
    document.getElementById("typing").textContent=current.substring(0,j--);
    if(j<0){isDeleting=false;i=(i+1)%roles.length;}
  }
  setTimeout(type,100);
}
type();

/* Modal */
function openModal(card) {
  const title = card.dataset.title;
  const desc = card.dataset.description;

  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/*scroll reveal animation*/
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
 /*nav bar*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
/*experiance*/
window.addEventListener("scroll", reveal);

function reveal(){
  const reveals = document.querySelectorAll(".reveal");

  for(let i=0;i<reveals.length;i++){
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }
  }
}
