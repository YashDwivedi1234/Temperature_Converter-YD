const form = document.querySelector("#form");
      console.log("HEloo1");
      form.addEventListener("submit", (e) => {
        console.log("HEloo2");
        e.preventDefault();
        console.log("HEloo3");
        const resultOne = document.querySelector("#resultOne");
        const resultTwo = document.querySelector("#resultTwo");
        let type = document.querySelector("#type").value;
        let degrees = document.querySelector("#degrees").value;
        degrees = parseFloat(degrees);
        if (type === "c") {
          console.log("HEloo4");
          console.log(convertToFahrenheit(degrees, "c"));
          console.log(convertToKelvin(degrees, "c"));
          resultOne.innerText = convertToFahrenheit(degrees, "c");
          resultTwo.innerText = convertToKelvin(degrees, "c");
        } else if (type === "f") {
          console.log("HEloo4");
          console.log(convertTocelsius(degrees, "c"));
          console.log(convertToKelvin(degrees, "c"));
          resultOne.innerText = convertTocelsius(degrees, "f");
          resultTwo.innerText = convertToKelvin(degrees, "f");
        } else {
          console.log("HEloo4");
          console.log(convertTocelsius(degrees, "c"));
          console.log(convertToFahrenheit(degrees, "c"));
          resultOne.innerText = convertTocelsius(degrees, "k");
          resultTwo.innerText = convertToFahrenheit(degrees, "k");
        }
      });
      const convertTocelsius = (value, from) => {
        if (from === "f") {
          return `${((value - 32) * (5 / 9)).toFixed(2)} C`;
        } else {
          return `${(value - 273.15).toFixed(2)} C`;
        }
      };
      const convertToFahrenheit = (value, from) => {
        if (from === "c") {
          return `${(value * 1.8 + 32).toFixed(2)} F`;
        } else {
          return `${((value * 9) / 5 - 459.67).toFixed(2)} F`;
        }
      };
      const convertToKelvin = (value, from) => {
        if (from === "f") {
          return `${((value + 459.67) * (5 / 9)).toFixed(2)} K`;
        } else {
          return `${(value + 273.15).toFixed(2)} K`;
        }
      };