teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

function rowInstance(rowData) {
    var row = elementInstance("TR");
    var len = rowData.length;
    for(var c = 0; c<len; c++) {
        var cell = cellInstance(rowData[c]);
        row.appendChild(cell);
    }
    return row
}

function cellInstance(cellData) { 
    var cell = elementInstance("TD");
    cell.innerText = cellData;
    return cell
}

function elementInstance(tagName) {
    return document.createElement(tagName);
}


var teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
var wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
var losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

var len = teams.length;
var table = document.createElement('table');
for(var c = 0; c < len; c++){
    table.appendChild(rowInstance([teams[c], wins[c],losses[c]]));
}

