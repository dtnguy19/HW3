function generateTable() {
    // Retrieve input values
    const C1 = parseInt(document.getElementById("C1").value);
    const C2 = parseInt(document.getElementById("C2").value);
    const R1 = parseInt(document.getElementById("R1").value);
    const R2 = parseInt(document.getElementById("R2").value);

    // Validate input
	if (isNaN(C1) || isNaN(C2) || isNaN(R1) || isNaN(R2) ||
        C1 < -50 || C1 > 50 || C2 < -50 || C2 > 50 ||
        R1 < -50 || R1 > 50 || R2 < -50 || R2 > 50 
		|| C1 >= C2 || R1 >= R2) {
        // Display error message on the website
        if (C1 < -50 || C1 > 50 || C2 < -50 || C2 > 50 || R1 < -50 || R1 > 50 || R2 < -50 || R2 > 50) {
            document.getElementById("errorMessage").innerText = "Invalid numbers were inputted. Please enter numbers ranging from -50 to 50.";
		} else if (C1 == C2){
			document.getElementById("errorMessage").innerText = "The Column's minimum and maximum values should not be the same.";
		} else if (R1 == R2){
			document.getElementById("errorMessage").innerText = "The Row's minimum and maximum values should not be the same.";
        } else if (C1 > C2) {
            document.getElementById("errorMessage").innerText = "Column 1's value should be smaller than Column 2's value.";
        } else if (R1 >= R2) {
            document.getElementById("errorMessage").innerText = "Row 1's value should be smaller than Row 2's value.";
		}
		return;
    }
    // Generate multiplication table
    let tableHTML = "<table><thead><tr><th></th>";
    for (let i = C1; i <= C2; i++) {
        tableHTML += `<th>${i}</th>`;
    }
    tableHTML += "</tr></thead><tbody>";

    for (let i = R1; i <= R2; i++) {
        tableHTML += `<tr><th>${i}</th>`;
        for (let j = C1; j <= C2; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += "</tr>";
    }

    tableHTML += "</tbody></table>";
	document.getElementById("errorMessage").innerText = ""
    // Display table
	var tableName = "Multiplication Table: " + C1 + " to " + C2 + " x " + R1 + " to " + R2;
    document.getElementById("tableName").innerText = tableName;
    document.getElementById("tableContainer").innerHTML = tableHTML;
	document.getElementById("tableContainer").style.backgroundImage = "url(background-img.jpg)"; // https://pixabay.com/photos/astronomy-bright-constellation-dark-1867616/ link for background image

}
