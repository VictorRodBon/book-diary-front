import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");

  if (!title) {
    return new Response(
      JSON.stringify({ error: "Missing title" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Construimos la URL de OpenLibrary
  const apiUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`;

  // Llamamos a OpenLibrary
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Transformamos los datos a un formato más limpio
  const books = data.docs.map((doc: any) => ({
    key: doc.key,
    title: doc.title,
    author: doc.author_name?.[0] ?? "Autor desconocido",
    year: doc.first_publish_year ?? null,
    edition_key: doc.edition_key?.[0] ?? null,
    cover_id: doc.cover_i ?? null
  }));

  return new Response(
    JSON.stringify({ books }),
    { headers: { "Content-Type": "application/json" } }
  );
};
