const search = document.querySelector('.text-search')
const button = document.querySelector('.button-search')
let searchValue = ''
let results = document.querySelector('.results')

button.addEventListener('click', () => {
    results.innerHTML = ''
    searchValue = search.value
    const tvShows = async () => {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
        for (let show of res.data) {
            let newDiv = document.createElement('div')
            newDiv.className = 'each-div'
            let newImg = document.createElement('img')
            newImg.className = 'each-img'
            newDiv.append(show.show.name)
            results.append(newDiv)
            newImg.src = show.show.image.original || show.show.image.medium
            newImg.alt = show.show.name
            newDiv.append(newImg)
        }
    }
    tvShows()
})