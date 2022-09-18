const baseURL = 'http://localhost:3000'
$("#signin").click(() => { 
    const email = $("#email").val();
    const password = $("#password").val();
    const data = { email , password }
    console.log({data});
    axios({
        method: 'post',
        url: `http://localhost:3000/signin`,
        data: data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function(response) {
        console.log({ response });
        const { message , result } = response.data ;

        if (message == "success") {
            localStorage.setItem('userID', result[0].id);
            window.location.replace("file:///D:/Courses/Back-end%20course/Week%204/Assignment5/Crud%20operations%20'Full%20stack'/FrontApiDemo/index.html");
        } else {
            console.log("In-valid email or password");
            alert("In-valid email or password")
            console.log(message);
        }
    }).catch(function (error) {
        console.log(error);
    });

})






