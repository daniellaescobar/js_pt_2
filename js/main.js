function mostWinsIndex(wins_array){
    var tempHighWins = 0;
    var tempLeader = 0;
    for (var i=0; i<wins_array.length; i++){
        if(wins_array[i] >= tempHighWins){
            tempHighWins = wins_array[i];
            tempLeader = i;
        }
    }
    return tempLeader;
}

function createTable(teams_array, wins_array, losses_array, leaderIndex) {

    var headers = ["Teams", "Wins", "Losses"];
    var table = document.createElement("TABLE");  //makes a table element for the page
        
    for(var i = 0; i < teams_array.length; i++) {
        if(i == leaderIndex){
            var row = table.insertRow(i);
            row.insertCell(0).innerHTML = "<strong>" + teams_array[i] + "</strong>";
            row.insertCell(1).innerHTML = "<strong>" + wins_array[i] + "</strong>";
            row.insertCell(2).innerHTML = "<strong>" + losses_array[i] + "</strong>";
        }
        else{
            var row = table.insertRow(i);
            row.insertCell(0).innerHTML = teams_array[i];
            row.insertCell(1).innerHTML = wins_array[i];
            row.insertCell(2).innerHTML = losses_array[i];
        }
    }

    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for(var i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = "<strong>" + headers[i] + "</strong>";
    }

    document.body.append(table);
}


teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

createTable(teams, wins, losses, mostWinsIndex(wins));

// created with help from https://stackoverflow.com/questions/64949448/how-to-create-a-table-from-an-array-using-javascript

var h1 = "National League";
document.getElementById("teams").style.fontSize = '25px';
document.getElementById("teams").innerHTML = "<b>" + h1 + "</b>";

// created with help from https://whaa.dev/how-to-change-font-size-in-javascript#:~:text=To%20change%20font%20size%20in%20JavaScript%2C%20do%20this%3A%20element.,fontSize%20%3D%20'10px'%20.