// using as motion.component to animate the form
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useCartStore } from "../stores/useCartStore";

const GiftCouponCard = () => {
	const { coupon, getMyCoupon } = useCartStore();

	useEffect(() => {
		getMyCoupon();
	}, [getMyCoupon]);

	// Don't render anything if no coupon
	if (!coupon) {
		return null;
	}

	return (
		<motion.div
			className='space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className='p-3 bg-emerald-900/30 border border-emerald-500/30 rounded-lg'>
				<h3 className='text-lg font-medium text-emerald-400'>✓ Loyalty Coupon Applied</h3>
				<p className='mt-2 text-sm text-gray-300'>
					{coupon.code} - {coupon.discountPercentage}% off automatically applied
				</p>
			</div>
		</motion.div>
	);
};

export default GiftCouponCard;