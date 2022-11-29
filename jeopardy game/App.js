function Register(ev) {
    ev.preventDefault(); //stop form from submitting

        //First Name Validation
        var FirstName= document.getElementById("FirstName");
        
        var FirstNameValidation=function()
        { FirstNameValue=FirstName.value.trim();
            validFirstName=/^[A-Za-z]+$/;
        
           if(FirstName=="")
            {
                FirstName.innerHTML="First Name is required";
            } else
            if (!ValidFirstName.test(FirstNameValue)){
                FirstName.innerHTML="First Name must be be only string with white spaces";
            } else{
                FirstName.innerHTML="";
                return true;
                }  
            FirstName.oninput=function(){
                FirstNameValidation();
            }
        }
        //Last Name Validation
            var LastName=document.getElementById("LastName");
        
            var LastNameValidation=function()
            {
                LastNameValue=LastName.value.trim();
                validLastName=/^[A-Za-z]+$/;
            if (LastName=="")
            {
                LastName.innerHTML="Last Name is required";
            } else 
            if (!validLastName.test(LastNameValue)){
                LastName.innerHTML="Last Name must be only string without white spaces";
            } else{
                LastName.innerHTML="";
                return true;
            }
            LastName.oninput=function(){
                LastNameValidation();
            }
        }
        
            //Date Of Birth Validation
            var Dob=document.getElementById("dob");
        
            var DobValidation=function()
            {
                var ddlDay = $("#ddlDay");
                var ddlMonth = $("#ddlMonth");
                var ddlYear = $("#ddlYear");
        
                //check date was selected
                if (ddlDay[0].selectedIndex == 0 ||
                    ddlMonth[0].selectedIndex == 0 ||
                    ddlYear[0].selectedIndex == 0)
            {
                alert("date is required");
                return false;
            }
        
                //check date is valid
                var date = new Date();
                date.setFullYear(ddlYear.val(), ddlMonth.val() - 1, ddlDay.val());
                var inputDate = ddlYear.val() + "-" + (ddlMonth.val() - 1) + "-" + ddlDay.val();
                var parsedDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
                //the parsed date will only match the input date if date is valid
                if (inputDate != parsedDate)
           {
                
                alert("date is invalid");
                return false;
           }
                // date is invalid
                return true;
        }


        var email= document.getElementById("Email");;
        var EmailValidation= function(){
        
            EmailValue=Email.value.trim();
            validEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
            if(email==""){
                email.innerHTML="Email is required";
            } else
            if(!validEmail.test(EmailValue)){
                email.innerHTML="Email must be in valid format with @SomeEmail"
            } else{
                email.innerHTML="";
                return true;
        }
        Email.oninput=function(){
            EmailValidation();
        }
        
        
        var Age=document.getElementById("Age");
        var a = Age
        var Age=function(){
            var todaysDate = new Date();
            todaysDate.setFullYear(todaysDate.getFullYear() - a);
            var usersBirthday = new date();
            var bm = birthMonth;
            var bd = birthday;
            var by = birthyear;
            usersBirthday.setFullYear(by,bm - 1, bd);
            if ((todaysDate - usersBirthday) <0) {
                return true;
            } else return false
            if (AgeValidation(12,$month, $day, $year)){
                alert('age not old enough');
            }
            }
        }
        
        var Gender= document.getElementById("Gender");
        var GenderValidation= function(){
            GenderValue=Gender.value.trim();
            if((Gender[0].checked == false) && (Gender[1].checked == false)){
                alert("Please choose your Gender: Male or Female");
                return false;
            }
        }
        
        //function to check address
        var Town= document.getElementById("Town")
        var TownValidation=function(){
                TownValue=Town.value.trim();
                validTown=/^[A-Za-z]+$/;
            if (Town=="")
            {
                Town.innerHTML="Town is required";
            } else 
            if (!validTown.test(TownValue)){
                Town.innerHTML="Town must be only string without white spaces";
            } else{
                Town.innerHTML="";
                return true;
            }
            Town.oninput=function(){
                TownValidation();
            }
        }
        //Initialise the country value
        var country= document.getElementById("Country");
        var CountryValidation= function(){
                CountryValue=Country.value.trim();
            if ((document.getElementById("Country").selectedIndex == 0)){
            alert ("Please select your country");
            return false;
            }
        }
        
        var EducationLevel = document.getElementById('EducationLevel');
        if (EducationLevel == "0")
        {
        alert("Please select an option");
        }

        

        //Append To Array
        const PlayersData = [
            "First Name",
            "Last Name",
            "DOB",
            "Email",
            "Age",
            "Gender",
            "Street",
            "City",
            "Town",
            "Country",
            "Education Level",
            "Profile Picture"
        ];
        console.log(PlayersData);
        
        }