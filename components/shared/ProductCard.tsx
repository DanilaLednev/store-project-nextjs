import Link from "next/link";
import {Title} from "./Title";
import {Button} from "@/components/ui";
import {Plus} from "lucide-react";


interface ProductCardProps {
  className?: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const ProductCard = (props: ProductCardProps) => {

  const {
    className,
      id,
      name,
      price,
      imageUrl
  } = props

  return (
      <div className={className}>
        <Link href={`/product/${id}`}>
          <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
            <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
          </div>

          <Title text={name} size="sm" className='mb-1 mt-3 font-bold' />

          <p className="text-sm text-gray-400">Description</p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-[20px]">
              from <b>${price}</b>
            </span>

            <Button variant="secondary" className="text-base font-bold">
              <Plus size={20} className="mr-1" />
            </Button>
          </div>
        </Link>
      </div>
  )
};
