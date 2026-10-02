const phone = "918138836796";
const baseMessage = "Hello Kerala Taxiwalla, I would like to enquire about a taxi booking.";
const wa = "https://wa.me/" + phone;

document.querySelectorAll("[data-wa-link]").forEach(el => {
  el.href = wa + "?text=" + encodeURIComponent(baseMessage);
});

document.getElementById("bookBtn").addEventListener("click", () => {
  const pickup = document.getElementById("pickup").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const date = document.getElementById("date").value;
  const passengers = document.getElementById("passengers").value;

  let message = "Hello Kerala Taxiwalla,%0A%0AI would like to book a taxi.%0A";
  message += "Pickup: " + (pickup || "Not specified") + "%0A";
  message += "Destination: " + (destination || "Not specified") + "%0A";
  message += "Date: " + (date || "Not specified") + "%0A";
  message += "Passengers: " + passengers;

  window.open(wa + "?text=" + message, "_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();
