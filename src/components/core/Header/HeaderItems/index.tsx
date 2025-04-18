"use client";

import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { JavascriptOriginal, FlutterOriginal, LinuxOriginal, PandasOriginal, PythonOriginal, ReactOriginal } from 'devicons-react';

const HeaderItems = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="space-x-0 md:space-x-5 lg:space-x-16 text-lg flex flex-wrap gap-1 md:gap-0 md:flex-row">
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "group", 'text-lg')}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg">
                        Eventos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-3 p-6 md:w-[400px] lg:w-[550px] lg:grid-cols-2">
                            <div className="pr-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/eventos/minicursos"
                                    >
                                        <div className="flex flex-row flex-wrap gap-3">
                                            <JavascriptOriginal size="36" className="grow max-h-[4vh]" />
                                            <FlutterOriginal size="36" className="grow max-h-[4vh]" />
                                            <LinuxOriginal size="36" className="grow max-h-[4vh]" />
                                            <PythonOriginal size="36" className="grow max-h-[4vh]" />
                                            <PandasOriginal size="36" className="grow max-h-[4vh]" />
                                            <ReactOriginal size="36" className="grow max-h-[4vh]" />
                                        </div>
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            /minicursos
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Uma coleção de minicursos sobre diversos temas e subtemas da área da computação.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </div>
                            <div className="pl-3">
                                <ul className="space-y-3">
                                    <ListItem href="/eventos/palestra" title="/palestra" className="hover:bg-[#FFA28D]">
                                        Ministrada por ex-aluno da Ufersa sobre o mercado de trabalho.
                                    </ListItem>
                                    <ListItem href="/eventos/maratona-de-programacao" title="/maratona_de_programação" className="hover:bg-[#FFA28D]">
                                        Competição de programação para alunos de todos os niveis.
                                    </ListItem>
                                    <ListItem href="/eventos/mostra-cientifica" title="/mostra_científica" className="hover:bg-[#FFA28D]">
                                        Apresentação de projetos desenvolvidos no departamento.
                                    </ListItem>
                                    <ListItem href="/eventos/hackathon" title="/hackathon" className="hover:bg-[#FFA28D]">
                                        Competição em grupo voltada a problem solvers.
                                    </ListItem>
                                </ul>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/cronograma" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "group", 'text-lg')}>
                            Cronograma
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/galeria" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "group", 'text-lg')}>
                            Galeria
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/faq" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "group", 'text-lg')}>
                            FAQ
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem";

export default HeaderItems;