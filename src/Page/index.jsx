import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";
import Footer from "../components/shared/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Home() {
    return (
        <>
        <Header />
        <Hero />
        <ProductList />
        <Footer />
        </>
    )
}