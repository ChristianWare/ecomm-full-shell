import { Category } from "@/models/category";
import Image from "next/image";
import Link from "next/link";

interface Props {
  categories: Category[];
}

const CategorySection = ({ categories }: Props) => {
  return (
    <div>
      <h2>Category Section</h2>
      {categories?.map((x: Category) => (
        <div key={x._id}>
          <Link href={x.slug.current}>
            <span>{x.name}</span>
          </Link>
          <Image src={x.image} alt='image' />
        </div>
      ))}
    </div>
  );
};
export default CategorySection;
