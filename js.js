const tips = [
    "Switch to reusable bags instead of plastic to reduce waste.",
    "Buy locally grown produce to reduce carbon footprint.",
    "Opt for energy-efficient appliances in your home.",
    "Plant a tree to help absorb CO2 and increase greenery.",
    "Use cloth napkins instead of paper towels.",
    "Install a water-saving showerhead to reduce water use.",
    "Repurpose old furniture instead of buying new.",
    "Try a plant-based meal once a week to reduce impact."
  ];
  
  function displayRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tipDisplay = document.getElementById('tip-display');
    tipDisplay.textContent = tips[randomIndex];
  }
  
  document.getElementById('new-tip-button').addEventListener('click', displayRandomTip);
  window.onload = displayRandomTip;
  