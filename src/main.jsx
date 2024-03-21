import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Protected from './components/Protected.jsx'
import Login from './components/Login/Login'
import Home from './components/home/Home.jsx'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route path='/login' element={<Login />} />
			<Route path='/' element={<Protected />}>
				<Route path='/' index element={<Home />} />
			</Route>
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
)
