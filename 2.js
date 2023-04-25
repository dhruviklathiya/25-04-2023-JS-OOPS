class Print{
    constructor(arrayhe){}
    
    // display(a){
    //     console.log(a);
    // }
    tabledatapass(data){
        var tbl = "";
        data.map((access)=>{
            tbl += `
                    <tr>
                    <td>${access.name}</td>
                    <td>${access.email}</td>
                    <td>${access.phone}</td>
                    </tr>
                    `
        });
        // Debugging js file// console.log(tbl);
        // Html file// document.getElementById('records').innerHTML = tbl;
    }

}
let data = [
    {
        name : "jay",
        email : "jay@gmail.com",
        phone : "12345",
    },
    {
        name : "ajay",
        email : "ajay@gmail.com",
        phone : "12345",
    },
    {
        name : "vijay",
        email : "vijay@gmail.com",
        phone : "12345",
    },
    {
        name : "ashish",
        email : "ashish@gmail.com",
        phone : "12345",
    },
];
let newobj = new Print;
// newobj.display(data);
newobj.tabledatapass(data);