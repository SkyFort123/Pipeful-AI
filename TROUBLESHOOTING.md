# Troubleshooting Waitlist Form

If form submissions aren't appearing in your Google Sheet, follow these steps:

## Step 1: Update Your Google Apps Script

1. **Open your Google Sheet:**
   - Go to: https://docs.google.com/spreadsheets/d/1PX9W5o4DBzoJTs6d5Mg6_qehCmKVWevS1ZHtt3_viKE/edit

2. **Open Apps Script:**
   - Click `Extensions` > `Apps Script`

3. **Replace the code:**
   - Delete all existing code
   - Copy and paste the ENTIRE contents of `google-apps-script.js`
   - Save (Ctrl+S or Cmd+S)

4. **Redeploy the Web App:**
   - Click `Deploy` > `Manage deployments`
   - Click the pencil icon (✏️) next to your existing deployment
   - Click `New version` (this creates a new version)
   - Make sure "Execute as" is set to `Me`
   - Make sure "Who has access" is set to `Anyone`
   - Click `Deploy`
   - **IMPORTANT:** Copy the NEW Web App URL if it changed

5. **Update index.html if URL changed:**
   - If you got a new URL, update the `GOOGLE_SCRIPT_URL` in `index.html`

## Step 2: Test the Script Directly

1. In Apps Script, click the function dropdown and select `doPost`
2. Click the "Run" button (▶️)
3. You'll need to authorize the script - click "Review Permissions" and allow access
4. This tests if the script can access your sheet

## Step 3: Set Up Headers (If Sheet is Empty)

1. In Apps Script, select `setupHeaders` from the function dropdown
2. Click "Run" (▶️)
3. This will add the column headers to your sheet

## Step 4: Test the Form

1. Open your website
2. Click "Join our Waitlist"
3. Fill out the form (at minimum, enter an email)
4. Submit
5. Check your Google Sheet - data should appear within a few seconds

## Common Issues

### Issue: "Script function not found: doGet"
- **Solution:** Make sure you have a `doPost` function (not `doGet`). The form uses POST requests.

### Issue: Data not appearing
- **Check:** Make sure the script has permission to edit the sheet
- **Check:** Verify the Sheet ID in the script matches your sheet: `1PX9W5o4DBzoJTs6d5Mg6_qehCmKVWevS1ZHtt3_viKE`
- **Check:** Look at the Apps Script execution log (View > Execution log) for errors

### Issue: CORS errors in browser console
- **Solution:** This is normal with `no-cors` mode. The form will still submit successfully.

### Issue: Form shows success but no data in sheet
- **Check:** The Web App deployment permissions - must be set to "Anyone"
- **Check:** The script might need to be redeployed after code changes
- **Check:** Browser console for any JavaScript errors

## Alternative: Use Google Forms (Easier but Less Custom)

If the Apps Script method continues to have issues, you can use Google Forms:

1. Create a Google Form with the same fields
2. Link it to your sheet
3. Get the form submission URL
4. Use the commented-out Google Forms code in `index.html`

## Need More Help?

Check the execution logs in Apps Script:
- View > Execution log
- This will show any errors when the form is submitted

