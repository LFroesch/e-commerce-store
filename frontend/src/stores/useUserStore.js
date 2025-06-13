import { create } from 'zustand';
import axios from '../lib/axios';
import { toast } from 'react-hot-toast';
import { get } from 'mongoose';

export const useUserStore = create((set) => ({
    user:null,
    loading:false,
    checkingAuth:true,

    signup: async ({ name, email, password, confirmPassword }) => {
		set({ loading: true });

		if (password !== confirmPassword) {
			set({ loading: false });
			return toast.error("Passwords do not match");
		}

		try {
			const res = await axios.post("/auth/signup", { name, email, password });
			set({ user: res.data, loading: false });
            // no toast - will redirect to home page after signup
            // toast.success("Signup successful! Redirecting to home page...");
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.message || "An error occurred");
            console.log("Error in signup:", error.response.data.message);
		}
	},
    login: async (email, password) => {
		set({ loading: true });

		try {
			const res = await axios.post("/auth/login", { email, password });

			set({ user: res.data, loading: false });
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.message || "An error occurred");
		}
	},
    logout: async () => {
        set({ loading: true });

        try {
            await axios.post("/auth/logout");
            set({ user: null, loading: false });
            toast.success("Logged out successfully");
        } catch (error) {
            set({ loading: false });
            toast.error(error.response.data.message || "An error occurred");
        }
    },
    checkAuth: async () => {
        set({ checkingAuth: true });
        try {
            const res = await axios.get("/auth/profile");
            set({ user: res.data, checkingAuth: false });
        } catch (error) {
            set({ checkingAuth: false, user: null });
            console.log(error.message);
        }
    },
    refreshToken: async () => {
        if (get().checkingAuth) return;
        set({ checkingAuth: true });
        try {
            const res = await axios.get("/auth/refresh-token");
            set({checkingAuth: false });
            return res.data;
        } catch (error) {
            set({ checkingAuth: false, user: null });
            throw error;
        }
    }
}));


// TODO: Implement the axios interceptor to refresh token automatically
