import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Компоненты макета
import MainLayout from './components/layout/MainLayout';

// Страницы
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import AuthorsPage from './pages/AuthorsPage';
import AuthorDetailPage from './pages/AuthorDetailPage';

// Создаем тему
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="books" element={<BooksPage />} />
                        <Route path="books/:id" element={<BookDetailPage />} />
                        <Route path="authors" element={<AuthorsPage />} />
                        <Route path="authors/:id" element={<AuthorDetailPage />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;