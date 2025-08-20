
import { Button } from '@/components/ui/button';

interface Category {
  key: string;
  label: string;
}

interface PhotoFiltersProps {
  categories: Category[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const PhotoFilters = ({ categories, activeFilter, onFilterChange }: PhotoFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.key}
          variant={activeFilter === category.key ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(category.key)}
          className="mb-2 text-xs md:text-sm"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default PhotoFilters;
