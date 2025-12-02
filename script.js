import{auth , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , db , collection , addDoc , getDocs , getDoc , updateDoc , doc} from "./firebase.js"

let email = document.getElementById("email");
let password = document.getElementById("password");

let signUpBtn = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User Signin" , user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign Up Successful",
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout (() => {
        location.href = "dashboard.html"
      }, 1700)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Occurred:", errorCode, errorMessage);
    
      if (errorCode === "auth/invalid-email") {
        Swal.fire({
          icon: "error",
          title: "Invalid Email",
          text: "Please enter a valid email address!",
        });
      } else if (errorCode === "auth/email-already-in-use") {
        Swal.fire({
          icon: "error",
          title: "Email Already Exists",
          text: "This email is already registered. Try logging in.",
        });
      } else if (errorCode === "auth/missing-password") {
        Swal.fire({
          icon: "error",
          title: "Missing Password",
          text: "Please enter your password!",
        });
      } else if (errorCode === "auth/weak-password") {
        Swal.fire({
          icon: "error",
          title: "Weak Password",
          text: "Password should be at least 6 characters!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: errorMessage,
        });
      }
   })
};

let logInBtn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Log In Successful",
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout (() => {
        location.href = "dashboard.html"
      }, 1700)
      
    })
  .catch((error) => {
    const errorCode = error.code;
  
    if (errorCode === "auth/invalid-email") {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address!",
      });
    } 
    else if (errorCode === "auth/invalid-credential") {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "No account found with this credentials",
      });
    } 
  });
};

let logOutBtn = () => {
  signOut(auth).then(() => {
      console.log("Sign-out successful.")
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Log Out Successful",
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout (() => {
        location.href = "login.html"
      }, 1700)
    }).catch((error) => {
      console.log("An error happened.", error)
      Swal.fire({
        icon: "error",
        title: "Try Again...",
        text: "Opss.... Something Went wrong!",
      });
    });
};

document.addEventListener("DOMContentLoaded", () => {
  let signUp = document.getElementById("signUp");
  if (signUp) {
    signUp.addEventListener("click", signUpBtn);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let logIn = document.getElementById("logIn");
  if (logIn) {
    logIn.addEventListener("click", logInBtn);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let logOut = document.getElementById("logOut");
  if (logOut) {
    logOut.addEventListener("click", logOutBtn);
  }
});

//Dynamic Cards//
var students = [
    {
        fullName: "Syeda Nahal Mansoor",
        age: 17,
        classTimings: "9:00 AM - 11:00 AM",
        campus: "Malir Campus",
        teacher: "Miss Hina",
        course: "Modern Web and App Development",
    },

    {
        fullName: "Ali",
        age: 20,
        classTimings: "9:00 AM - 11:00 AM",
        campus: "North Campus",
        teacher: "Miss Hina",
        course: "Graphic Design",
    },

    {
        fullName: "Neha Khan",
        age: 18,
        classTimings: "2:00 PM - 4:00 PM",
        campus: "Gulshan Campus",
        teacher: "Sir Ahmed",
        course: "Web Development",
    },

    {
        fullName: "Fatima Noor",
        age: 19,
        classTimings: "4:00 PM - 6:00 PM",
        campus: "Bahadurabad Campus",
        teacher: "Miss Hina",
        course: "App Development",
    },

    {
        fullName: "Usman Tariq",
        age: 11,
        classTimings: "9:00 AM - 11:00 AM",
        campus: "Malir Campus",
        teacher: "Miss Fatima",
        course: "Cyber Security",
    },

    {
        fullName: "Hira Shah",
        age: 22,
        classTimings: "12:00 PM - 2:00 PM",
        campus: "North Campus",
        teacher: "Sir Ahmed",
        course: "AI & Machine Learning",
    },

    {
        fullName: "Ayat",
        age: 20,
        classTimings: "3:00 PM - 5:00 PM",
        campus: "Gulshan Campus",
        teacher: "Miss Hina",
        course: "Software Engineering",
    },

    {
        fullName: "Bilal Ahmed",
        age: 23,
        classTimings: "6:00 PM - 8:00 PM",
        campus: "Bahadurabad Campus",
        teacher: "Miss Fatima",
        course: "Data Science",
    },
]

let container = document.getElementById("container");

setTimeout (() => {
    for (var i = 0; i < students.length; i++) {
      var student = students[i];
  
      var card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
      <h3>${student.fullName}</h3>
      <p><b>Age</b> : ${student.age}</p>
      <p><b>Course</b> : ${student.course}</p>
      <p><b>Class Timings</b> : ${student.classTimings}</p>
      <p><b>Trainer</b> : ${student.teacher}</p>
      <p><b>Campus</b> : ${student.campus}</p>
      <button class="cardEdit card-btn" id="editBtn">Edit</button>
      <button class="deleteBtn delete card-btn" id="deleteBtn">Delete</button>

      `
      container.appendChild(card);
    }
}, 1000);

let modal = document.getElementById("studentModal");
let registerBtn = document.getElementById("registerBtn"); 

registerBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

document.getElementById("cancelStudentBtn").addEventListener("click", () => {
  modal.style.display = "none";
});

document.getElementById("saveStudentBtn").addEventListener("click", async () => {
  let fullName = document.getElementById("studentFullName").value;
  let age = document.getElementById("studentAge").value;
  let course = document.getElementById("studentCourse").value;
  let timings = document.getElementById("studentTimings").value;
  let trainer = document.getElementById("studentTrainer").value;
  let campus = document.getElementById("studentCampus").value;



  if (!fullName || !age || !course || !timings || !trainer || !campus) {
    alert("Must fill all the feilds!")
    return;
  }

  try {
    await addDoc(collection(db, "students"), {
      fullName,
      age,
      course,
      classTimings: timings,
      teacher: trainer,
      campus,
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Student Registered",
      showConfirmButton: false,
      timer: 1500
    });

    modal.style.display = "none";

    location.reload();

  } catch (error) {
    console.error("Error adding student:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Could not register student. Try again!",
    });
  }
});

async function loadStudents() {
  let studentContainer = document.getElementById("studentContainer");

  const querySnapshot = await getDocs(collection(db, "students"));
  querySnapshot.forEach((doc) => {
    let data = doc.data();

    container.innerHTML += `
      <div class="card">
        <h3>${data.fullName}</h3>
        <p><b>Age:</b> ${data.age}</p>
        <p><b>Course:</b> ${data.course}</p>
        <p><b>Timings:</b> ${data.classTimings}</p>
        <p><b>Trainer:</b> ${data.teacher}</p>
        <p><b>Campus:</b> ${data.campus}</p>
        <button class="cardEdit card-btn" data-id="${doc.id}">Edit</button>
        <button class="cardDelete card-btn delete" data-id="${doc.id}">Delete</button>
      </div>
    `;
  });
}

window.addEventListener("DOMContentLoaded", loadStudents);



document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("cardDelete")) {

    let id = e.target.getAttribute("data-id");
    if (!id) return; 

    let card = e.target.closest(".card");

    try {
      await deleteDoc(doc(db, "students", id));
      card.remove();   
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        timer: 1200,
        showConfirmButton: false
      });
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  }
});

document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("cardEdit")) {

    let id = e.target.getAttribute("data-id");
    if (!id) return;

    let card = e.target.closest(".card");

    let name = card.querySelector("h3").innerText;
    let age = card.querySelector("p:nth-child(2)").innerText.split(": ")[1];
    let course = card.querySelector("p:nth-child(3)").innerText.split(": ")[1];

    card.innerHTML = `
      <input id="editName" value="${name}" class="editInput">
      <input id="editAge" value="${age}" class="editInput">
      <input id="editCourse" value="${course}" class="editInput">

      <button class="saveBtn card-btn" data-id="${id}">Save</button>
      <button class="cancelBtn delete card-btn">Cancel</button>
    `;
  }

  if (e.target.classList.contains("saveBtn")) {
    let id = e.target.getAttribute("data-id");

    let card = e.target.closest(".card");
    let newName = card.querySelector("#editName").value;
    let newAge = card.querySelector("#editAge").value;
    let newCourse = card.querySelector("#editCourse").value;

    try {
      await updateDoc(doc(db, "students", id), {
        fullName: newName,
        age: newAge,
        course: newCourse,
      });

      Swal.fire({
        icon: "success",
        title: "Updated Successfully!",
        timer: 1300,
        showConfirmButton: false
      });

      location.reload();

    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  }

  if (e.target.classList.contains("cancelBtn")) {
    location.reload();
  }
});
