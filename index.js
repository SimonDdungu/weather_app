let User_Temp;
const Submit_Btn = document.querySelector(".Submit");
const Feedback = document.querySelector(".Feedback");
const Dress_code = document.querySelector(".What_to_wear");
const img = document.querySelector(".image");


function getClothingRecommendation(Temp){

        Dress_code.style.display="block";

        if(Temp == ''){

            Dress_code.classList.add("error");
            Dress_code.textContent = "Please Enter a valid Number";
            img.src = "";
            img.style.display ="none"

        }else{

            Dress_code.classList.remove("error");
            img.style.display ="block";

            if(Temp < 10){

                Dress_code.textContent = "🥶 Wear a Heavy Coat ❄️";
                img.src = "images/Heavy Coat.png";

            }else if(Temp >=10 && Temp <= 20){

                Dress_code.textContent = "🙂 Wear a Jacket 🌦️";
                img.src = "images/Jacket.png";
                
            }else if(Temp > 20){

                Dress_code.textContent = "🥵 Wear a T-shirt ☀️";
                img.src = "images/Women T-shirt.png";
               
            }
            else{

                Dress_code.textContent = "Please Enter a valid Number";
        
                console.log("Error! Please Enter a valid Number");
            }
        }

        
}

Submit_Btn.addEventListener("click", (e) => {
    e.preventDefault();

    User_Temp = document.querySelector(".Temp").value;
   
    getClothingRecommendation(User_Temp);
    console.log(User_Temp);
    
});
