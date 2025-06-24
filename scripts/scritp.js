/**
 * Handles frontend logic: submission, fetch, and deletion of sleep predictions.
 * Connects with backend API via POST /predict, GET /records, and DELETE /prediction.
 */

const API_BASE_URL = "http://localhost:5000"; // Adjust if needed

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("predictionForm");
  const tableBody = document.querySelector("#predictionsTable tbody");

  /**
   * Handles form submission and sends data as FormData to backend.
   */
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name.value);
    formData.append("age", form.age.value);
    formData.append("heart_rate", form.heartRate.value);
    formData.append("stress_level", form.stressLevel.value);
    formData.append("physical_activity_level", form.physicalActivity.value);
    formData.append("sleep_duration", form.sleepDuration.value);

    try {
      const response = await fetch(`${API_BASE_URL}/predict`, {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Failed to submit prediction.");
      }

      await loadPredictions(); // Refresh table
      form.reset(); // Clear form
    } catch (error) {
      console.error("Error during POST:", error);
      alert("Failed to submit prediction.");
    }
  });

  /**
   * Loads all prediction records using GET and displays them in the table.
   */
  async function loadPredictions() {
    try {
      const response = await fetch(`${API_BASE_URL}/records`, {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error("Failed to fetch predictions.");
      }

      const predictions = await response.json();
      tableBody.innerHTML = "";

      predictions.forEach((item) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.heart_rate}</td>
          <td>${item.stress_level}</td>
          <td>${item.physical_activity_level}</td>
          <td>${item.sleep_duration}</td>
          <td>${item.prediction_result === 1 ? "Disorder" : "No Disorder"}</td>
          <td><button onclick="deletePrediction(${item.id})">Remove</button></td>
        `;

        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error during GET:", error);
      alert("Failed to load predictions.");
    }
  }

  /**
   * Sends DELETE request to remove a prediction by ID.
   * @param {number} id - Prediction record ID
   */
  window.deletePrediction = async function (id) {
    // Directly proceed with deletion, no confirmation

    try {
      const response = await fetch(`${API_BASE_URL}/prediction?id=${id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Failed to delete prediction.");
      }

      await loadPredictions(); // Refresh table
    } catch (error) {
      console.error("Error during DELETE:", error);
      alert("Failed to delete prediction.");
    }
  };

  // Load predictions on page load
  loadPredictions();
});
