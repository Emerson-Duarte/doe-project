document.querySelector('header button').addEventListener("click", function() {
    document.querySelector('.form').classList.toggle('hide')
})

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")
const image = document.getElementById("logo")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, " "),
    colorText: getStyle(html, "--color-text"),
    colorBlood: getStyle(html, "--color-blood"),
    colorBGblood: getStyle(html, "--color-bgblood"),
    colorFooter:getStyle(html, "--color-footer")
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5",
    colorBlood: "#ff4f4f",
    colorBGblood: "#ffffff11",
    colorFooter: "#444"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
        )   
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

checkbox.addEventListener("change", ({target}) => {
    target.checked ? image.src = "logodark.png" : image.src = "logo.png"
})
