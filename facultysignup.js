let o = {
    "Birmohan Singh": "birmohansingh@sliet.ac.in",
    "Damanpreet Singh": "damanpreets@sliet.ac.in",
    "Major Singh Goraya": "mjrsingh@yahoo.com",
    "Manoj Sachan": "manojsachan@sliet.ac.in",
    "Gurjinder Kaur":"gurjinder13@yahoo.com",
    "Amar Nath":"amarnath@sliet.ac.in",
    "Jagdeep Singh":"jagdeep@sliet.ac.in",
    "Manmindar Singh":"manmindersingh@sliet.ac.in",
    "Preetpal Kaur Buttar" : "preetpal@sliet.ac.in",
    "Tajinder Singh":"tajindersingh@sliet.ac.in",
    "Vinod Kumar Verma":"vinod5881@gmail.com",
    "Jaspal Singh":"aspalsingh@sliet.ac.in",
    "Rahul Gautam":"rahulgautam@sliet.ac.in",
    "Jatinder Pal Singh":"jatinderpalsingh@sliet.ac.in",
    "Sukhpreet Singh":"sukhpreet.manshahia@gmail.com",
    "Chinu":"chinu@sliet.ac.in",
    "Vikash Kumar Garg":"contactvikashgarg@gmail.com",
    "Sunita Rani":"sunitarani@sliet.ac.in"

    


}

// console.log(n);

let found = false;
function check() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    console.log(n, e);
    let val =0;

    for (const key in o) {
        if (Object.prototype.hasOwnProperty.call(o, key)) {
            const element = o[key];
            //console.log(key , element);
            if (key.toLowerCase() == n.toLowerCase() && element == e) {
                console.log("yes");
                found = true;
                break;
            }

        }
        val++

    }
    console.log(val);
    if (found == false) {
        alert("Please try again");
    }
    else{

        let ele = document.createElement("a");
        let str = "teacher"+(val+1)+".html";
        console.log(str);
        ele.href = str;
        ele.target = "_blank";
        // ele.innerHTML= "target";
        document.body.append(ele);
        ele.click();
    
        console.log(ele);
    }
    document.getElementById("name").value = "";
    document.getElementById("email").value = " ";




}