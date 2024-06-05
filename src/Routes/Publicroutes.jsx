// Import necessary libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // Import your Home component
import Contact from "../pages/Contact";

// Define the PublicRoutes component
const PublicRoutes = () => {
	return (
		// Use BrowserRouter as the root component for routing
		<BrowserRouter>
			{/* Use Routes component to define your routes */}
			<Routes>
				{/* Define a route for the home page */}
				<Route path="/" element={<Home />} />
				<Route path="/contact-us" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
};

// Export the PublicRoutes component
export default PublicRoutes;
