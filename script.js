let wordCountsMap = new Map()

document.getElementById('count-words').addEventListener('click', () => {
    let wordStr = document.getElementById('words-input').value.split(' ').filter((word) => word != '' && word != '\n');
    
    if(wordStr.length == 0) {
        displayErrorMessage();
        return;
    }

    let errorDiv = document.getElementById('error');
    errorDiv.style.display = "None";

    if(document.getElementById("word-frequency-table")) {
        document.getElementById("word-frequency-table").remove();
    }
 

    wordStr.map((word) => {
        let newWord = word.toLowerCase()
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

    let table = document.createElement("table");
    table.setAttribute("id", "word-frequency-table")
    generateTableHead(table, sortedWordCount[0]);
    generateTable(table, sortedWordCount);

    document.body.appendChild(table);
})

const generateTableHead = (table, data) => {
    let thead = table.createTHead();
    let row = thead.insertRow();
    let theads = ['Rank', ...Object.keys(data)];
    console.log(Object.keys(data))

    theads.map((key => {
        let titleCaseKey = key.charAt(0).toUpperCase() + key.slice(1)
        let th = document.createElement("th");
        let text = document.createTextNode(titleCaseKey);
        th.appendChild(text);
        row.appendChild(th);
    }));
}

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

const displayErrorMessage = () => {
    let errorDiv = document.getElementById('error');
    errorDiv.style.display = "block";

    console.log('error')
}