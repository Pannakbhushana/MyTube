

class User{
    constructor(){

    }
    validateUser(username){
        return username.includes('@') ? false:true
    }

    validatePassword(password){
        return password.length < 8 ? false:true
    }

    async signUp(n,e,u,p,m,d){
        const isValidated= this.validateUser(u) && this.validatePassword(p);

        if(isValidated){
            this.name=n;
            this.email=e;
            this.username=u,
            this.password=p,
            this.mobile=m,
            this.description=d
            
        const register_api= `https://masai-api-mocker.herokuapp.com/auth/register`;
        const responce=await fetch(register_api,{
            method:'POST',
            body:JSON.stringify(this),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data= await responce.json();
        console.log(data);

        }
    }

    async Login(u,p){
     const login_data={
        username:u,
        password:p
     }
     

      const login_api=`https://masai-api-mocker.herokuapp.com/auth/login`;
      const res= await fetch(login_api,{
        method:'POST',
        body:JSON.stringify(login_data),
        headers:{
            'Content-Type':'application/json'
        }
      })

      const data= await res.json();
    //   console.log(data);
      return data
      

    }
}

const user= new User();


function Register(){
            const name=document.getElementById("name").value;
            const email=document.getElementById("email").value;
            const username=document.getElementById("username").value;
            const password=document.getElementById("password").value;
            const mobile=document.getElementById("mobile").value;
            const description=document.getElementById("description").value;

            user.signUp(name,email,username,password,mobile,description)
    
    console.log(user)
}


  function Login(){
    const username=document.getElementById("login-username").value;
    const password=document.getElementById("login-password").value;
   let x= user.Login(username,password)
    
    console.log(x)
    
    
    // getProfile(username, x)
}



async function getProfile(username,token){
    let api_lin=`https://masai-api-mocker.herokuapp.com/user/${username}`

    let res= await fetch(api_lin,{
        headers:{
            Authorization:'Bearer ${token}',
            'Content-Type':'application'
        }
    })
    let data=await res.json();
    console.log(data);
}