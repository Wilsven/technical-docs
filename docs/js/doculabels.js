


(function doculabels(){

    const rgx = /@label\(([^)]+)\)/g
    const rgx_local = /@label\(([^)]+)\)/

    /**
     * Function to match the colour type to the attribute type
     * @param label {string}
     * @returns {string}
     */
    const color_factory = (label) => {
        switch (label) {
            case "class":
            case "pipe":
            case "service":
                return "#8338ec"
            case "interface":
                return "#6b705c"
            case "attr":
                return "#d62828"
            case "meth":
                return "#7209b7"
            case "func":
                return "#ff006e"
            case "type":
                return "#3d5a80"
            case "private":
            case "read only":
                return "#5b8e7d"
            default:
                return "var(--md-code-fg-color)"
        }
    }

    /**
     * Function to replace
     * @param original {string}
     * @param label {string}
     * @returns {string}
     */
    const replace_tag = (
        original, label
    ) => {

        const labelValue = label.match(rgx_local)[1]

        return original.replace(label,
            `<code style="font-size: inherit; color: ${color_factory(labelValue)}; border-radius: .1rem; background-color: var(--md-code-bg-color); padding: 0 5px">${labelValue}</code>`)
    }

    // Selects header elements and TOC elements
    const navItems = document.querySelectorAll("nav > ul.md-nav__list .md-ellipsis, h1, h2, h3, h4, h5, h6")
    navItems.forEach(item => {
        const match = item.outerHTML.toString().match(rgx)
        if(match){
            match.forEach(tag => {
                item.innerHTML = replace_tag(item.innerHTML, tag)
            })
        }
    })

})()
