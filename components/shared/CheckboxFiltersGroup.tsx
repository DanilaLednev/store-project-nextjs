'use client';

import {FilterCheckbox, FilterCheckboxProps} from "./FilterCheckbox";
import {Input} from "@/components/ui";
import {ChangeEvent, useState} from "react";

type Item = FilterCheckboxProps

interface CheckboxFiltersGroupProps {
    className?: string;
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    loading?: boolean;
    searchInputPlaceholder?: string;
    onClickCheckbox?: (id: string) => void;
    defaultValue?: string[];
    selected?: Set<string>;
    name?: string;
}


export const CheckboxFiltersGroup = (props: CheckboxFiltersGroupProps) => {

 const {
        className,
        title,
        items,
        defaultItems,
        limit = 5,
        loading,
        searchInputPlaceholder = 'Search...',
        onClickCheckbox,
        defaultValue,
        selected,
        name,
      } = props;

    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');


    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handelShowAll = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    }

    const list = showAll
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : defaultItems.slice(0, limit);


    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>

          {showAll && (
              <div className='mb-5'>
                  <Input
                      onChange={onChangeSearchInput}
                      placeholder={searchInputPlaceholder}
                      className='bg-gray-50 border-none'
                  />
              </div>
          )}

          <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
              {list.map((item, index) => (
                  <FilterCheckbox
                      key={index}
                      text={item.text}
                      value={item.value}
                      endAdornment={item.endAdornment}
                      checked={selected?.has(item.value)}
                      onCheckedChange={() => onClickCheckbox?.(item.value)}
                      name={name}
                  />
              ))}
          </div>

          {items.length > 0 && (
              <div className={showAll ? 'border-t-neutral-100 mt-4' : ''}>
                  <button onClick={handelShowAll} className="text-primary mt-3">
                      {showAll ? 'hide' : '+ show all'}
                  </button>
              </div>
          )}
      </div>
 );
}
