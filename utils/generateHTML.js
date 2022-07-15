function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" type="stylesheet">
        <title>Portfolio Generator</title>
      </head>
      <body>
        <!-- name, location, bio, LinkedIn URL, and GitHub URL.  -->
        <header
          style="
            position: fixed;
            /* background: blue; */
            top: 0;
            height: 80px;
            width: 100%;
            text-align: center;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid black;
          "
        >
          <h1>${data.name}'s Portfolio</h1>
        </header>
        <main style="position: fixed; width: 100%; top: 90px; text-align: center">
          <section class="about_me">
            <p>Name: ${data.name}</p>
            <p>Location: ${data.location}</p>
            <p>Bio: ${data.bio}</p>
            <p>Languages Learned: </p>
            <ul>${data.tech.map((language) => {
              return `<li style="list-type: none;">${language}<li>`;
            })}
            <ul>
  
          </section>
          <section class="contact_me">
            <a href="${data.linkedIn}" style="text-decoration: none">LinkedIn</a>
            <a href="${data.gitHub}" style="text-decoration: none">Github</a>
          </section>
        </main>
      </body>
    </html>
    `;
  }
  module.exports = generateHTML;