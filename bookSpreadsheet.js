/**
 * Makes sure that the form does not get any duplicate entries and maintains semi-proper, semi-standardized formatting
 */
function updateAndFormat() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(),
  s = ss.getSheetByName('Form Responses 1'),
  lastRow = s.getLastRow(),
  lastValues = s.getRange('A'+lastRow+':F'+lastRow).getValues()[0],
  name = lastValues[1],
  allNames = s.getRange('B2:B'+lastRow).getValues(), 
  row, len;

  //make sure that the row is formatted correctly
  formatRow(s, lastRow);

  // TRY AND FIND EXISTING NAME
  for (row = 0, len = allNames.length; row < len - 1; row++) {
    //if exists, then update that row
    if (allNames[row].toString().toLowerCase() === name.toString().toLowerCase()) {
      // OVERWRITE OLD DATA
      updateRow(s, lastValues, row + 2); 
      // DELETE THE LAST ROW
      s.deleteRow(lastRow);
      break;
    }
    
  }
}

/** 
 *  Updates the row with new information if the suggestion is a duplicate
 *    sheet = the current sheet that we are looking at
 *    updatedRow = the new duplicated suggestion
 *    rowNum = the row number that we are updating (where the og row is)
 **/
function updateRow(sheet, updatedRow, rowNum) {
  for (let i = 1; i < 6; i++) {
    let currCol = String.fromCharCode(65 + i).concat(rowNum);
    let curr = updatedRow[i];
    if (curr) {
      sheet.getRange(currCol).setValue(updatedRow[i]);
    }
  }
}

/**
 * Makes sure that every entry is properly formatted (or tries to format it properly)
 *    sheet = the current sheet that we are looking at
 *    rowNum = the row to be checked (usually, the last row)
 * 
 * Not perfect formatting b/c program cannot tell words apart from each other based on context
 * (cannot differentiate nouns, proper nouns, etc)
 */
function formatRow(sheet, rowNum) {
  for (let i = 1; i < 4; i++) {
    let currCol = String.fromCharCode(65 + i);
    let cellNum = currCol.concat(rowNum);
    let cell = sheet.getRange(cellNum);
    let cellValue = cell.getValue();
    let unformatted = cellValue.split(/[ ,]+/).filter(Boolean); 
    let formattedString = "";

    for (let j = 0; j < unformatted.length; j++) {
      let word = unformatted[j];
      let authorCol = 3;
      if (j == 0 || (word.length >= 3 && word != "the") || currCol == authorCol) {
        word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
      }
      formattedString += word + " ";
    }
    formattedString.trim();
    cell.setValue(formattedString);
  }
}
