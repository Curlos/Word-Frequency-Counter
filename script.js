let words = [
    {count: 3715, word: ''},
    {count: 2220, word: 'the'},
    {count: 1140, word: 'a'},
    {count: 780, word: 'of'},
    {count: 520, word: 'and'}
]



console.log(words)



const generateTable = (table, data) => {
    rankNum = 1

    for (let element of data) {
        let row = table.insertRow();

        let rankCell = row.insertCell();
        let rank = document.createTextNode(rankNum);
        rankCell.appendChild(rank);
        rankNum++;

        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table")
generateTable(table, words);