let words = [
    {count: 3715, word: ''},
    {count: 2220, word: 'the'},
    {count: 1140, word: 'a'},
    {count: 780, word: 'of'},
    {count: 520, word: 'and'}
]

let wordCounts = new Map()

document.getElementById('count-words').addEventListener('click', () => {
    let wordStr = document.getElementById('words-input').value.split(' ')
    console.log(wordStr)

    wordStr.map((word) => {
        let newWord = word.replace('\n', '').toLowerCase()
        wordCount = wordCounts[newWord]

        wordCounts[newWord] = wordCount ? wordCount + 1 : 1;
    })

    sortedWordCounts = new Map([...wordCounts].sort((a, b) => wordCounts[a]))

    console.log(wordCounts);

    let table = document.querySelector("table");
    generateTable(table, wordCounts);
})



const generateTable = (table, wordCounts) => {
    rankNum = 1
    Object.keys(wordCounts).map((word) => {
        let row = table.insertRow();
        let rowElems = [rankNum, word, wordCounts[word]]

        rowElems.map((elem) => {
            let cell = row.insertCell();
            let text = document.createTextNode(elem);
            cell.appendChild(text);
        })

        rankNum++;
    })

    // for (let key of data) {
    //     console.log(element)
    //     let row = table.insertRow();

    //     console.log()

    //     let rankCell = row.insertCell();
    //     let rank = document.createTextNode(rankNum);
    //     rankCell.appendChild(rank);
    //     rankNum++;

    //     // for (key in element) {
    //     //     let cell = row.insertCell();
    //     //     let text = document.createTextNode(element[key]);
    //     //     cell.appendChild(text);
    //     // }
    // }
}