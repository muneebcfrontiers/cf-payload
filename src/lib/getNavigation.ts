export async function getNavigation() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/navigation`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch navigation");
    return [];
  }

  const data = await res.json();
  return data.menu || [];
}