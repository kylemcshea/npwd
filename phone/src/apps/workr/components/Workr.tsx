import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Category, grabCategoryData } from '../hooks/state';
import { CategoryCard } from './CategoryCard';

export const Workr: React.FC = () => {
  const [categoryData, setCategoryData] = useState<Category[]>(null);
  useEffect(() => {
    const catData = grabCategoryData();
    setCategoryData(catData);
  }, [categoryData]);
  return (
    <div>
      {categoryData ? (
        categoryData.map((cat) => cat.amountOnline > 0 && <CategoryCard key={cat.id} {...cat} />)
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
