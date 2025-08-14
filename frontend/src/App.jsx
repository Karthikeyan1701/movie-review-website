import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/user-facing/Home';
import Movies from './pages/user-facing/Movies';
import MovieInfo from './pages/user-facing/MovieInfo';
import Reviews from './pages/user-facing/Reviews';
import ReviewDetails from './pages/user-facing/ReviewDetails';
import SearchResults from './pages/user-facing/SearchResults';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-info" element={<MovieInfo />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/review-details" element={<ReviewDetails />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}
