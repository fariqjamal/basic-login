let user1 =[
    {
        username: "fariq152",
        password: "12345678",
        name: "fariq",
        email:"fariqjamal89@gmail.com"
    },
{
    username: "aikceong",
    password: "23456789",
    name:"caong",
    email:"caong@gmail.com"
},
{
    username:"dehim1",
    password:"qqqq1234",
    name:"dehim",
    email:"dehim@gmail.com"
}
]

function login_all(){
user1.find(Element =>
    console.log(Element)
)
}

function login(username, password){
    console.log("Someone try to login with", username, password)
    let matched = user1.find(Element=>
        Element.username == username
    )
    if(matched){
        if(matched.password==password){
            return matched
        }else{
            return "password is not matched"
        }
    }else{
        return "username not found"
    }

}

console.log(login("dehim1", "qqqq1234"));
