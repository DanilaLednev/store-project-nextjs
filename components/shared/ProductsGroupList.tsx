'use client';

import {cls} from "@/lib/utils";
import {useIntersection} from "react-use";

import {Title} from "./Title";
import {ProductCard} from "./ProductCard";
import {useEffect, useRef} from "react";
import {useCategoryStore} from "@/store/category";


interface ProductsGroupListProps {
  className?: string;
  listClassName?: string;
  title: string;
  categoryId: number;
  products: any[];
}

export const ProductsGroupList = (props: ProductsGroupListProps) => {

    const {
        className,
        listClassName,
        title,
        categoryId,
        products
    } = props

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className='font-extrabold mb-5' />

            <div className={cls('grid grid-cols-3 gap-[50px]', listClassName)}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))}
            </div>
        </div>
    );
}
