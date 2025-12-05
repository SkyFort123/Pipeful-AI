# Waitlist Form Setup Instructions

The waitlist form is ready to use! You have two options to connect it to your Google Sheet:

## Option 1: Google Apps Script (Recommended - More Control)

1. **Open your Google Sheet:**
   - Go to: https://docs.google.com/spreadsheets/d/1PX9W5o4DBzoJTs6d5Mg6_qehCmKVWevS1ZHtt3_viKE/edit

2. **Set up Google Apps Script:**
   - Click `Extensions` > `Apps Script`
   - Delete any default code
   - Copy and paste the contents of `google-apps-script.js`
   - Save the project (File > Save, or Ctrl+S / Cmd+S)

3. **Deploy as Web App:**
   - Click `Deploy` > `New deployment`
   - Click the gear icon (⚙️) next to "Select type"
   - Choose `Web app`
   - Set "Execute as" to `Me`
   - Set "Who has access" to `Anyone`
   - Click `Deploy`
   - Copy the `Web App URL` that appears

4. **Update index.html:**
   - Open `index.html`
   - Find the line: `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';`
   - Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with your Web App URL
   - Save the file

5. **Set up column headers (optional):**
   - In Apps Script, run the `setupHeaders()` function once
   - This will add headers: Timestamp, Email, First Name, Last Name, Phone, Company

## Option 2: Google Forms (Easier - Less Customization)

1. **Create a Google Form:**
   - Go to Google Forms: https://forms.google.com
   - Create a new form
   - Add fields matching your form:
     - Email (required)
     - First Name
     - Last Name
     - Phone Number
     - Company Name

2. **Connect to your Sheet:**
   - In the form, click the "Responses" tab
   - Click the Google Sheets icon to link to your existing sheet
   - Select your sheet: `1PX9W5o4DBzoJTs6d5Mg6_qehCmKVWevS1ZHtt3_viKE`

3. **Get the form submission URL:**
   - In the form, click "Send" button
   - Click the link icon (🔗)
   - Copy the form URL
   - Add `/formResponse` to the end if it's not there
   - Replace `viewform` with `formResponse` in the URL

4. **Update the JavaScript:**
   - Open `index.html`
   - Find the commented section for Google Forms submission
   - Uncomment that code block
   - Comment out the Google Apps Script code
   - Replace `YOUR_GOOGLE_FORM_SUBMISSION_URL` with your form URL

## Form Fields

The form collects:
- **Email** (required)
- First Name (optional)
- Last Name (optional)
- Phone Number (optional)
- Company Name (optional)

## Testing

After setup, test the form by:
1. Opening your website
2. Clicking "Join our Waitlist"
3. Filling out the form
4. Submitting
5. Checking your Google Sheet for the new entry

## Troubleshooting

- **Form not submitting:** Check browser console for errors
- **Data not appearing in sheet:** Verify the Google Apps Script URL is correct
- **CORS errors:** Make sure "Who has access" is set to "Anyone" in Apps Script deployment
- **Headers missing:** Run the `setupHeaders()` function in Apps Script

