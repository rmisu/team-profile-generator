module.exports = allEmployees => {
        console.log(allEmployees);
        return `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Profiles</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
        </head>

        <body>

        <header>
            <h1>My Team</h1>
        </header>

        <main>
            <section class="card" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title bg-primary text-white"> Role: ${allEmployees[0]?.getRole()}
                </br> Name: ${allEmployees[0]?.name}</h3>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${allEmployees[0]?.id}</li>
                <li class="list-group-item"> Email: <a href="mailto:${allEmployees[0]?.email}">${allEmployees[0]?.email}</a></li>
                <li class="list-group-item"> Office #: ${allEmployees[0]?.office}</li>
                </ul>
            </div>

            <div class="card-body">
                <h3 class="card-title bg-primary text-white"> Role: ${allEmployees[1]?.getRole()}
                </br> Name: ${allEmployees[1]?.name}</h3>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${allEmployees[1]?.id}</li>
                <li class="list-group-item"> Email: <a href="mailto:${allEmployees[1]?.email}">${allEmployees[1]?.email}</a></li>
                <li class="list-group-item"> Github Username: <a href="https://github.com/${allEmployees[1]?.github}">${allEmployees[1]?.github}</a></li>
                </ul>
            </div>

            <div class="card-body">
                <h3 class="card-title bg-primary text-white"> Role: ${allEmployees[2]?.getRole()}
                </br> Name: ${allEmployees[2]?.name}</h3>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${allEmployees[2]?.id}</li>
                <li class="list-group-item"> Email: <a href="mailto:${allEmployees[2]?.email}">${allEmployees[2]?.email}</a></li>
                <li class="list-group-item"> School: ${allEmployees[2]?.school}</li>
                </ul>
            </div>
    
    </section>
        </main>
        </body>

        </html>
        `;
};


