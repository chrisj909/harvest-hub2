import { Cart } from "./Cart";
import SearchBox from "./SearchBox";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import { SearchProvider } from "@/context/SearchContext";

export const Header = () => {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Harvest Hub</span>
          </a>
          <Menubar className="hidden md:flex">
            <MenubarMenu>
              <MenubarTrigger>Products</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link to="/hemp-flower">Hemp Flower</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link to="/cbd-tinctures">CBD Tinctures</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link to="/pre-rolls">Hemp Pre-Rolls</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>About</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link to="/about">Our Story</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link to="/mission">Mission</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Contact</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link to="/contact">Get in Touch</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link to="/support">Support</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="flex-1 px-4">
          <SearchProvider>
            <SearchBox />
          </SearchProvider>
        </div>
        <div className="flex items-center justify-end">
          <Cart />
        </div>
      </div>
    </header>
  );
};