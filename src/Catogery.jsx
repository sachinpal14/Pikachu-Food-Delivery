import { MdDensitySmall } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { PiHamburgerBold } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
 const Categories = [
    {
        id: 1,
        name: "All",
        icon: <MdDensitySmall className="size-5 text-green-500 md:size-7 " />
    },
    {
        id: 2,
        name: "breakfast",
        icon: <MdOutlineFreeBreakfast className="size-5 text-green-500  md:size-7 " />
    },
    {
        id: 3,
        name: "soups",
        icon: <LuSoup  className="size-5  text-green-500  md:size-7 " />
    },
    {
        id: 4,
        name: "pizza",
        icon: <GiFullPizza  className="size-5  text-green-500  md:size-7 " />
    },
    {
        id: 5,
        name: "burger",
        icon: <PiHamburgerBold className="size-5  text-green-500 md:size-7 "  />
    },
    {
        id: 6,
        name: "main_course",
        icon: <MdOutlineFoodBank className="size-5 text-green-500 md:size-7 "  />
    },
    {
        id: 7,
        name: "pasta",
        icon: <GiNoodles className="size-5  text-green-500 md:size-7 " />
    }
]

export default Categories