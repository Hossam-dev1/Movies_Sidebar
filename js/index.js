//* SideBar*\\
let byWordBtn = document.getElementById("byWordBtn")

$("#closeBtn").click(function()
{   
    if( $("#sidebar").css("left")=="0px" ) //hwa bara
    {
        $("#sidebar").animate ( {left: "-150px"} ,800);
        $(".nav-header").animate ( {left: "0"} ,800);
        $(".nav-item").slideUp(350)
        
    }
    
    else //wana open it
    {
        $("#sidebar").animate ( {left: "0px"} ,800);
        $(".nav-header").animate ( {left: "150px"} ,1000);
        $(".nav-item").slideDown(1900)
    }
    
})

let myMovies = [];
let totlaMov = {};

async function myData(term,page)
{
    
    let apiData = await fetch(`https://api.themoviedb.org/3/${term}/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=${page}`)
    
    let final = await apiData.json();
    myMovies = final.results
    console.log(myMovies)
    displayMovies()
}
myData("trending",'1');//Trending// Popular//Top Rated








function searchBtn(search)
{
    let cartoona = ``;

    for(var i =0; i< myMovies.length; i++)

   if(myMovies[i].title.toLowerCase().includes(search.toLowerCase()) ==true )
   {
    cartoona +=`
    <div class="col-md-4 py-3">
    
    <div class="post ">
            
            <img class="w-100" src="https://image.tmdb.org/t/p/w500/${myMovies[i].poster_path}">

        <div class="caption d-flex justify-content-center align-items-center">
            <div class="details py-5">
            <h2>${myMovies[i].original_title}</h2>
            <p class="text-muted">${myMovies[i].overview}</p>
            <h6>${myMovies[i].vote_average}</h6>
            <h6>${myMovies[i].release_date}</h6>
            </div>
        </div>
      </div>

      
  </div>
    
    `
   }
   else
   {
    console.log("Hello ")
   }

   document.getElementById("myRow").innerHTML=cartoona;

}



function displayMovies()
{
    let cartoona = ``;
    
    for(var i =0; i< myMovies.length; i++)
    {
        cartoona+=`
        <div class="col-md-4 py-3">
        
        <div class="post ">
                
                <img class="w-100" src="https://image.tmdb.org/t/p/w500/${myMovies[i].poster_path}">

            <div class="caption d-flex justify-content-center align-items-center">
                <div class="details py-5">
                <h2>${myMovies[i].original_title}</h2>
                <p class="text-muted">${myMovies[i].overview}</p>
                <h6>${myMovies[i].vote_average}</h6>
                <h6>${myMovies[i].release_date}</h6>
                </div>
            </div>
          </div>

          
      </div>
        
        `
        document.getElementById("myRow").innerHTML=cartoona;
    }
}


//Validation\\


let nameInp = document.getElementById("name"),
    namealert = document.getElementById("namealert"),

    emailInp=document.getElementById("email"),
    emailalert=document.getElementById("emailalert"),

    phone=document.getElementById("phone"),
    phonealert=document.getElementById("phonealert"),

    age=document.getElementById("age"),
    agealert=document.getElementById("agealert"),

    password=document.getElementById("password"),
    passwordalert=document.getElementById("passwordalert"),

    rePassword=document.getElementById("rePassword"),
    repasswordalert=document.getElementById("repasswordalert");



nameInp.addEventListener("keyup" , function()
{
    var nameRejex =/^[A-Z][a-z]{2,8}$/;
    if(nameRejex.test(nameInp.value) == false)
    {   
        nameInp.classList.add("is-invalid");
        nameInp.classList.remove("is-valid");
        namealert.classList.replace("d-none", "d-flex")

    }
    else
    {
        nameInp.classList.add("is-valid");
        nameInp.classList.remove("is-invalid");
        namealert.classList.replace("d-flex", "d-none")
    }
})


email.addEventListener("keyup" , function()
{
    var mailRejex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/    ;
    if(mailRejex.test(emailInp.value) == false)
    {   
        emailInp.classList.add("is-invalid");
        emailInp.classList.remove("is-valid");
        emailalert.classList.replace("d-none", "d-flex")

    }
    else
    {
        emailInp.classList.add("is-valid");
        emailInp.classList.remove("is-invalid");
        emailalert.classList.replace("d-flex", "d-none")
    }
})

phone.addEventListener("keyup" , function()
{
    var phoneRejex =/^01[0125][0-9]{8}$/
    if(phoneRejex.test(phone.value) == false)
    {   
        phone.classList.add("is-invalid");
        phone.classList.remove("is-valid");
        phonealert.classList.replace("d-none", "d-flex")

    }
    else
    {
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
        phonealert.classList.replace("d-flex", "d-none")
    }
});

age.addEventListener("keyup" , function()
{
    var ageRejex =/^([2-7][0-9]|18|19|80)$/
    if(ageRejex.test(age.value) == false)
    {   
        age.classList.add("is-invalid");
        age.classList.remove("is-valid");
        agealert.classList.replace("d-none", "d-flex")

    }
    else
    {
        age.classList.add("is-valid");
        age.classList.remove("is-invalid");
        agealert.classList.replace("d-flex", "d-none")
    }
});

password.addEventListener("keyup" , function()
{
    var passwordRejex =/^([a-zA-Z0-9]){8,}$/
    if(passwordRejex.test(password.value) == false)
    {   
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
        passwordalert.classList.replace("d-none", "d-flex")

    }
    else
    {
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
        passwordalert.classList.replace("d-flex", "d-none")
    }
})
password.addEventListener("keyup" , function()
{
    var passwordRejex =/^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,}$/

    if(passwordRejex.test(password.value) == false)
    {   
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
        passwordalert.classList.replace("d-none", "d-flex")

    }
    else
    {
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
        passwordalert.classList.replace("d-flex", "d-none")
        
        
        
    }
 
})

rePassword.addEventListener("keyup" , function()
{   
    var repass = password.value
   
    
    if(rePassword.value===repass)
    { 
        rePassword.classList.add("is-valid");
        rePassword.classList.remove("is-invalid");
        repasswordalert.classList.replace("d-flex", "d-none")  
       
     

    }
    else
    {
        rePassword.classList.add("is-invalid");
        rePassword.classList.remove("is-valid");
        repasswordalert.classList.replace("d-none", "d-flex")

    }
})

