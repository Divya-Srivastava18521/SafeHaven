import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib
import folium
from folium.plugins import HeatMap

# Dataset with cities across India
data = [
    [-90, 2, 0.8, 1000, 1], [-85, 4, 0.7, 800, 1],
    [-80, 6, 0.5, 600, 0], [-75, 8, 0.3, 400, 0],
    [-95, 1, 0.9, 1200, 1], [-70, 10, 0.2, 200, 0],
    [-88, 3, 0.85, 950, 1], [-82, 5, 0.65, 700, 1],
    [-78, 7, 0.45, 500, 0], [-72, 9, 0.25, 300, 0],
    [-92, 2, 0.88, 1100, 1], [-83, 5, 0.6, 750, 1]
]

columns = ["Signal Strength", "Tower Density", "Vegetation Cover", "Altitude", "Safe Zone"]
df = pd.DataFrame(data, columns=columns)

# Split dataset
X = df.drop("Safe Zone", axis=1)
y = df["Safe Zone"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=500, max_depth=12, random_state=42)
model.fit(X_train, y_train)

# Evaluate model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.2f}")

# Save model
joblib.dump(model, "safe_zone_model.pkl")

# Leaflet Heatmap with markers and legends
locations = [
    [28.7041, 77.1025, 1, "Delhi"],
    [19.0760, 72.8777, 0, "Mumbai"],
    [13.0827, 80.2707, 1, "Chennai"],
    [22.5726, 88.3639, 0, "Kolkata"],
    [12.9716, 77.5946, 1, "Bangalore"],
    [23.2599, 77.4126, 0, "Bhopal"],
    [26.9124, 75.7873, 1, "Jaipur"],
    [21.1702, 72.8311, 0, "Surat"],
    [17.3850, 78.4867, 1, "Hyderabad"],
    [15.3173, 75.7139, 1, "Hubli"],
    [11.0168, 76.9558, 0, "Coimbatore"],
    [9.9312, 76.2673, 1, "Kochi"],
    [26.8467, 80.9462, 0, "Lucknow"],
    [30.7333, 76.7794, 1, "Chandigarh"],
    [25.3176, 82.9739, 0, "Varanasi"]
]

# Create Map
m = folium.Map(location=[20.5937, 78.9629], zoom_start=5)
heat_data = [[loc[0], loc[1], loc[2]] for loc in locations]
HeatMap(heat_data).add_to(m)

# Add markers for signals
for loc in locations:
    color = "green" if loc[2] == 1 else "red"
    folium.Marker(
        location=[loc[0], loc[1]],
        popup=f"{loc[3]}: {'Safe Zone' if loc[2] == 1 else 'Unsafe Zone'}",
        icon=folium.Icon(color=color)
    ).add_to(m)

# Add legend
legend_html = '''
<div style="position: fixed; 
            bottom: 50px; right: 50px; width: 220px; height: 100px; 
            background-color: white; z-index:9999; font-size:14px;
            border:2px solid grey; padding: 10px;">
<b>Signal Strength</b><br>
<i class="fa fa-map-marker fa-2x" style="color:red"></i> High Signal (Unsafe)<br>
<i class="fa fa-map-marker fa-2x" style="color:green"></i> Low Signal (Safe)
</div>
'''
m.get_root().html.add_child(folium.Element(legend_html))

# Add SafeHaven to the Top-Left corner
safehaven_html = '''
<div style="position: fixed; 
            top: 10px; left: 10px; width: 120px; height: 40px; 
            background-color: white; z-index:9999; font-size:16px;
            border:2px solid grey; padding: 5px; text-align:center;">
<b>SafeHaven</b>
</div>
'''
m.get_root().html.add_child(folium.Element(safehaven_html))

# Add Zoom-in-out control to the bottom right
folium.plugins.Fullscreen(position='bottomright').add_to(m)

# Save map to an HTML file
m.save("heatmap.html")
print("Heatmap saved as heatmap.html")
