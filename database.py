import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd

# Define scope
scope = [
    "https://spreadsheets.google.com/feeds",
    "https://www.googleapis.com/auth/drive"
]

# Authenticate
creds = ServiceAccountCredentials.from_json_keyfile_name(
    "credentials.json", scope
)

client = gspread.authorize(creds)

# Open the sheet
sheet = client.open("RabiesAware Database").sheet1

# Convert to DataFrame
data = sheet.get_all_records()
df = pd.DataFrame(data)

print(df.head())