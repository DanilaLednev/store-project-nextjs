'use client'

import {cls} from "@/lib/utils";
import {useCategoryStore} from "@/store/category";

interface CategoriesProps {
  className?: string
}

const cats = [
    {id: 1, name: 'New Balance'},
    {id: 2, name: 'Saucony'},
    {id: 3, name: 'Nike'},
    {id: 4, name: 'Timberland'},
    {id: 5, name: 'Palladium'},
];


export const Categories = ({ className }: CategoriesProps) => {

    const categoryActiveId = useCategoryStore((state) => state.activeId);

return (
    <div className={cls('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
        {cats.map(({name, id}, index) => (
            <a
                className={cls(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
                )}
                href={`/#${name}`}
                key={index}>
                <button>{name}</button>
            </a>
        ))}
    </div>
)
};
