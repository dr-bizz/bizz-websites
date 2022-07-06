export function handleChange(e) {
    const {name, value} = e.target
    this.setState({[name]: value})
}

export function handleChangeCheckbox(e) {
    const subname = e.target.getAttribute("data-name")
    this.setState({[subname]: !this.state[subname]})
}

// Check to make sure inputs are validated
export function validationJS(input, inputError, errorMessage, type) {
    if (type == 1 || type == 0) {
        if (type == 1) {
            document.getElementById(input).classList.add("error")
            document.getElementById(inputError).classList.add("error")
            document.getElementById(inputError).innerHTML += "<span>" + errorMessage + "</span>"
        } else {
            document.getElementById(input).classList.remove("error")
            document.getElementById(inputError).classList.remove("error")
            document.getElementById(inputError).innerHTML = ""
        }
    }
}

// Check to make sure inputs are validated
export function formErrorsJS(element, errorMessage, type) {
    if (type == 1 || type == 0) {
        if (type == 1) {
            document.getElementById(element).classList.add("error")
            document.getElementById(element).innerHTML += "<span>" + errorMessage + "</span>"
        } else {
            document.getElementById(element).classList.remove("error")
            document.getElementById(element).innerHTML = ""
        }
    }
}