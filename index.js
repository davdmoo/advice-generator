async function main() {
  try {
    await fetchData();

    const refreshButton = document.getElementById("refresh");
    refreshButton.addEventListener("click", fetchData);
  } catch (error) {
    console.error(error, "ERROR");
  }
}

async function fetchData() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      mode: "cors",
      cache: "no-cache",
    });
    const responseData = await response.json();

    const adviceId = responseData["slip"]["id"];
    const advice = responseData["slip"]["advice"];

    let adviceIdHtml = document.getElementById("advice-id");
    adviceIdHtml.innerHTML = `ADVICE #${adviceId}`;

    let adviceHtml = document.getElementById("advice");
    adviceHtml.innerHTML = `${advice}`;

    return responseData;
  } catch (error) {
    console.error(error);
  }
}

main();
