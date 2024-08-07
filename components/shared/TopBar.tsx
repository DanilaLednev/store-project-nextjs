import {cls} from "@/lib/utils";
import {Container} from "@/components/shared/Container";
import {Categories} from "@/components/shared/Categories";
import {SortPopup} from "@/components/shared/SortPopup";


interface TopBarProps {
  className?: string
}

export const TopBar = ({ className }: TopBarProps) => {

return (
    <div className={cls('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
        <Container>
            <Categories/>
            <SortPopup/>
        </Container>
    </div>
)
};
