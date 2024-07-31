import Logo from "@components/Logo";
import ForumPage from "@pages/forum";
import LoginPage from "@pages/login";
import SignUpPage from "@pages/sign-up";
import TopicPage from "@pages/topic";
import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-[#F6F6F9]">
			<Logo />
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route
							path="/"
							element={
								<Link to="/forum" className="text-blue-500 underline">
									Forum
								</Link>
							}
						/>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/sign-up" element={<SignUpPage />} />
						<Route path="/forum" element={<ForumPage />} />
						<Route path="/topic/:id" element={<TopicPage />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

export default App;
