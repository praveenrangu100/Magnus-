var selectedRow = null

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["FirstName"] = document.getElementById("FirstName").value;
    formData["LastName"] = document.getElementById("LastName").value;
    formData["EmailId"] = document.getElementById("EmailId").value;
    formData["MobileNo"] = document.getElementById("MobileNo").value;
    formData["DOB"] = document.getElementById("DOB").value;
    formData["Address"] = document.getElementById("Address").value;
    formData["CountryId"] = document.getElementById("CountryId").value;
    formData["CityId"] = document.getElementById("CityId").value;
    formData["chkSkill_1"] = document.getElementById("chkSkill_1").value;
    formData["chkSkill_2"] = document.getElementById("chkSkill_2").value;
    formData["chkSkill_3"] = document.getElementById("chkSkill_3").value;
    formData["chkSkill_4"] = document.getElementById("chkSkill_1").value;
    formData["chkSkill_5"] = document.getElementById("chkSkill_2").value;
    formData["chkSkill_6"] = document.getElementById("chkSkill_3").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
         cell1.innerHTML = data.FirstName;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.LastName;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.EmailId;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.MobileNo;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.DOB;
   cell7 = newRow.insertCell(5);
       cell7.innerHTML = data.CountryId;
    cell9 = newRow.insertCell(6);
        cell9.innerHTML = data.CityId;
    cell10 = newRow.insertCell(7);
        cell10.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("FirstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("LastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("EmailId").value = selectedRow.cells[2].innerHTML;
    document.getElementById("MobileNo").value = selectedRow.cells[3].innerHTML;
    document.getElementById("DOB").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Address").value = selectedRow.cells[5].innerHTML;
    document.getElementById("CountryId").value = selectedRow.cells[6].innerHTML;
    document.getElementById("CityId").value = selectedRow.cells[7].innerHTML;
    document.getElementById("OtherCity").value = selectedRow.cells[8].innerHTML;
    document.getElementById("chkSkill_1").value = selectedRow.cells[9].innerHTML;
    document.getElementById("chkSkill_2").value = selectedRow.cells[10].innerHTML;
    document.getElementById("chkSkill_3").value = selectedRow.cells[11].innerHTML;
    document.getElementById("chkSkill_4").value = selectedRow.cells[12].innerHTML;
    document.getElementById("chkSkill_5").value = selectedRow.cells[13].innerHTML;
    document.getElementById("chkSkill_6").value = selectedRow.cells[14].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.FirstName;
    selectedRow.cells[1].innerHTML = formData.LastName;
    selectedRow.cells[2].innerHTML = formData.EmailId;
    selectedRow.cells[3].innerHTML = formData.MobileNo;
    selectedRow.cells[4].innerHTML = formData.DOB;
    selectedRow.cells[5].innerHTML = formData.Address;
    selectedRow.cells[6].innerHTML = formData.CountryId;
    selectedRow.cells[7].innerHTML = formData.CityId;
    selectedRow.cells[8].innerHTML = formData.OtherCity;
    selectedRow.cells[9].innerHTML = formData.chkSkill_1;
    selectedRow.cells[10].innerHTML = formData.chkSkill_2;
    selectedRow.cells[11].innerHTML = formData.chkSkill_3;
    selectedRow.cells[12].innerHTML = formData.chkSkill_4;
    selectedRow.cells[13].innerHTML = formData.chkSkill_5;
    selectedRow.cells[14].innerHTML = formData.chkSkill_6;

}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("FirstName").value = '';
    document.getElementById("LastName").value = '';
    document.getElementById("EmailId").value = '';
    document.getElementById("MobileNo").value = '';
    document.getElementById("DOB").value = '';
    document.getElementById("Address").value = '';
    document.getElementById("CountryId").value = '';
    document.getElementById("CityId").value = '';
    document.getElementById("OtherCity").value = '';
    document.getElementById("chkSkill_1").value = '';
    document.getElementById("chkSkill_2").value = '';
    document.getElementById("chkSkill_3").value = '';
    document.getElementById("chkSkill_4").value = '';
    document.getElementById("chkSkill_5").value = '';
    document.getElementById("chkSkill_6").value = '';

    selectedRow = null;
}
