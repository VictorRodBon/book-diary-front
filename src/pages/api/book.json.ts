import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const edition = url.searchParams.get("edition");

  if (!edition) {
    return new Response(JSON.stringify({ error: "Missing edition id" }), { status: 400 });
  }

  const editionUrl = `https://openlibrary.org/books/${edition}.json`;
  const res = await fetch(editionUrl);
  const data = await res.json();

  return new Response(JSON.stringify(data), { status: 200 });
};
