const addUserBtn = document.getElementById('addUser')
const userNameTextField = document.getElementById('username')

let userArray = []; //data store
addUserBtn.onclick = () => {
    //alert("hello")
    const name = userNameTextField.value;
    //alert(name)
    userArray.push({ 'name': name });
    //console.log(userArray);
    savedata(userArray)

    function savedata(userArray)
    {
        //console.log(userArray)
        let str = JSON.stringify(userArray);//convert object to string
         //console.log(str)
         localStorage.setItem('users',str);

    }

}