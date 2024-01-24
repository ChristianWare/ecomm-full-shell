import { Category } from "@/models/category";
import Link from "next/link";

interface Props {
  categories: Category[];
}

const CategorySection = ({ categories }: Props) => {
  return (
    <div>
      <h2>Category Section</h2>
      {categories?.map((x: Category) => (
        <Link key={x._id} href={x.slug.current}>
          <span>{x.name}</span>
        </Link>
      ))}
    </div>
  );
};
export default CategorySection;
