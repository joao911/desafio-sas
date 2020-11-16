import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import ContentBox from '../../components/ContentBox';

import './landing.scss';

interface Category {
  id: number;
  categoryName: string;
}

const Landing: React.FC = () => {

  const [categories, setCategories] = useState<Category[]>([
    { id: 17, categoryName: 'Science & Nature'},
    { id: 22, categoryName: 'Geography'},
    { id: 23, categoryName: 'History'},
    { id: 24, categoryName: 'Politics'},
    { id: 25, categoryName: 'Arts'}
  ]);

  return (
    <>
      <Header />

      <ContentBox>
        <h2>Categorias</h2>

        <div>
          {categories?.map(category => (
            <Link to={`/question/${category.id}`} className="styled-button" key={category.id}>
              {category.categoryName}
            </Link>
          ))}
        </div>
      </ContentBox>

        
        
    </>
  );
}

export default Landing;