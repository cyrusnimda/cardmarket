import { useContext } from "react";
import { CartContext, type CartContextType } from "@/context/cart";
import type { CardProduct, Cart } from '@/app/types'

export const useCart = () => {
    const context = useContext(CartContext) as CartContextType;
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return context
}