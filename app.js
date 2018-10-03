let currentState = "";

//render contact list //

const render = function () {
    $('.content').empty();

    for (let i = 0; i < employeeList.length; i++) {
        $('.content').append(`<div class = "fullList"><p> ${employeeList[i].name} </p> <p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);

    }
}

$('#view').on('click', render);

//view screen function//

const viewScreen = function () {
    currentState = "view";
    $(`.content`).show();
    $(`.input`).hide();
    $(`#verify-box`).hide();
    $(`#office`).show();
    $(`#phone`).show();
    render();

}
//view menu tab// 
$('#view').on('click', viewScreen);



//add new contact function//

const getInputVal = function () {
    const nameVal = $('#name').val();
    const officeVal = $('#office').val();
    const phoneVal = $('#phone').val();
    employeeList.push({
        name: nameVal,
        officeNum: officeVal,
        phoneNum: phoneVal
    });
    $('#name').val('');
    $('#office').val('');
    $('#phone').val('');

    render();

}
//add screen function//
const addScreen = function () {
    currentState = "add";
    $(`.content`).show();
    $(`.input`).show();
    $(`#verify-box`).hide();
    $(`#office`).show();
    $(`#phone`).show();
    render();

}
//add menu tab// 
$('#add').on('click', addScreen);



// delete contact function // 

const deleteInputVal = function () {
    const nameVal = $('#name').val();

    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameVal) {
            employeeList.splice(i, 1);

        }

    };
    render();
}

// delete screen//

const deleteScreen = function () {
    currentState = "delete";
    $(`.content`).show();
    $(`.input`).show();
    $(`#verify-box`).hide();
    $(`#office`).show();
    $(`#phone`).show();
    render();

}

//delete tab//

$('#delete').on('click', deleteScreen);


//verify contact function//

const verifyInput = function () {
    const nameVal = $('#name').val();
    let found = false;

    console.log("name to be verified" + nameVal)

    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameVal) {
            found = true;
            console.log("name found" + nameVal)
        }
    };

    if (found === true) {
        $('#verify-box').html("Yes");
    } else {
        $('#verify-box').html("No");
    };
}
//verify screen//

const verifyScreen = function () {
    currentState = "verify";
    $(`.content`).hide();
    $(`verify-box`).show();
    $(`#office`).hide();
    $(`#phone`).hide();
    document.getElementById("verify-box").style.display = "block";
    render();

}

//verify menu tab//
$('#verify').on('click', verifyScreen);


//Update contact function//

const updateContact = function () {
    const nameVal = $('#name').val();
    const officeVal = $('#office').val();
    const phoneVal = $('#phone').val();
    var start_index = 1;

    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === nameVal) {
            employeeList[i].officeNum = officeVal;
            employeeList[i].phoneNum = phoneVal;

        };

        render();
    }
}
//update screen//

const updateScreen = function () {
    currentState = "update";
    $(`.content`).show();
    $(`.input`).show();
    $(`#verify-box`).hide();
    $(`#office`).show();
    $(`#phone`).show();
    render();
}
//update menu tab//
$('#update').on('click', updateScreen);

//new function delete screen//

const clickHandler = function () {
    console.log("currentState = " + currentState)

    if (currentState === "delete") {
        deleteInputVal();

    } else if (currentState === "add") {
        getInputVal();

    } else if (currentState === "verify") {
        verifyInput();

    } else if (currentState === "update") {
        updateContact();

    }
}

$("#button").on("click", clickHandler);


