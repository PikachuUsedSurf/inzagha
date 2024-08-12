"use client"

import { useState, useMemo } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"

export default function Products() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: { min: 0, max: Infinity },
  })
  const [sort, setSort] = useState("featured")
  const products = [
    {
      id: 1,
      name: "Angus Cattle",
      description: "High-quality Angus beef cattle",
      price: 1500,
      category: "cattle",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 2,
      name: "Dorper Sheep",
      description: "Robust and hardy sheep breed",
      price: 500,
      category: "sheep",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 3,
      name: "Berkshire Pigs",
      description: "Flavorful and marbled pork",
      price: 300,
      category: "pigs",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 4,
      name: "Hereford Cattle",
      description: "Gentle and efficient beef cattle",
      price: 1800,
      category: "cattle",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      id: 5,
      name: "Merino Sheep",
      description: "Soft and high-quality wool",
      price: 400,
      category: "sheep",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      id: 6,
      name: "Yorkshire Pigs",
      description: "Lean and muscular pork",
      price: 250,
      category: "pigs",
      image: "/placeholder.svg",
      featured: false,
    },
  ]
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedFilters.category.length > 0 && !selectedFilters.category.includes(product.category)) {
          return false
        }
        if (product.price < selectedFilters.priceRange.min || product.price > selectedFilters.priceRange.max) {
          return false
        }
        return true
      })
      .sort((a, b) => {
        switch (sort) {
          case "low":
            return a.price - b.price
          case "high":
            return b.price - a.price
          default:
            return 0
        }
      })
  }, [selectedFilters, sort])
  const handleFilterChange = (type, value) => {
    if (type === "category") {
      setSelectedFilters({
        ...selectedFilters,
        category: selectedFilters.category.includes(value)
          ? selectedFilters.category.filter((item) => item !== value)
          : [...selectedFilters.category, value],
      })
    } else if (type === "priceRange") {
      setSelectedFilters({
        ...selectedFilters,
        priceRange: value,
      })
    }
  }
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <div className="grid gap-6">
          <Accordion type="single" collapsible className="w-full" defaultValue="category">
            <AccordionItem value="category">
              <AccordionTrigger className="text-base">Category</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox onCheckedChange={() => handleFilterChange("category", "cattle")} />
                    Cattle
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox onCheckedChange={() => handleFilterChange("category", "sheep")} />
                    Sheep
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox onCheckedChange={() => handleFilterChange("category", "pigs")} />
                    Pigs
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
        <div className="grid gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Livestock for Sale</h1>
              <p className="text-muted-foreground">Browse our selection of high-quality livestock.</p>
            </div>

          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product) => (
              <Card key={product.id} className="relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src="/placeholder.svg"
                  alt={product.name}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                />
                <CardContent>
                  <h3 className="font-semibold tracking-tight">{product.name}</h3>
                  <p className="text-sm leading-none text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">${product.price}</div>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink href="#" onClick={() => handlePageChange(page)} isActive={page === currentPage}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}

