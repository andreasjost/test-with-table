$(document).ready(function() {
    weekTables();

    $('.select-col').click(function() {
        $(this).parent().addClass('test-background');
  
    });
});



let calendarLabels = {
    weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    allMonths: ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"]
};




function weekTables() {

    let buildingSpace = document.getElementById("weeks-container");
    let today = new Date();
    let loopDate = new Date();
    loopDate.setDate(1);

    let cssGrid = document.createElement('div');
    cssGrid.classList.add('grid');
    buildingSpace.appendChild(cssGrid);

    
    // build the left column
    let colLeft = document.createElement('div');
    colLeft.classList.add('grid-col', 'grid-col--fixed-left');
    cssGrid.appendChild(colLeft);

    let colLeftTitle = document.createElement('div');
    colLeftTitle.classList.add('grid-item--header');
    colLeftTitle.innerHTML = '<br>' + "Time";
    colLeft.appendChild(colLeftTitle);

    for (let i = 0; i < 24; i++) {
        let timeLabel = document.createElement('div');
        timeLabel.classList.add('grid-item');
        timeLabel.innerText = String(i);
        colLeft.appendChild(timeLabel);
    }

    while (loopDate.getMonth() == today.getMonth()) {

        // create a new column
        let dayColumn = document.createElement('div');
        dayColumn.classList.add('grid-col');
        cssGrid.appendChild(dayColumn);

        // column header (date)
        let dayColumnHead = document.createElement('div');
        dayColumnHead.classList.add('grid-item--header');
        dayColumnHead.classList.add('select-col'); // reaction to click
        dayColumnHead.innerHTML = '<a href="#!">' + calendarLabels.weekDays[loopDate.getDay()] + '<br>' + loopDate.getDate() + '</a>';
        dayColumn.appendChild(dayColumnHead);

        // create all the cells
        for (let i = 0; i < 24; i++) {
            let cell = document.createElement('div');
            cell.classList.add('grid-item');
            if (i % 2 == 0) {
                cell.classList.add('even-row');
            }
            if (loopDate.getDay() == 0) {
                cell.classList.add('neweek-border');
                if (i == 0) {
                    cell.innerText = loopDate.getWeek();
                    cell.classList.add('week-number');
                }
            }
            dayColumn.appendChild(cell);
        }
        loopDate.setDate(loopDate.getDate() + 1); 
    }
    
}

// get the calendarweek-number
Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}
