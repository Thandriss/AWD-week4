if (document.readyState !== "loading") {
    initializeCode();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      initializeCode();
    });
  }
  
  function initializeCode() {
    const cont = document.getElementById("rec");
    let newCard = generateDivWithImg();
    cont.appendChild(newCard);
  }

  async function fetchDog(wikiImg, wikiHeader, wikiText) {
    await fetch("/recipe/:food", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: '{ "text": "' + textInput.value +'" }'
    })
  }