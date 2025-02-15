import "./App.css";
import React from 'react';
import Note from "./pages/note";
import Index from "./pages/index";
import RootLayout from "./components/layout/root";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />} >
          <Route path="/" element={<Index />} />
          <Route path="/note/:noteId" element={<Note />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
