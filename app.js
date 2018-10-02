//render contact list //

const render = function () {
    $('.content').empty();

    for (let i = 0; i < employeeList.length; i++) {
        $('.content').append(`<div class = "fullList"><p> ${employeeList[i].name} </p> <p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);

    }
}

$('#view').on('click', render);



//input new contact info//

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

    //add button//

    $('#button').on('click', getInputVal);

    // delete contact // 

    const deleteInputVal = function () {
        const nameVal = $('#name').val();

        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name === nameVal) {
                employeeList.splice(i, 1);
            }

        };
        render();
    }

    //delete button//

    $('#delete').on('click', deleteInputVal);


    //verify contact//

    const verifyInput = function () {
        const nameVal = $('#name').val();

        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name === nameVal) {
                $('#verify-box').html("Yes");
            } else {
                $('#verify-box').html("No");
            }

        };
        document.getElementById("verify-box").style.display = "block";

        render();
    }

    //verify button//

    $('#verify').on('click', verifyInput);

    //Update contact//

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
    //update button//

    $('#update').on('click', updateContact);

    //new function delete screen//
    //const state = delete

    //const deleteScreen = function (){
     //   render();


   // }

