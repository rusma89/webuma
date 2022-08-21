fetch("./home.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("badan").innerHTML = data;
  });