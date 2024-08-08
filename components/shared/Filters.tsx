import {Title} from "@/components/shared/Title";
import {FilterCheckbox} from "./FilterCheckbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "./RangeSlider";
import {CheckboxFiltersGroup} from "./CheckboxFiltersGroup";


interface FiltersProps {
  className?: string
}

export const Filters = ({ className }: FiltersProps) => {


return (
    <div className={className}>
        <Title text='Filter' size={"sm"} className='mb-5 font-bold' />

        <div className='flex flex-col gap-4'>
            <FilterCheckbox text='Get it' value='get' />
            <FilterCheckbox text='New' value='new' />
        </div>

        <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
            <p className="font-bold mb-3 ">Price from and to:</p>
            <div className="flex gap-3 mb-5">
                <Input type='number' placeholder="0" min={0} max={3000} defaultValue={0} />
                <Input type='number'  placeholder="300"  min={1} max={3000}  />
            </div>
        <RangeSlider  min={0} max={3000} step={1} value={[0, 500]} />
        </div>

        <CheckboxFiltersGroup
            title='Producs'
            className='mt-5'
            limit={6}
            defaultItems={[
                {
                    text: 'Product-1',
                    value: '1',
                },
                {
                    text: 'Product-2',
                    value: '2',
                },
                {
                    text: 'Product-3',
                    value: '3',
                },
                {
                    text: 'Product-4',
                    value: '4',
                },
                {
                    text: 'Product-5',
                    value: '5',
                },
            ]}
            items={[
                {
                    text: 'Product-1',
                    value: '1',
                },
                {
                    text: 'Product-2',
                    value: '2',
                },
                {
                    text: 'Product-3',
                    value: '3',
                },
                {
                    text: 'Product-1',
                    value: '1',
                },
                {
                    text: 'Product-2',
                    value: '2',
                },
                {
                    text: 'Product-3',
                    value: '3',
                },
                {
                    text: 'Product-1',
                    value: '1',
                },
                {
                    text: 'Product-2',
                    value: '2',
                },
                {
                    text: 'Product-3',
                    value: '3',
                },
                {
                    text: 'Product-1',
                    value: '1',
                },
                {
                    text: 'Product-2',
                    value: '2',
                },
                {
                    text: 'Product-3',
                    value: '3',
                },
                {
                    text: 'Product-1',
                    value: '1',
                },
                {
                    text: 'Product-2',
                    value: '2',
                },
                {
                    text: 'Product-3',
                    value: '3',
                },
                {
                    text: 'Product-1',
                    value: '1',
                },
                {
                    text: 'Product-2',
                    value: '2',
                },
                {
                    text: 'Product-3',
                    value: '3',
                },
                {
                    text: 'Product-1',
                    value: '1',
                },
                {
                    text: 'Product-2',
                    value: '2',
                },
                {
                    text: 'Product-3',
                    value: '3',
                },
                {
                    text: 'Product-1',
                    value: '1',
                },
                {
                    text: 'Product-2',
                    value: '2',
                },
                {
                    text: 'Product-3',
                    value: '3',
                },
            ]}
        />
    </div>
)
};
