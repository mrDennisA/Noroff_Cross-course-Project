// HEAD
let extractPageName = window.location.pathname
    .split("/")
    .pop()
    .replace(/\/?.html/g, "");

const urlApi = "https://yunitto.online/noroff/FEU1/AW32_Content-Management-Systems/wp/wp-json/wc/v3/products/";
const apiKey = "?consumer_key=ck_7ac3c5ae6e385766d72a163568b2312209af9f12&consumer_secret=cs_2cff425a5029d2edb58553a61ff34c59c2d72b12";

const body = document.querySelector("body");
const main = document.querySelector("main");

async function fetchApi(url, key) {
    try {
        const json = await (await fetch(url + key + "&per_page=100")).json();

        // Sort Items
        const jsonSorted = json.sort((a, b) => a - b);

        // Add Header
        addHeader();

        // Filter Array by Categories
        const mens = jsonSorted.filter((value) => categoryFilter(value, "mens"));
        const womens = jsonSorted.filter((value) => categoryFilter(value, "womens"));

        // Add Main
        addMain(mens, womens);
        body.style.backgroundColor = "var(--color02)";
        main.classList.remove("loader");

        // End
        main.innerHTML += `
            <div class="banner"></div>
        `;

        // Add Footer
        addFooter();
    } catch (error) {
        console.log(error);
    }
}

// Filter Categories Function
function categoryFilter(value, category) {
    return value.categories.some((value) => value.slug === category);
}
