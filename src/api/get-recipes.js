export const getRecipes = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/recipes?limit=50`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Error while fetching data!");
    }

    return await res.json();
  } catch (error) {
    throw new Error("Internal server error");
  }
};
