const callbackFunction = (entries) => {
    console.log(entries[0])
}

const observer = new IntersectionObserver(callbackFunction)

export default observer