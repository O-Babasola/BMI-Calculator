


function handleSubmit(event){
    //1. Prevents default form behaviour
    event.preventDefault();

    //2. Get user input values
    /* "document.getElementById()" finds the HTML element with that specific ID, in this case height and weight 
     ".value" gets whatever value the use typed into that input 
     These values come back as strings(text), even with number inputs! 
     */
    
    const heightInput = document.getElementById("height").value;
    const weightInput = document.getElementById("weight").value;

    //3. Converts string to numbers
    /* If the input is empty or not a number, it returns NaN (Not a Number) */
    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);

    //Handles empty inputs 
    if (heightInput === " " || weightInput === ""){
        alert ("Please fill in both height and weight fields");
        return // Exit the function if inputs are empty
    }

    //4. Validation of inputs

    if (isNaN(height) || isNaN(weight)){
        alert("Please enter valid numbers for height and weight");
        return; // Exit the function if inputs are invalid
    }


    //5. BMI Calculation
    const heightInMeters = height / 100; // convert cm to meters

    // BMI calculation: weight(kg) / height(m)^2
    const bmi = weight / (heightInMeters * heightInMeters);

    const roundedBmi = bmi.toFixed(1); // Round to 1 decimal place

    //6.1 Display the BMI result; Please refer to 6.2
    const resultElement = document.getElementById("calculation-result");

    //7. BMI categories
    let category =" ";
    if (bmi <18.5){
        category = "Underweight";
    }else if (bmi < 25){
        category = "Healthy weight";
    }else if (bmi <30) {
        category = "Overweight";
    } else{
        category = "Obese";
    }

    //6.2 Display BMI category
     // Update its content with the calculated BMI
    // "textContent" sets the text inside the element to the BMI result
    resultElement.innerHTML = `Your BMI is: <strong>${roundedBmi}</strong><br>` + 
    `Your BMI Category is: <strong>${category}</strong>`;// Append category to the result
   
    document.getElementById("result").scrollIntoView({
        behaviour: "smooth", //smooth scrolling to the result section when the user clicks "Calculate BMI"
        block: "start", // Try to center the result in view
        inline: "nearest"
    });

}

// Function that clears BMI result when user clicks "Reset" button 
function clearResult(){
    document.getElementById("calculation-result").innerHTML = " ";
}



// Saving Data to Local Storage (Optional Challenge)
// After calculating BMI, create an object

function saveBmiRecord(heightInput, weightInput, roundedBmi, category) {
    const BmiRecords = {
        height: heightInput,
        weight: weightInput,
        bmi: roundedBmi,
        category: category,
        date: new Date().toLocaleDateString() // Save the date of the record
    };


    // 2. Check what we created (for debugging)
    console.log("Record to save:", BmiRecords);
    
      // Save to localStorage
    localStorage.setItem('latestBmi', JSON.stringify(BmiRecords));
    console.log("✅ BMI record saved successfully!");
    
    return BmiRecords;
}


// TO CONTINUE later on to save data to local storage and display it in the history section.

// CREATE ANOTHER HTML, CSS, JS file for this next challenge below so you have one website for the basic BMI calculator
// And another file for a more advanced BMI calculator which allows you to actually login

    // Also for optional challenge, allow loading of page into the BMI page
    // Allow the user the option to login in as either a guest or login/signup if the are a guest their bmi records are not saved, else it is saved.
