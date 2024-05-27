const searchBox = document.querySelector("#search-box")
const submitButton = document.querySelector("#submit-button")

export function fetchData() {
    submitButton.addEventListener("click", () => {
        console.log("submit button clicked!")
        const searchTerm = searchBox.value.trim();

        async function fetchAPI() {
            const result = await fetch(
                `http://api.weatherapi.com/v1/current.json&forecast.json?key=6b748278fa8c4c08bc6101823242505&q=${searchTerm}&days=3`,
                { mode: "cors" }
            )

            const json = await result.json()

            console.log(json);
        }
        fetchAPI()
    })
}
