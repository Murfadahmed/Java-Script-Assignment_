//chapter number 13 and 14---------------------------------

//------------question number one--------------

// let studentNames =[]
// const studentNames1 =[]
// var studentNames2 =[]


//------------question number two--------------

// let unknown = {
//     wacantArray : []
// }


//------------question number 3/4/5/6--------------
// const Array = [];
// const stringArray = ["string"]
// const numberArray =[0987654321]
// const boleanArray = [true,!false]
// const mixARray = [ 1 ,"string" ,true ]

//------------question number 7--------------
// let qualifications = ["1)SSC <br>", "2)HSC <br>", "3)BSC<br>", " 4)BC  <br>","5)BCOM  <br>", "6)MC <br>", "7)MPhil. <br>", "8)PhD <br>"]
// document.write(`<h1> QUALIFICATION </h1>:= <br>
//     ${(qualifications)}
//     `)

    //------------question number eight--------------

    // const studentNames = ["sufyan","ahmer","ahmed"]
    // const studentMarks = [320 , 230 ,480 ]
    // // const percentage = []
    // var score = 500;
    // document.write(
    //     `score of ${studentNames[0]} is ${studentMarks[0]}.percentage : ${studentMarks[0] / score * 100}% <br>`
    // )
    // document.write(
    //     `score of ${studentNames[1]} is ${studentMarks[1]}.percentage : ${studentMarks[1] / score * 100}% <br>`
    // )
    // document.write(
    //     `score of ${studentNames[2]} is ${studentMarks[2]}.percentage : ${studentMarks / score * 100}% <br>`
    // )


    //------------question number nine--------------

    // const colorName = ["red","blue","green","yellow","orange","indigo","violet"]
    // document.write(`${colorName} <br>`)
    // console.log(colorName)
    //---------------A----------
    // var colorUserbegin = prompt("which color do you want see at begning?")
    // colorName.unshift(colorUser)
    // document.write(`${colorName} <br>`)
    //-----------B------------
    // var colorUserlast = prompt("which color do you want see at end?")
    // colorName.push(colorUserlast)
    // document.write(colorName)
    // //-----------C-------------
    // var colorUserlast = prompt("which second color do you want see at begning?")
    // var colorUserlast2 = prompt("which second color do you want see at begning?")
    // colorName.unshift(`${colorUserlast}","${colorUserlast2}`)
    // document.write(colorName)
// -----------------D-----------
// var eliminatefirst = prompt("how many color do you want to remove")
//     colorName.shift()
//     document.write(`${colorName} <br>`)
//-----------E-----------
// var eliminatelast = prompt("how many color do you want to remove")
// colorName.pop()
// document.write(`${colorName} <br>`)
    //-----------F----------
    // var indexOF = prompt("in which point do you want to add");
    // // var remove = prompt("how many element do you want to remove");
    // var add = prompt("what element do you add?");
    // colorName.splice(indexOF,0,add);
    // console.log(colorName);
    // //----------------G------------
    // var indexOF = prompt("in which point do you want to add");
    // var remove = prompt("how many element do you want to remove");
    // var add = prompt("what element do you add?");
    // colorName.splice(indexOF,remove,add);
    // console.log(colorName);

    //------------question number 10-------\
    // const studentscore = [320,650,77,120.5,102,150,120,2]
    // document.write(` score of students: ${(studentscore)}`)
    // studentscore.sort();
    // document.write(` <br>ordered form of score: ${(studentscore)}`)


//     //--------------question number 11-----------


// const cityList = ["karachi","Quetta","lahore","kpk","hyderabad"]
// document.write(` <h1> List of cities</h1> :${cityList}`)
// const select = cityList.slice(1,3)
// document.write(` <h1> List of selected cities</h1> :${select}`)


//------------question number 12-------
// const list = ["this","is","my","cat"]  


// document.write(`Arrays : ${(list)} <br>`)

// const string = list.join(" --  "); 

// document.write(` string : ${string}`)

// -----------------question number 13


// const devices = ["keyboard","mouse","printer","monitor","L.E.D"]
// document.write(`<h2>Devices <br> ${devices}</h2> <br>`)
// const devices02 = devices.sort();
// document.write(`<h2>Devices sort <br> ${devices}</h2> <br>`)
// document.write(`<h4>Out:</h4><br>${devices[0]}`)
// document.write(`<h4>Out:</h4><br>${devices[1]}`)
// document.write(`<h4>Out:</h4><br>${devices[2]}`)
// document.write(`<h4>Out:</h4><br>${devices[3]}`)
// document.write(`<h4>Out:</h4><br>${devices[4]}`)


//-------------question number  14 -------


const models = ["APPLE","SAMSUNG","MOTROLLA","NOKIA","SONY","HAIER"]
document.write(`    <select name="phoneModels" id="jazz">
<option value="model[0]">${models[0]}</option>
<option value="02"selected >${models[1]}</option>
<option value="03" >${models[2]}</option>
<option value="04">${models[3]}</option>
<option value="05">${models[4]}</option>
<option value="06">${models[5]}</option>
</select> <br>
<input type="submit" name="subscribe" 
 value="Subscribe" />`)