import { showWeather } from "./showWeather";

const searchBox = document.querySelector("#search-box")
const submitButton = document.querySelector("#submit-button")

const API_KEY = "6b748278fa8c4c08bc6101823242505"//free API so no need of hiding key

async function fetchAPI(searchTerm) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json&forecast.json?key=${API_KEY}&q=${searchTerm}&days=3`,
        { mode: "cors" }
    )

    if (!response.ok) {
        if (response.status === 400) {
            alert("Invalid location. Please enter a valid location.");
            throw new Error("Invalid location. Please enter a valid location.");
        } else {
            throw new Error("Network response not OK");
        }
    }

    const json = await response.json()

    return json
}

export function fetchData() {
    submitButton.addEventListener("click", async () => {
        await handleSearch()
    })

    searchBox.addEventListener("keyup", async (e) => {
        if (e.key === "Enter") {
            await handleSearch()
        }
    }
    )
}

async function handleSearch() {
    const content = document.querySelector(".content");
    content.textContent = "Loading...";
    const searchTerm = searchBox.value.trim();

    if (!searchTerm) {
        alert("Please enter a location")
        return
    }

    try {
        const result = await fetchAPI(searchTerm)
        showWeather(result)
    } catch (error) {
        console.error(error);
    }
}
