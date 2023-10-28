interface CategoryItem {
  id: number;
  label: string;
}

declare namespace Category {
  type Item = CategoryItem;
  type List = CategoryItem[];
}
