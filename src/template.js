const template = (teamMembers) => {
const cardsArr = []
    for (var i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].getRole()==='Manager') {
        cardsArr.push(managerCard(teamMembers[i]))
        } else if (teamMembers[i].getRole()==='Engineer') {
            cardsArr.push(eningeerCard(teamMembers[i]))
        }
    }
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
    </head>
    <body>
        
    ${cardsArr}
    </body>
    </html>
    `
}

// functions to make each card