import React from 'react';
import { Field } from 'react-final-form'
import { useCategories } from '../hooks/categories';

const CategorySelect = () => {
  const { data, loading } = useCategories();

  if (!data || loading) return null;

  return (
    <Field name="categoryId" render={({ input }) => (
      <div>
        <label>Category</label>
        <select {...input}>
          <option />
          {data.categories.map(({ id, name }) => <option value={id} key={id}>{name}</option>)}
        </select>
      </div>
    )} />
  );
};

export default CategorySelect;
