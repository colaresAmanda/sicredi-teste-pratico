function(element, input) {
    // Exmaple input:
    // Lara|Palmer|Timepath Inc.|Programmer|87 Orange Street|lpalmer@timepath.co.uk|40731653845
   //  First Name|Last Name|Company Name|Role in comapny|Address|Email|Phone Number
   const person = input.split('|')

   const default_form_fields = ["First Name", "Last Name", "Company Name", "Role in Company", "Address", "Email", "Phone Number"]

    const form_labels = element.querySelectorAll('label')

    // Iterate through each label in the form,
    // then iterate through the field names we defined in 'default_form_fields',
    // and then fill the input with the person information (provided in the Excel file).
    form_labels.forEach((label) => {
        default_form_fields.forEach((field, index) => {
            if(label.innerText.includes(field)){
                label.nextSibling.value = person[index]
            }
        })
      
    });

    const submitButton = document.querySelector('input[type="submit"]');

    submitButton.click()

    return
}
