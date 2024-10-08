'use client'

import Image from "next/image"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const products = [
  { id: 1, name: 'Holstein Cow', price: 120000, category: 'Livestock', image: '/cow-product.jpg' },
  { id: 2, name: 'Angus Cow', price: 1500000, category: 'Livestock', image: '/cow-product.jpg' },
  { id: 3, name: 'Boer Goat', price: 3000000, category: 'Livestock', image: '/goat-product.jpg' },
  { id: 4, name: 'Nubian Goat', price: 35000, category: 'Livestock', image: '/placeholder.svg' },
  { id: 5, name: 'Broiler Chicken', price: 1002385, category: 'Poultry', image: '/poultry-product.jpg' },
  { id: 6, name: 'Layer Hen', price: 20312377, category: 'Poultry', image: '/placeholder.svg' },
  { id: 7, name: 'Cattle Feed', price: 5011009, category: 'Animal Feed', image: '/placeholder.svg' },
  { id: 8, name: 'Poultry Feed', price: 4323230, category: 'Animal Feed', image: '/placeholder.svg' },
  { id: 9, name: 'Organic Fertilizer', price: 30, category: 'Fertilizer', image: '/placeholder.svg' },
  { id: 10, name: 'NPK Fertilizer', price: 35, category: 'Fertilizer', image: '/placeholder.svg' },
]

const categories = ['All', 'Livestock', 'Poultry', 'Animal Feed', 'Fertilizer']

const addToCart = (product: { id?: number; name: any; price?: number; category?: string; image?: string }) => {

  console.log(`${product.name} has been added to the cart.`);

};

export default function Products(){
const [selectedCategory, setSelectedCategory] = useState('All')
const [priceRange, setPriceRange] = useState([0, 2000000])
const [searchTerm, setSearchTerm] = useState('')


const filteredProducts = products.filter((product) => 
(selectedCategory === 'All' || product.category === selectedCategory) &&
(product.price >= priceRange[0] && product.price <= priceRange[1]) &&
product.name.toLowerCase().includes(searchTerm.toLowerCase())
)

  return(
    <div>
      <div className="px-4 py-6 mx-auto container">
        <h1 className="text-center font-bold text-6xl mb-6">Products Marketplace</h1>

        <div className="mb-6 space-y-2">
          <div className="flex flex-wrap gap-4">
          <Select onValueChange={(Value) => setSelectedCategory(Value)}>
            <SelectTrigger className="w-96">
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
          type = 'text'
          placeholder = 'search item'
          value = {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-auto lg:w-auto"
          />
          </div>
          <div className="space-y-2">
              <Label>Price range: TZS{priceRange[0]} - TZS{priceRange[1]}</Label>
              <Slider
              min={0}
              max={2000000}
              step={1000}
              value={priceRange}
              onValueChange={setPriceRange}
              className="w-96"
              />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{product.name}</CardTitle>
              <p className="text-2xl font-bold">TZS {product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button onClick={() => addToCart(product)} className="w-full">
                Buy Product
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
        </div>
      </div>
    </div>
  )
}