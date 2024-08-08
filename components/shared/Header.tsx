import {cls} from "@/lib/utils";
import Image from "next/image";
import {Container} from "./Container";
import {Button} from "@/components/ui";
import {ArrowRight, ShoppingCart, User} from "lucide-react";

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {


    return (
        <header className={cls('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>

                {/* Left Part */}
                <div className='flex items-center gap-4'>
                    <Image className="rotate-[190deg]" src='/sneakers.png' alt='Logo' width='38' height='32'/>
                    <div>
                        <h1 className='text-2xl uppercase font-black'>Sneakers Shop</h1>
                        <p className='text-sm text-gray-400 leading-3'>Every step leads to success</p>
                    </div>
                </div>

                {/* Right Part */}
                <div className='flex items-center gap-3'>
                    <Button variant='outline' className='flex items-center gap-2'>
                        <User size={16}/>
                        Sign in
                    </Button>
                    <Button className='group relative'>
                        <b>$20</b>
                        <span className='h-full w-[1px] bg-white/30 mx-3'/>
                        <div className='flex items-center gap-1 transform duration-300 group-hover:opacity-0 '>
                            <ShoppingCart className='h-4 w-4 relative' strokeWidth={2}/>
                            <b>3</b>
                        </div>
                        <ArrowRight
                            className='w-5 absolute right-5 transform duration-300 -translate-x-2  opacity-0 group-hover:opacity-100 group-hover:translate-x-0 '/>
                    </Button>
                </div>

            </Container>

        </header>
    )
};
