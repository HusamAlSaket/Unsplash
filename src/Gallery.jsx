import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './Context';

// Move API key to environment variable in production
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ['images',searchTerm],
    queryFn: async () => {
      try {
        const result = await axios.get(`${BASE_URL}?client_id=${API_KEY}&query=${searchTerm}`);
        return result.data;
      } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
      }
    },
    retry: 1,
    staleTime: 1000 * 60 * 5
  });

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading images...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>Error loading images: {response.error?.message || 'Something went wrong'}</h4>
      </section>
    );
  }

  // Handle the response data structure from Unsplash API
  const images = response.data?.results || [];
  
  if (images.length === 0) {
    return (
      <section className='image-container'>
        <h4>No images found</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      <h2 className='title' style={{ marginTop: '35px' }}>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <img 
            key={image.id} 
            src={image.urls.small} 
            alt={image.alt_description || 'Gallery image'}
            className="gallery-image"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;