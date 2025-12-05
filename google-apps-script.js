/**
 * Google Apps Script for Pipeful AI Waitlist Form
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1PX9W5o4DBzoJTs6d5Mg6_qehCmKVWevS1ZHtt3_viKE/edit
 * 2. Go to Extensions > Apps Script
 * 3. Delete the default code and paste this entire file
 * 4. Save the project (File > Save)
 * 5. Click "Deploy" > "New deployment"
 * 6. Click the gear icon and select "Web app"
 * 7. Set "Execute as" to "Me"
 * 8. Set "Who has access" to "Anyone"
 * 9. Click "Deploy"
 * 10. Copy the Web App URL
 * 11. Replace 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE' in index.html with your Web App URL
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.openById('1PX9W5o4DBzoJTs6d5Mg6_qehCmKVWevS1ZHtt3_viKE').getActiveSheet();
    
    // Parse the data - handle both JSON and form-encoded data
    let data;
    if (e.postData && e.postData.contents) {
      try {
        // Try parsing as JSON first
        data = JSON.parse(e.postData.contents);
      } catch (e) {
        // If not JSON, parse as form-encoded
        data = {};
        const params = e.parameter;
        data.email = params.email || '';
        data.firstName = params.firstName || '';
        data.lastName = params.lastName || '';
        data.phone = params.phone || '';
        data.company = params.company || '';
      }
    } else {
      // Handle form-encoded data from parameters
      data = {
        email: e.parameter.email || '',
        firstName: e.parameter.firstName || '',
        lastName: e.parameter.lastName || '',
        phone: e.parameter.phone || '',
        company: e.parameter.company || ''
      };
    }
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Prepare the row data in the order: Timestamp, Email, First Name, Last Name, Phone, Company
    const rowData = [
      timestamp,
      data.email || '',
      data.firstName || '',
      data.lastName || '',
      data.phone || '',
      data.company || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional: Set up column headers if the sheet is empty
 * Run this function once manually to set up headers
 */
function setupHeaders() {
  const sheet = SpreadsheetApp.openById('1PX9W5o4DBzoJTs6d5Mg6_qehCmKVWevS1ZHtt3_viKE').getActiveSheet();
  
  // Check if first row is empty
  if (!sheet.getRange(1, 1).getValue()) {
    sheet.getRange(1, 1, 1, 6).setValues([[
      'Timestamp',
      'Email',
      'First Name',
      'Last Name',
      'Phone',
      'Company'
    ]]);
    
    // Format header row
    const headerRange = sheet.getRange(1, 1, 1, 6);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#f0f0f0');
  }
}

