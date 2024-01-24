import CategorySection from "@/components/CategorySection";
import { getCategories } from "@/libs/apis";

export default async function Home() {
  const categories = await getCategories();

  console.log(categories)

  return (
    <main>
      <h1>Hero Section and whatever other sections you want to have here.</h1>
      <CategorySection categories={categories} />
    </main>
  );
}
