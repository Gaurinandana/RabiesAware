import streamlit as st
import pandas as pd
import folium
from streamlit_folium import st_folium

# 1. SETUP: This makes the website look professional
st.set_page_config(page_title="RabiesAware", page_icon="🐾", layout="wide")

# 2. DATA: Right now this is fake. Your friend will replace this later.
# This is the "Brain" of your app.
data = {
    "Tag_ID": ["RED101", "BLUE202", "YELLOW303"],
    "Status": ["Vaccinated", "Unvaccinated", "Vaccinated"],
    "Last_Dose": ["2024-01-15", "N/A", "2023-12-01"],
    "Lat": [12.9716, 12.9816, 12.9616],
    "Long": [77.5946, 77.6046, 77.5846]
}
df = pd.DataFrame(data)

# 3. SIDEBAR: Navigation menu on the left
st.sidebar.title("🛡️ RabiesAware")
choice = st.sidebar.radio("Navigation", ["Search Dog", "Risk Heatmap", "Emergency Info"])

# 4. PAGE 1: SEARCH (The "Dual-ID" System)
if choice == "Search Dog":
    st.title("🔍 Search Dog Status")
    st.write("Type the Tag ID you see on the dog's ear from a safe distance.")
    
    # This box takes the user's input
    user_query = st.text_input("Enter Tag ID (e.g. RED101)").upper()
    
    if user_query:
        result = df[df['Tag_ID'] == user_query]
        if not result.empty:
            status = result.iloc[0]['Status']
            color = "green" if status == "Vaccinated" else "red"
            st.subheader(f"Dog Found! Status: :{color}[{status}]")
            st.write(f"**Last Vaccination:** {result.iloc[0]['Last_Dose']}")
        else:
            st.error("Dog not found in our database. Stay away and report!")

# 5. PAGE 2: MAP (The Heatmap Innovation)
elif choice == "Risk Heatmap":
    st.title("📍 Stray Dog Surveillance Map")
    st.write("Green = Vaccinated | Red = Unvaccinated/High Risk")
    
    # Create the map using Folium
    m = folium.Map(location=[12.9716, 77.5946], zoom_start=13)
    for _, row in df.iterrows():
        folium.Marker(
            [row['Lat'], row['Long']],
            popup=row['Tag_ID'],
            icon=folium.Icon(color="green" if row['Status']=="Vaccinated" else "red")
        ).add_to(m)
    
    # Display the map in the app
    st_folium(m, width=800, height=500)

# 6. PAGE 3: EMERGENCY (The Bite Protocol)
elif choice == "Emergency Info":
    st.title("🚨 Emergency Response")
    st.error("IF BITTEN: Wash the wound with soap for 15 minutes immediately.")
    st.markdown("""
    - **Step 1:** Do not panic. Identify the dog's tag color/number.
    - **Step 2:** Go to the nearest clinic for the Rabies vaccine.
    - **Step 3:** Report the incident to local authorities.
    """)
    if st.button("Find Nearest Clinic"):
        st.info("Redirecting to hospital listings...")