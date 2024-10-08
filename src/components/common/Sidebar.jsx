import { useState } from "react";
import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { motion,AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/",
	},
	{ name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];
const Sidebar = () => {
    const [isSidebarOpen,setIssidebarOpen]=useState(true)

    return (
        <motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 
        ${isSidebarOpen?"w-72":"w-20"}`}
        animate={{width:isSidebarOpen?256:80}}
        >
            <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
                <motion.button
                    whileHover={{scale:1.2}}
                    whileTap={{scale:1.1}}
                    className="rounded-full p-2 hover:bg-gray-700 transition-colors max-w-fit"
                    onClick={()=>setIssidebarOpen((prev)=>!prev)}
                >
                    <Menu size={24}/>
                </motion.button>

                <nav className="flex-grow mt-4">
                    {SIDEBAR_ITEMS.map((item)=>(
                        <Link key={item.href} to={item.href}>
                            <div className="flex items-center p-4 text-sm font-medium hover:bg-gray-700 mb-2 rounded-lg">
                                <item.icon size={20} style={{color:item.color,maxWidth:"20px"}}/>
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.span
                                            className="ml-4 whitespace-nowrap"
                                            initial={{opacity:0,width:0}}
                                            animate={{opacity:1,width:"auto"}}
                                            exit={{opacity:0,width:0}}
                                            transition={{duration:0.1,delay:0.2}}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.div>
    )
}

export default Sidebar