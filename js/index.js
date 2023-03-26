// input انشاء حساب
var NameInput = document.querySelector(' .NameInput')
var EmailInput = document.querySelector(' .EmailInput')
var PasswordInput = document.querySelector(' .PasswordInput')
var buttonSignUp = document.querySelector(' .buttonSignUp')
// input تسجيل الدخول
var LogeInEmail  = document.querySelector(' .LogeInEmail')
var LogeInpassword  = document.querySelector(' .LogeInpassword')
var buttonLoge  = document.querySelector(' .buttonSignUp')

 
Ma5zn=[]


if(localStorage.getItem('users') != null)
{
    Ma5zn = JSON.parse(localStorage.getItem('users')) 
   
}

// buttonSignUp.addEventListener('click' , Addacount)

function Addacount()
{

    acont={
        name : NameInput.value,
        email : EmailInput.value,
        password : PasswordInput.value
    }



    if(CheckForvalue() == true)
    {
        document.querySelector(' .already').innerHTML='<h6 class="text-danger" >Make sure to enter your information completely</h6>'
    }

    else if(CheckForMail() == true)
    {
        document.querySelector(' .already').innerHTML='<h6 class="text-danger" >email already exists</h6>'
        EmailInput.value=""
    }

    else if(CheckForvalue() == false)
    {
        document.querySelector(' .already').innerHTML='<h6 class="text-success" > Success</h6>'
        Ma5zn.push(acont)
        
    }
     
    localStorage.setItem('users' ,JSON.stringify(Ma5zn) )
}

// اختبار البريد موجود اولا

function CheckForMail()
{
    for(var i=0 ; i<Ma5zn.length ; i++)
    {
        if(Ma5zn[i].email.toLowerCase() == EmailInput.value.toLowerCase()) 
        {
        return true
                       
        }      
    }   
}

// اختبار اذا كان ف خانه ناقصه
function CheckForvalue()
{
    if(NameInput.value =="" || EmailInput.value =="" ||PasswordInput.value =="" ) 
    {
    
        return true
    }
    else
    {
       return false
    }
}

var name1
// buttonLoge.addEventListener('click' , function(){

function logen()
{
    var E_Logen = LogeInEmail.value
    var P_Logen = LogeInpassword.value 

   for(var z =0 ; z<Ma5zn.length ;z++)
   {
       if ( E_Logen.toLowerCase() == Ma5zn[z].email.toLowerCase() && P_Logen.toLowerCase() == Ma5zn[z].password.toLowerCase() )
       {   
        name1 = Ma5zn[z].name
        location.href = "home.html";  
        
       }

       else if  ( E_Logen != Ma5zn[z].email  )
       {
          document.querySelector(' .alreadyLogin').innerHTML='<h6 class="text-danger p-2" >incorrect email </h6>'
       }

       else if  ( P_Logen != Ma5zn[z].password  )
       {
          document.querySelector(' .alreadyLogin').innerHTML='<h6 class="text-danger p-2" >incorrect password</h6>'
        }

       if (E_Logen == "" ||  P_Logen == "")
       {
          document.querySelector(' .alreadyLogin').innerHTML='<h6 class="text-danger p-2" >All inputs is required</h6>'
       }

   }
   
}

NameHome()

  function NameHome()
  {
    
    document.querySelector(' .HomnWindow').innerHTML=`<h1 class="p-5 ">Welcome ${name1}</h1>`
  }

function Logout()
{
    location.href = "login.html";
}

