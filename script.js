let words = [
    {count: 3715, word: ''},
    {count: 2220, word: 'the'},
    {count: 1140, word: 'a'},
    {count: 780, word: 'of'},
    {count: 520, word: 'and'}
]

let wordCountsMap = new Map()

document.getElementById('count-words').addEventListener('click', () => {
    let wordStr = document.getElementById('words-input').value.split(' ')

    wordStr.map((word) => {
        let newWord = word.replace('\n', '').toLowerCase()
        wordCount = wordCountsMap[newWord]

        wordCountsMap[newWord] = wordCount ? wordCount + 1 : 1;
    })

    let wordCountArr = [];

    for (var key in wordCountsMap) {
        wordCountArr.push({
        word: key,
        count: wordCountsMap[key]
    });
    }

    var sortedWordCount = wordCountArr.sort(function(a, b) {
        return (b.count > a.count) ? 1 : ((a.count > b.count) ? -1 : 0)
    });

    console.log(sortedWordCount)

    let table = document.querySelector("table");
    generateTable(table, sortedWordCount);
})



const generateTable = (table, wordCounts) => {
    rankNum = 1
    wordCounts.map((wordInfo) => {
        let row = table.insertRow();
        let rowElems = [rankNum, wordInfo.count, wordInfo.word]

        rowElems.map((elem) => {
            let cell = row.insertCell();
            let text = document.createTextNode(elem);
            cell.appendChild(text);
        })

        rankNum++;
    })
}