
function generatePage(allEmployees) {
    return `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Profiles</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        </head>
        <body>
        <header>
        <h1 >My Team</h1>
    </header>
    <main>
        <section class=card>
            <h2>
                ${generateManager(allEmployees)}
            </h2>
        </section>
    </main>
        </body>
        </html>
        `
};

module.exports = generatePage;
