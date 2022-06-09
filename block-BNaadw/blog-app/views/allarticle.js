<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Articles</title>
    <link rel="stylesheet" href="/stylesheets/style.css">
</head>
<body>
    <header class="border-2 shadow-sm p-8 text-xl flex justify-between">
        <a class="border-2 bg-green-500 py-1 px-3 rounded-md text-white" href="/articles/new">Add Article</a>
        <a class="border-2 bg-red-500 py-1 px-3 rounded-md text-white" href="">Logout</a>
    </header>

    <main>
        <section class="m-10">
            <div>
                <% articles.forEach(article => { %>
                    <a href="/articles/<%= article.slug  %> ">
                        <h2 class="text-green-600 font-bold uppercase"><%= article.title  %>  </h2>
                    </a>
                <% }) %>
            </div>
        </section>
    </main>

</body>
</html>
